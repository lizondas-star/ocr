from fastapi import APIRouter

router = APIRouter(prefix="/ui", tags=["UI Config"])
@router.get("/header")
async def get_header_config():
    return {
        "title": "OCR Application",
        "logo_url": "/static/logo.png",
        "navigation": [
            {"name": "Home", "url": "/"},
            {"name": "Upload", "url": "/upload"},
            {"name": "About", "url": "/about"}
        ]
    }