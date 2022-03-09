import React from 'react';
import { StepDataItems } from '../../ApiContext';
declare type BodyFormViewType = {
    onActionButton: () => void;
    handleInputChange: (name: string, value: any) => void;
    fields: StepDataItems;
    isFilled?: boolean;
    isLoading?: boolean;
    errorObj?: {
        [key: string]: string | undefined;
    };
    errorMsg?: string;
    infoMsg?: string;
    inputName?: string;
    onErrorDismissClick: (field?: string) => void;
};
declare const BodyFormView: React.FC<BodyFormViewType>;
export default BodyFormView;
