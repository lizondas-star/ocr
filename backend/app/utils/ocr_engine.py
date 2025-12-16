import pytesseract
from PIL import Image
from langdetect import detect, LangDetectException

def extract_text(image_path):
    img = Image.open(image_path)
    
    # Use multiple languages for mixed text
    text = pytesseract.image_to_string(img, lang='eng+ben+hin')
    
    # Detect primary language
    try:
        detected_lang = detect(text)
    except LangDetectException:
        detected_lang = "mixed/unknown"
    
    return text, detected_lang