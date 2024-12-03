import { clsx, type ClassValue } from "clsx"
import { twMerge } from "tailwind-merge"

export function cn(...inputs: ClassValue[]) {
    return twMerge(clsx(inputs))
}


export interface ResponseWrapper<T> {
    data?: T | null;
    error?: ErrorType | null;
    success: boolean;
}

export interface ErrorType {
    fields: {
        [key: string]: string | string[]
    },
    message?: string | null,
}