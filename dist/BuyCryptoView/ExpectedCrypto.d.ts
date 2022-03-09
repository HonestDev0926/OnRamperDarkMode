import React from "react";
declare type ExpectedCryptoType = {
    denom: string;
    className?: string;
    isLoading: boolean;
    amountInCrypto?: boolean;
};
declare const ExpectedCrypto: React.FC<ExpectedCryptoType>;
export default ExpectedCrypto;
