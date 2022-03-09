import React from 'react';
import { NextStep } from '../../ApiContext';
declare const WireTransferView: React.FC<{
    nextStep: NextStep & {
        type: 'requestBankTransaction';
    };
}>;
export default WireTransferView;
