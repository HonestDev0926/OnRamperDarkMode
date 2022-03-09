import "abort-controller/polyfill";
import { GatewayRate, RateResponse } from './types/rate';
import { Currency, GatewaysResponse } from './types/gateways';
import { FieldError } from './types/nextStep';
import { NextStep } from '..';
import { Hub } from "@sentry/browser";
import type { CryptoAddrType } from '../initialState';
declare const getAcceptLanguageParameter: () => string;
declare const updateAcceptLanguageParameter: () => void;
declare const sentryHub: Hub;
declare const authenticate: (pk: string) => void;
export declare function logRequest(url: string): void;
/**
 * API calls
 */
interface GatewaysParams {
    country?: string;
    includeIcons?: boolean;
    includeDefaultAmounts?: boolean;
    [key: string]: any;
}
declare const gateways: (params: GatewaysParams) => Promise<GatewaysResponse>;
interface RateParams {
    country?: string;
    amountInCrypto?: boolean;
    address?: string;
    addressTag?: string;
    gateway?: string;
    includeIcons?: boolean;
    minAmountEur?: number;
}
declare const rate: (currency: string, crypto: string, amount: number, paymentMethod: string, params?: RateParams | undefined, signal?: AbortSignal | undefined) => Promise<RateResponse>;
/**
 * Exectue step
 */
interface ExecuteStepParams {
    country?: string;
    amountInCrypto?: boolean;
    [key: string]: any;
}
interface FetchResponse {
    ok: boolean;
    json: () => Promise<any>;
    text: () => Promise<string>;
}
declare const executeStep: (step: NextStep, data: File | {
    [key: string]: any;
}, params?: ExecuteStepParams | undefined) => Promise<NextStep>;
/**
 * Utils
 */
export declare const processResponse: (response: FetchResponse) => Promise<any>;
declare class ApiError extends Error {
    data?: any;
    constructor(message: string);
}
declare class NextStepError extends Error {
    fields?: FieldError[];
    field?: string;
    fatal?: boolean;
    constructor(error: any);
}
export interface Filters {
    onlyCryptos?: string[];
    excludeCryptos?: string[];
    onlyPaymentMethods?: string[];
    excludePaymentMethods?: string[];
    excludeFiat?: string[];
    onlyGateways?: string[];
    onlyFiat?: string[];
}
declare const filterGatewaysResponse: (gatewaysResponse: GatewaysResponse, filters?: Filters | undefined) => GatewaysResponse;
declare const sortCryptoByRecommended: (availableCryptos: Currency[], recommendedCryptoCurrencies?: string[] | undefined) => Currency[];
declare type DefaultAddrs = {
    [denom: string]: CryptoAddrType | undefined;
};
declare const filterRatesResponse: (ratesResponse: RateResponse, onlyGateways?: string[] | undefined, defaultAddrs?: DefaultAddrs | undefined, selectedCrypto?: string | undefined) => RateResponse;
interface SellParams {
    country?: string;
    amountInCrypto?: boolean;
}
declare const sell: (crypto: string, amount: number, paymentMethod: string, params?: SellParams | undefined) => Promise<GatewayRate>;
export { authenticate, gateways, rate, executeStep, filterGatewaysResponse, sortCryptoByRecommended, filterRatesResponse, sell, NextStepError, sentryHub, ApiError, getAcceptLanguageParameter, updateAcceptLanguageParameter, };
