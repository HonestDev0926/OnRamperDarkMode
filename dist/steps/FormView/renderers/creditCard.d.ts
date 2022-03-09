import React from 'react';
declare type CreditCardInputType = {
    handleInputChange: (name: string, value: any) => void;
    errorObj?: {
        [key: string]: string | undefined;
    };
    ccNumberValue?: string;
    ccMonthValue?: string;
    ccYearValue?: string;
    ccCVVValue?: string;
    fieldsGroup?: {
        [key: string]: any;
    };
};
declare const CreditCardInput: React.ForwardRefExoticComponent<CreditCardInputType & React.RefAttributes<HTMLDivElement>>;
export default CreditCardInput;
