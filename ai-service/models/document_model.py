from pydantic import BaseModel


class VerificationResponse(BaseModel):

    status: str
    documentType: str
    confidence: int
    fraudScore: int
    summary: str
    extractedText: str

    ownerName: str = ""
    ifsc: str = ""
    accountNumber: str = ""