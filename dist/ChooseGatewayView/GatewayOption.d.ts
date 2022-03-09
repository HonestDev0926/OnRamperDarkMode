import React from 'react';
import { GatewayRateOption } from '../ApiContext';
declare type GateWayOptionProps = {
    index: number;
    isOpen: boolean;
    selectedReceivedCrypto?: number;
    badges?: badgeType;
    onClick?: (index: number, id: number) => void;
} & GatewayRateOption;
declare const GatewayOption: React.FC<GateWayOptionProps>;
export interface badgeType {
    [key: string]: {
        _id: number;
        fast: boolean;
        noId: boolean;
        fastest: boolean;
        easiest: boolean;
        bestOffer: boolean;
        count: number;
    };
}
export default GatewayOption;
