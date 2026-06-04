def fraud_detection(text):

    text = text.lower()

    suspicious_words = [
        "fake",
        "sample",
        "dummy",
        "edited",
        "test"
    ]

    score = 0

    for word in suspicious_words:
        if word in text:
            score += 20

    if len(text.strip()) < 50:
        score += 30

    return min(score, 100)


def verification_status(score):

    if score >= 60:
        return "rejected"

    if score >= 30:
        return "review_required"

    return "approved"