import React from 'react';
declare type BodyUploadType = {
    onActionButton: (file: File) => void;
    textInfo?: string;
    isLoading?: boolean;
    errorMsg?: string;
    acceptedContentTypes?: string[];
};
declare const BodyUpload: React.FC<BodyUploadType>;
export default BodyUpload;
