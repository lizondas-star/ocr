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
                        'status': False,
                        'position': 'left',
                        'content': [
                            {
                                'class': 'logo',
                                'icon': '📷',
                                # 'text': 'MyApp',
                                # 'img': '',
                                # "order": ["icon", "img", "text"]
                            },
                            {
                                'icon': '📄',
                            },
                            {
                                'icon': '🔍',
                            },
                            {
                                'icon': '⚙️',
                            },
                        ],
                    },
                    {
                        'status': False,
                        'position': 'middle',
                        'content': [
                            {
                                'class': 'logo',
                                'icon': '📷',
                                # 'text': 'MyApp',
                                # 'img': '',
                                # "order": ["icon", "img", "text"]
                            },
                            {
                                'icon': '📄',
                            },
                            {
                                'icon': '🔍',
                            },
                            {
                                'icon': '⚙️',
                            },
                        ],
                    },
                    {
                        'status': True,
                        'position': 'right',
                        'content': [
                            {
                                'class': 'logo',
                                'icon': '📷',
                                # 'text': 'MyApp',
                                # 'img': '',
                                # "order": ["icon", "img", "text"]
                            },
                            {
                                'icon': '📄',
                            },
                            {
                                'icon': '🔍',
                            },
                            {
                                'icon': '⚙️',
                            },
                        ],
                    }
                ]
            }
        ],
    }