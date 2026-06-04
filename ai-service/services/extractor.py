import re


def extract_name(text):

    patterns = [
        r"name\s*[:\-]?\s*(?:mr\.?|mrs\.?|ms\.?)?\s*([A-Z\s]{3,})",
        r"name\s*[:\-]?\s*([A-Z\s]{3,})"
    ]

    for pattern in patterns:

        match = re.search(
            pattern,
            text,
            re.IGNORECASE
        )

        if match:

            name = match.group(1)

            name = re.sub(
                r"\s+",
                " ",
                name
            ).strip()

            return name

    return ""


def extract_ifsc(text):

    text = text.upper()

    patterns = [
        r"[A-Z]{4}0[A-Z0-9]{6}",
        r"SBIN[A-Z0-9]{6}",
        r"[A-Z]{4}[0-9]{7}"
    ]

    for pattern in patterns:

        match = re.search(
            pattern,
            text
        )

        if match:
            return match.group()

    # OCR correction attempts
    possible_ifsc = re.findall(
        r"[A-Z0-9]{10,12}",
        text
    )

    for code in possible_ifsc:

        if (
            "SBIN" in code
            or "BIN" in code
        ):
            return code

    return ""


def extract_account_number(text):

    numbers = re.findall(
        r"\d[\d\s]{8,20}",
        text
    )

    candidates = []

    for num in numbers:

        cleaned = re.sub(
            r"\s+",
            "",
            num
        )

        if (
            cleaned.isdigit()
            and len(cleaned) >= 9
        ):
            candidates.append(cleaned)

    if candidates:

        candidates.sort(
            key=len,
            reverse=True
        )

        return candidates[0]

    return ""


def extract_document_data(text):

    return {
        "ownerName": extract_name(text),
        "ifsc": extract_ifsc(text),
        "accountNumber": extract_account_number(text)
    }