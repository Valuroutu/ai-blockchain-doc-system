from fastapi import FastAPI
from fastapi import UploadFile
from fastapi import File

import tempfile
import os

from services.ocr import (
    extract_text_from_pdf,
    extract_text_from_image
)

from services.classifier import (
    classify_document,
    confidence_score
)

from services.verifier import (
    fraud_detection,
    verification_status
)

from services.summarizer import (
    generate_summary
)

from services.extractor import (
    extract_document_data
)

from models.document_model import (
    VerificationResponse
)

app = FastAPI()


@app.get("/")
def home():
    return {
        "message": "AI Verification Service Running"
    }


@app.post(
    "/verify",
    response_model=VerificationResponse
)
async def verify_document(
    file: UploadFile = File(...)
):

    print("================================")
    print("FILE NAME:", file.filename)
    print("CONTENT TYPE:", file.content_type)
    print("================================")

    extension = os.path.splitext(
        file.filename
    )[1].lower()

    allowed_extensions = [
        ".pdf",
        ".png",
        ".jpg",
        ".jpeg"
    ]

    if extension not in allowed_extensions:

        return {
            "status": "rejected",
            "documentType": "Unknown",
            "confidence": 0,
            "fraudScore": 0,
            "summary": f"Unsupported file type: {extension}",
            "extractedText": "",
            "ownerName": "",
            "ifsc": "",
            "accountNumber": ""
        }

    data = await file.read()

    with tempfile.NamedTemporaryFile(
        delete=False,
        suffix=extension
    ) as temp:

        temp.write(data)
        temp_path = temp.name

    try:

        # OCR
        if extension == ".pdf":

            extracted_text = (
                extract_text_from_pdf(
                    temp_path
                )
            )

        else:

            extracted_text = (
                extract_text_from_image(
                    temp_path
                )
            )

        print(
            "OCR TEXT LENGTH:",
            len(extracted_text)
        )

        # Classification
        document_type = (
            classify_document(
                extracted_text
            )
        )

        # Confidence
        confidence = (
            confidence_score(
                extracted_text
            )
        )

        # Fraud Detection
        fraud_score = (
            fraud_detection(
                extracted_text
            )
        )

        # Verification Status
        status = (
            verification_status(
                fraud_score
            )
        )

        # Summary
        summary = (
            generate_summary(
                extracted_text
            )
        )

        # Extract structured data
        document_data = (
            extract_document_data(
                extracted_text
            )
        )

        response = {
            "status": status,
            "documentType": document_type,
            "confidence": confidence,
            "fraudScore": fraud_score,
            "summary": summary,
            "extractedText": extracted_text[:1000],

            "ownerName":
                document_data.get(
                    "ownerName",
                    ""
                ),

            "ifsc":
                document_data.get(
                    "ifsc",
                    ""
                ),

            "accountNumber":
                document_data.get(
                    "accountNumber",
                    ""
                )
        }

        print("AI RESPONSE:")
        print(response)

        return response

    except Exception as e:

        print("ERROR:", str(e))

        return {
            "status": "rejected",
            "documentType": "Unknown",
            "confidence": 0,
            "fraudScore": 0,
            "summary": str(e),
            "extractedText": "",
            "ownerName": "",
            "ifsc": "",
            "accountNumber": ""
        }

    finally:

        if os.path.exists(temp_path):
            os.remove(temp_path)