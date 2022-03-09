import React from 'react';
declare type UploadBoxType = {
    onFilesAdded: (name: string, files: File[], maxFiles: number) => boolean;
    onFileDeleted: (name: string, fileName: string) => void;
    id: string;
    filesList: File[];
    maxFiles?: number;
    acceptedContentTypes?: string[];
};
declare const UploadBox: React.FC<UploadBoxType>;
export default UploadBox;
