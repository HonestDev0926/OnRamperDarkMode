export declare const copyToClipBoard: (text: string, copied: (status: boolean, text: string) => void) => Promise<void>;
export declare const arrayUnique: (array: any[]) => any[];
export declare const arrayObjUnique: (array: any[], attrFilter: string) => any[];
export declare const toMaxDecimalsFloor: (n: number | string, decimals: number) => number;
export declare const toMaxDecimalsRound: (n: number | string, decimals: number) => number;
export declare const formatSeconds: (s: number) => {
    n: number;
    magnitude: string;
    magnitudeShort: string;
};
export declare const scrollTo: (element: HTMLElement | null, to: number, duration: number) => void;
