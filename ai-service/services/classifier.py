def classify_document(text):

    text = text.lower()

    # Aadhaar
    if (
        "aadhaar" in text
        or "uidai" in text
        or "government of india" in text
    ):
        return "Aadhaar Card"

    # PAN
    if (
        "income tax department" in text
        or "permanent account number" in text
    ):
        return "PAN Card"

    # Passport
    if "passport" in text:
        return "Passport"

    # Driving License
    if (
        "driving licence" in text
        or "driving license" in text
    ):
        return "Driving License"

    # Bank Passbook
    if (
        "state bank of india" in text
        or "savings bank account" in text
        or "account no" in text
        or "ifsc" in text
        or "bank of india" in text
        or "bank account" in text
    ):
        return "Bank Passbook"

    # Degree
    if (
        "degree" in text
        or "university" in text
        or "bachelor" in text
        or "master" in text
    ):
        return "Degree Certificate"

    return "Unknown"


def confidence_score(text):

    text_length = len(text.strip())

    if text_length > 1000:
        return 99

    if text_length > 500:
        return 95

    if text_length > 200:
        return 90

    if text_length > 100:
        return 80

    return 60