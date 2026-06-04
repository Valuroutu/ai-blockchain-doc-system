import re


def generate_summary(text):

    clean_text = re.sub(r"\s+", " ", text)

    if len(clean_text) > 300:
        return clean_text[:300] + "..."

    return clean_text