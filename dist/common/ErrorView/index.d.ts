import React from 'react';
interface ErrorViewProps {
    buttonText?: string;
    maxHeight?: string;
    fixedHeight?: boolean;
    type?: "API" | "NO_GATEWAYS" | "DISABLED_GATEWAYS" | "NO_ITEMS" | "NO_RATES" | "MIN" | "MAX" | "UNREACHABLE" | "OTHER" | "ALL_UNAVAILABLE" | undefined | "OPTION" | "CRASH";
    message?: string;
    callback?: () => any;
}
declare const ErrorView: React.FC<ErrorViewProps>;
export default ErrorView;
