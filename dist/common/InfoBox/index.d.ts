import React from 'react';
declare type InfoBoxType = {
    type?: 'info' | 'error' | 'notification';
    onDismissClick?: () => void;
    canBeDismissed?: boolean;
    in: boolean;
    className?: string;
    onActionClick?: () => void;
    actionText?: string;
    message?: string;
};
declare const InfoBox: React.ForwardRefExoticComponent<InfoBoxType & {
    children?: React.ReactNode;
} & React.RefAttributes<HTMLDivElement>>;
export default InfoBox;
