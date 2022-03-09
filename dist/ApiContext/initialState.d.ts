import { GatewaysResponse } from './api/types/gateways';
import { RateResponse, GatewayRate } from './api/types/rate';
import { NextStep } from './api/types/nextStep';
export declare type GatewayRateOption = {
    id: string;
    name: string;
} & GatewayRate;
export declare type GatewayRateOptionSimple = Pick<GatewayRate, "identifier" | "icon" | "error">;
export interface ItemType {
    id: string;
    name: string;
    info?: string;
    icon?: string;
    symbol?: string;
    precision?: number;
    currencyType?: string;
    searchWords?: string;
    supportsAddressTag?: boolean;
    network?: string;
}
export declare enum ItemCategory {
    Crypto = "CRYPTO",
    Currency = "CURRENCY",
    PaymentMethod = "PAYMENT_METHOD"
}
export declare type StateType = {
    data: DataStateType;
    collected: CollectedStateType;
    inputInterface: InputInterfaceType;
    apiInterface: ApiInterfaceType;
    [key: string]: any;
};
export interface CryptoAddrType {
    address: string;
    memo?: string;
}
export declare type CollectedStateType = {
    amount: number;
    amountInCrypto?: boolean;
    isCalculatingAmount: boolean;
    selectedCrypto?: ItemType;
    selectedCurrency?: ItemType;
    selectedPaymentMethod?: ItemType;
    selectedGateway?: GatewayRateOption;
    selectedCountry?: string;
    cryptocurrencyAddress?: CryptoAddrType;
    defaultAddrs: {
        [key: string]: CryptoAddrType | undefined;
    };
    errors?: ErrorObjectType;
    isAddressEditable?: boolean;
    themeColor: string;
    displayChatBubble?: boolean;
    partnerContext?: {
        [key: string]: any;
    };
    isPartnerContextSent: boolean;
    redirectURL?: string;
    supportSell: boolean;
    supportBuy: boolean;
    isAmountEditable?: boolean;
    [key: string]: any;
};
export declare type ErrorObjectType = {
    GATEWAYS?: {
        type: 'API' | 'NO_GATEWAYS' | 'DISABLED_GATEWAYS' | 'NO_ITEMS';
        message: string;
    };
    RATE?: {
        type: TypesOfRateError;
        message: string;
        limit?: number;
    };
} | undefined;
export declare type TypesOfRateError = 'API' | 'NO_RATES' | 'MIN' | 'MAX' | 'UNREACHABLE' | 'OTHER' | 'ALL_UNAVAILABLE' | 'OPTION';
export declare type DataStateType = {
    availableCryptos: ItemType[];
    availableCurrencies: ItemType[];
    availablePaymentMethods: ItemType[];
    allRates: GatewayRateOption[];
    handleCryptoChange: (crypto?: ItemType) => undefined | {};
    handleCurrencyChange: (currency?: ItemType) => undefined | {};
    handlePaymentMethodChange: (paymentMehtod?: ItemType) => undefined | {};
    restartWidget: () => void;
    responseGateways?: GatewaysResponse;
    filtredGatewaysByCrypto: GatewaysResponse['gateways'];
    filtredGatewaysByCurrency: GatewaysResponse['gateways'];
    mappedHiddenByFiat: GatewayRateOptionSimple[];
    responseRate?: RateResponse;
    ICONS_MAP?: {
        [key: string]: {
            icon: string;
            name: string;
            symbol?: string;
        };
    };
};
export declare type InputInterfaceType = {
    handleInputChange: (name: string, value: any) => void;
};
export declare type ApiInterfaceType = {
    init: (country?: string) => Promise<ErrorObjectType | undefined | {}>;
    executeStep: (step: NextStep, params: {
        [key: string]: any;
    }) => Promise<NextStep>;
    getRates: () => Promise<ErrorObjectType | undefined | {}>;
    clearErrors: () => void;
};
export declare const initialState: StateType;
