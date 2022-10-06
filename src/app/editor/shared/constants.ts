import { HttpHeaders } from "@angular/common/http";

export const constants = {
    MAIN_API_URL: 'http://localhost:8080/api/v1/',
    AUTH_HTTP_HEADERS: new HttpHeaders({ 'Content-Type': 'application/json' })
};
