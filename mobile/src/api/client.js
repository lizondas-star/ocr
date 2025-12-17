export async function apiGet(endpoint) {
    const API_BASE_URL = "http://127.0.0.1:8000";
    const res = await fetch(`${API_BASE_URL}/${endpoint}`);

    if(!res.ok) {
        throw new Error("Failed to fetch data");
    }
    
    return res.json();
}