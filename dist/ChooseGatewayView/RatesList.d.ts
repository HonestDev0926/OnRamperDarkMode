import React from 'react';
import { GatewayRateOption, GatewayRateOptionSimple } from '../ApiContext';
interface RatesListProps {
    availableRates: GatewayRateOption[];
    unavailableRates: GatewayRateOption[];
    hiddenRates: GatewayRateOptionSimple[];
    onItemClick?: (index: number) => void;
}
declare const RatesList: React.FC<RatesListProps>;
export default RatesList;
