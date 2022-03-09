import React from 'react';
declare type BodyConfirmPaymentViewType = {
    onActionButton: () => void;
    payAmount: number;
    fees?: number;
    currency?: string;
    cryptoAmount: number;
    cryptoDenom: string;
    cryptoAddr?: string;
    cryptoAddrTag?: string;
    paymentMethod?: string;
    cryptoIcon?: string;
    txTime?: {
        seconds: number;
        message: string;
    };
    isFilled?: boolean;
    conversionRate?: number;
};
declare const BodyConfirmPaymentView: React.FC<BodyConfirmPaymentViewType>;
export default BodyConfirmPaymentView;
