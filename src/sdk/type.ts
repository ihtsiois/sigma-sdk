import { HttpClientOpts } from '@/client';

export type SigmaClientOpts = {} & HttpClientOpts;

export type HandlerError = {
    code: string;
    status: string;
    name: string;
};

export type HandlerReturn<T> = {
    data?: T;
    error?: HandlerError;
};
