from fastapi import APIRouter

router = APIRouter(prefix="/ui", tags=["UI Config"])

@router.get("/components")
async def get_component_config(component = ''):
    components = {
        'Dashboard': {
            'name': 'Dashboard',
            'component': 'Dashboard',
            'title': 'Dashboard',
            'subtitle': 'Extract text from images',
            'icon': '📄',
        },
        'Scan': {
            'name': 'Scan',
            'component': 'Scan',
            'title': 'Scanner',
            'subtitle': 'Scan documents',
            # 'icon': '📋',
            'MaterialIcons': 'document-scanner',
        },
        'History': {
            'name': 'History',
            'component': 'History',
            'title': 'History',
            'subtitle': 'View past scans',
            # 'icon': '📚',
            'MaterialIcons': 'history',
        },
        'Settings': {
            'name': 'Settings',
            'component': 'Settings',
            'title': 'Settings',
            'subtitle': 'App preferences',
            # 'icon': '⚙️',
            'MaterialIcons': 'settings',
        },
        'CropImage': {
            'name': 'CropImage',
            'component': 'CropImage',
            'title': 'Crop Image',
            'subtitle': 'App preferences',
            # 'icon': '⚙️',
            'MaterialIcons': 'settings',
        }
    }

    if(component): 
        return components.get(component, {})

    return components


@router.get("/dashboard")
async def get_dashboard_config():
    return [
        'Scan',
        'History',
        'Settings',
    ]

@router.get("/header")
async def get_header_config():
    return [
        'Settings',
    ]