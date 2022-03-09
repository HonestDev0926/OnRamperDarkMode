import React from "react";
declare type ButtonActionType = {
    onClick?: () => void;
    text: string;
    disabled?: boolean;
    size?: "small" | "large";
    className?: string;
};
declare const ButtonAction: React.FC<ButtonActionType>;
export default ButtonAction;
