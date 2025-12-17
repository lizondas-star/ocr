import { apiGet } from "./client";

export function fetchUIConfig() {
    return apiGet('ui/header');
}