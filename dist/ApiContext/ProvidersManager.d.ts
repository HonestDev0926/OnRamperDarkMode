export declare enum ProviderNames {
    Metamask = "Metamask",
    imToken = "imToken"
}
export declare class ProviderManager {
    static providerName: ProviderNames | undefined;
    private static _cryptoCode;
    private static _cryptoName;
    static providerIsPresent: (cryptoCode?: string | undefined, cryptoName?: string | undefined) => boolean | undefined;
    static connect: (cryptoCode: string, cryptoName?: string | undefined) => boolean;
    static isdApp: () => boolean | undefined;
    static getAccounts: () => Promise<{
        [cryptoCode: string]: string;
    } | undefined>;
    /**
     * metamask
     */
    static getMetamaskAccounts: () => Promise<{} | undefined>;
    /**
     * imToken
     */
    static IMTOKEN_supportedCryptos: string[];
    static getImTokenAccounts: () => Promise<{} | undefined>;
}
