import React from 'react';
import { FileStep } from '../../ApiContext';
declare type BodyPickOptionType = {
    onActionButton: () => void;
    handleOptionChange: (i: number) => void;
    steps?: FileStep[];
    isFilled?: boolean;
    isLoading?: boolean;
    infoMsg?: string;
    inputName?: string;
};
declare const BodyPickOption: React.FC<BodyPickOptionType>;
export default BodyPickOption;
