import React from 'react';
declare type InputButtonType = {
    selectedOption: string;
    label?: string;
    icon?: string;
    className?: string;
    iconPosition?: 'start' | 'end';
    onClick?: (event: React.MouseEvent<HTMLDivElement>) => void;
    error?: string;
    onHelpClick?: () => void;
    hint?: string;
    network?: string;
    userIntended?: boolean;
    chosenPaymentMethod?: boolean;
};
declare const InputButton: React.ForwardRefExoticComponent<InputButtonType & React.RefAttributes<HTMLDivElement>>;
export default InputButton;
