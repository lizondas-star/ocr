from fastapi import APIRouter

router = APIRouter(prefix="/ui", tags=["UI Config"])

@router.get("/dashboard")
async def get_dashboard_config():
    return {
        'layout': 'grid',
        'columns': 2,
        'cards': [
            {
                'id': 1,
                'title': 'Scan Text',
                'subtitle': 'Extract text from images',
                'icon': '📄',
                'color': '#1E88E5',
                'route': '/scan-text'
            },
            {
                'id': 2,
                'title': 'Document Scanner',
                'subtitle': 'Scan documents',
                'icon': '📋',
                'color': '#43A047',
                'route': '/doc-scanner'
            },
            {
                'id': 3,
                'title': 'History',
                'subtitle': 'View past scans',
                'icon': '📚',
                'color': '#FB8C00',
                'route': '/history'
            },
            {
                'id': 4,
                'title': 'Settings',
                'subtitle': 'App preferences',
                'icon': '⚙️',
                'color': '#8E24AA',
                'route': '/settings'
            }
        ]
    }

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
                                # 'class': 'logo',
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
                        'position': 'middle',
                        'content': [
                            {
                                # 'class': 'logo',
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
                                # 'class': 'logo',
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