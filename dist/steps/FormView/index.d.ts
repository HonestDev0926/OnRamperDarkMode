import React from 'react';
import { NextStep } from '../../ApiContext';
declare const FormView: React.FC<{
    nextStep: NextStep & {
        type: 'form';
    };
}>;
export default FormView;
