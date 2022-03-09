import React from 'react';
import type { ItemType } from '../ApiContext';
interface BodyBuyCryptoProps {
    onBuyCrypto: () => void;
    openPickCrypto?: () => void;
    openPickCurrency?: () => void;
    openPickPayment?: () => void;
    selectedCrypto?: ItemType;
    selectedCurrency?: ItemType;
    selectedPaymentMethod?: ItemType;
    handleInputChange: (name: string, value: any) => void;
    isFilled?: boolean;
}
declare const BodyBuyCrypto: React.FC<BodyBuyCryptoProps>;
export default BodyBuyCrypto;
