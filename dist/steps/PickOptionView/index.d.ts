import React from 'react';
import { NextStep } from '../../ApiContext';
declare const PickOptionView: React.FC<{
    nextStep: NextStep & {
        type: 'pickOne';
    };
}>;
export default PickOptionView;
