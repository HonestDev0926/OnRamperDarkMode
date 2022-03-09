import React from "react";
import { StateType, ItemCategory } from "./initialState";
import type { ItemType, GatewayRateOption, CryptoAddrType, CollectedStateType, GatewayRateOptionSimple } from "./initialState";
import type { NextStep, StepDataItems, FileStep, InfoDepositBankAccount } from "./api/types/nextStep";
import { NextStepError } from "./api";
import type { Filters } from "./api";
export declare const DEFAULT_COUNTRY = "US";
export declare const DEFAULT_US_STATE = "AL";
export declare const DEFAULT_CA_STATE = "AB";
declare const APIContext: React.Context<StateType>;
interface APIProviderType {
    API_KEY?: string;
    defaultAmount?: number;
    defaultAddrs?: {
        [denom: string]: CryptoAddrType;
    };
    defaultCrypto?: string;
    defaultFiat?: string;
    defaultFiatSoft?: string;
    defaultPaymentMethod?: string;
    filters?: Filters;
    country?: string;
    language?: string;
    isAddressEditable?: boolean;
    themeColor: string;
    displayChatBubble?: boolean;
    amountInCrypto?: boolean;
    partnerContext?: {
        [key: string]: any;
    };
    redirectURL?: string;
    minAmountEur?: number;
    supportSell: boolean;
    supportBuy: boolean;
    isAmountEditable?: boolean;
    recommendedCryptoCurrencies?: string[];
    darkMode?: boolean;
}
declare const APIProvider: React.FC<APIProviderType>;
export { APIProvider, APIContext };
export { ItemCategory, NextStepError };
export type { ItemType, GatewayRateOption, NextStep, StepDataItems, FileStep, InfoDepositBankAccount, Filters, APIProviderType, CollectedStateType, GatewayRateOptionSimple, };
