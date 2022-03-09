import React from 'react';
interface BodyIframeViewType {
    src: string;
    type: string;
    textInfo?: string;
    error?: string;
    fatalError?: string;
    onErrorDismissClick: (type?: string) => void;
    isFullScreen?: boolean;
    features?: string;
}
declare const BodyIframeView: React.FC<BodyIframeViewType>;
export default BodyIframeView;
