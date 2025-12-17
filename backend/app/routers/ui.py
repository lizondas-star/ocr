from fastapi import APIRouter

router = APIRouter(prefix="/ui", tags=["UI Config"])
@router.get("/header")
async def get_header_config():
    return {
        'module': [
            {
                'status': True,
                'component': 'HeaderTop',
                'element': [
                    {
                        'status': True,
                        'position': 'left',
                        'content': [
                            {
                                'class': 'logo',
                                'icon': '📷',
                                'text': 'MyApp',
                                'img': '',
                                "order": ["icon", "img", "text"]
                            }
                        ],
                    },
                    {
                        'status': True,
                        'position': 'middle',
                        'content': [
                            {
                                'class': 'logo',
                                'icon': '📷',
                                'text': 'MyApp',
                                'img': '',
                                "order": ["icon", "img", "text"]
                            }
                        ],
                    },
                    {
                        'status': True,
                        'position': 'right',
                        'content': [
                            {
                                'class': 'logo',
                                'icon': '📷',
                                'text': 'MyApp',
                                'img': '',
                                "order": ["icon", "img", "text"]
                            },
                            {
                                'class': 'logo',
                                'icon': '📷',
                                'text': 'MyApp',
                                'img': '',
                                "order": ["icon", "img", "text"]
                            },
                            {
                                'class': 'logo',
                                'icon': '📷',
                                'text': 'MyApp',
                                'img': '',
                                "order": ["icon", "img", "text"]
                            }
                        ],
                    }
                ]
            }
        ],
    }