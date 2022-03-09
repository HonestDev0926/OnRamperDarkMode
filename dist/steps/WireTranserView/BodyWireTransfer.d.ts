import React from 'react';
import { InfoDepositBankAccount } from '../../ApiContext';
declare type BodyWireTransferType = {
    onActionButton?: () => void;
    onIconClick?: (id: string) => void;
    amount: string;
    symbol: string;
    bankDetails: InfoDepositBankAccount;
    textInfo?: string;
    reference: string;
};
declare const BodyWireTransfer: React.FC<BodyWireTransferType>;
export default BodyWireTransfer;
