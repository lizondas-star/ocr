from fastapi import APIRouter, UploadFile, File
from utils.preprocessing import preprocess_image
from utils.ocr_engine import extract_text

router = APIRouter()

@router.post("/upload")
async def upload_image(file: UploadFile = File(...)):
    file_location = f"static/uploads/{file.filename}"

    with open(file_location, "wb") as f:
        f.write(await file.read())

    # Preprocess the image
    processed_path = preprocess_image(file_location)

    # Extract text using OCR
    extracted_text, detected_lang = extract_text(processed_path)

    return {
        "message": "Image uploaded and processed!",
        "original_image": file.filename,
        "processed_image": processed_path,
        "text": extracted_text,
        "language": detected_lang
    }