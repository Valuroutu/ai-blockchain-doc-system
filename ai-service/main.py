from fastapi import FastAPI
from fastapi import UploadFile

app = FastAPI()

@app.get("/")
def home():

    return {
        "message": "AI Service Running"
    }

@app.post("/verify")
async def verify_document(file: UploadFile):

    allowed_types = [
        "application/pdf",
        "image/png",
        "image/jpeg"
    ]

    if file.content_type not in allowed_types:

        return {
            "status": "rejected",
            "reason": "Invalid file type"
        }

    content = await file.read()

    file_size = len(content)

    if file_size > 5 * 1024 * 1024:

        return {
            "status": "rejected",
            "reason": "File too large"
        }

    suspicious_words = [
        "hack",
        "virus",
        "fake"
    ]

    filename = file.filename.lower()

    for word in suspicious_words:

        if word in filename:

            return {
                "status": "rejected",
                "reason": "Suspicious file"
            }

    return {
        "status": "approved",
        "message": "Document verified"
    }