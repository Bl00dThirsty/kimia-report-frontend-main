import { RequestInit } from "next/dist/server/web/spec-extension/request";

export interface ApiResponse<T> {
    code?: number;
    status?: string;
    valid: boolean;
    lang?: string;
    message: string;
    body?: T;
    error?: string;
    timestamp?: string;
}

export async function apiClient<T>(url: string, options?: RequestInit): Promise<ApiResponse<T>> {

    const token = localStorage.getItem("token")

    try {
        const res = await fetch(url, {
            headers: new Headers({
                'Content-Type': 'application/json',
                Authorization: token ? `Bearer ${token}` : '',
                ...options?.headers
            }),
            ...options
        });


        if(!res.ok){


            if(res.status == 403 ){
                // Handle unauthorized access
                localStorage.removeItem('token');
                window.location.href = '/login';
            }

            console.log(res)
            const errorResponse = (await res.json()) as ApiResponse<T>;

            return {
                code: res.status,
                valid: false,
                status: res.statusText,
                message: errorResponse.message,
                error: errorResponse.error
            }

        }

        return (await res.json()) as ApiResponse<T>;

    } catch (error) {
        
        return {
            valid: false,
            message: `Network error; ${(error as Error).message}`
        }

    }

}