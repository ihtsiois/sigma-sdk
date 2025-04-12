import axios, { AxiosInstance, AxiosRequestConfig, AxiosResponse } from 'axios';
import { HttpClientOpts } from './type';

class HttpClient {
    private instance: AxiosInstance;

    constructor({ baseURL }: HttpClientOpts) {
        this.instance = axios.create({ baseURL });

        // Interceptors
        this.instance.interceptors.response.use(
            (response: AxiosResponse) => response,
            (error) => {
                console.error('Erro na requisição:', error.message);
                return Promise.reject(error);
            }
        );
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
}

export { HttpClient };
