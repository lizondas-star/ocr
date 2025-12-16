import { API_BASE_URL } from "../config/env";

export async function apiGet(endpoint) {
    const res = await fetch(`${API_BASE_URL}/${endpoint}`);

    if(!res.ok) {
        throw new Error("Failed to fetch data");
    }

    return res.json();
}