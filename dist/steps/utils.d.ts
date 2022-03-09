declare const areAllKeysFilled: (obj: {
    [key: string]: string;
}, keysList: string[], exclude?: string[]) => boolean;
declare const isFileUploaded: (files: File[]) => boolean;
declare const delay: (ms: number) => Promise<unknown>;
export { areAllKeysFilled, isFileUploaded, delay };
