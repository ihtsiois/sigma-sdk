import axios, { AxiosInstance, AxiosRequestConfig, AxiosResponse } from 'axios';
import { HttpClientOpts } from './type';
import { HandlerError } from '@/sdk';

class HttpClient {
    private instance: AxiosInstance;

    constructor({ baseURL }: HttpClientOpts) {
        this.instance = axios.create({ baseURL });
    }

    async get<T = any>(url: string, config?: AxiosRequestConfig): Promise<T> {
        return this.instance.get(url, config).then((res) => res.data);
    }

    async post<T = any>(url: string, data?: any, config?: AxiosRequestConfig): Promise<T> {
        return this.instance.post(url, data, config).then((res) => res.data);
    }

    async put<T = any>(url: string, data?: any, config?: AxiosRequestConfig): Promise<T> {
        return this.instance.put(url, data, config).then((res) => res.data);
    }

    async delete<T = any>(url: string, config?: AxiosRequestConfig): Promise<T> {
        return this.instance.delete(url, config).then((res) => res.data);
    }

    handleError(err: any): HandlerError {
        const res = err?.response?.data;

        return {
            code: res?.code || 'UNKNOWN',
            status: res?.status || 'UNKNOWN',
            name: res?.error || 'UNKNOWN',
        };
    }
}

export { HttpClient };
