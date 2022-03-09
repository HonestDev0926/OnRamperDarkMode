import React from 'react';
import { NextStep } from '../../ApiContext';
interface PopupLauncherViewType {
    src: string;
    type: string;
    textInfo?: string;
    error?: string;
    fatalError?: string;
    features?: string;
    uploadFailed?: boolean;
    processFinished?: boolean;
    failStep: NextStep;
    onErrorDismissClick: (type?: string) => void;
}
declare const PopupLauncherView: React.FC<PopupLauncherViewType>;
export default PopupLauncherView;
