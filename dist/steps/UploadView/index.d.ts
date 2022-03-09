import React from 'react';
import { NextStep } from '../../ApiContext/api/types/nextStep';
declare const UploadView: React.FC<{
    nextStep: NextStep & {
        type: 'file';
    };
}>;
export default UploadView;
