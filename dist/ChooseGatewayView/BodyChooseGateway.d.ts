import React from "react";
import { GatewayRateOption } from "../ApiContext";
declare type BodyChooseGatewayType = {
    onActionButton?: () => void;
    onItemClick?: (index: number) => void;
    ratesList: GatewayRateOption[];
};
declare const BodyChooseGateway: React.FC<BodyChooseGatewayType>;
export default BodyChooseGateway;
