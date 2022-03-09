import React from "react";
declare type InputCryptoAddrType = {
    label: string;
    handleInputChange: (name: string, value: any) => void;
    error?: string;
    className: string;
    type?: string;
    hint?: string;
    onHelpClick?: () => void;
    disabled?: boolean;
};
declare const InputCryptoAddr: React.ForwardRefExoticComponent<InputCryptoAddrType & React.RefAttributes<HTMLDivElement>>;
export default InputCryptoAddr;
