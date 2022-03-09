export declare const defaultLanguage = "en";
/**
 * Will return the code for the default language spoken in the provided country.
 *
 * @param country The Alpha-2 ISO 3166 country code. E.g. 'JP'. See:
 * https://en.wikipedia.org/wiki/List_of_ISO_3166_country_codes
 * @returns The ISO 639-1 language code. E.g. 'ja'. See: https://en.wikipedia.org/wiki/List_of_ISO_639-1_codes
 */
export declare function getDefaultLanguageForCountry(country?: string): string;
export declare const supportedLanguages: string[];
/**
 * Returns whether the language provided is supported by the i18n implementation.
 *
 * @param language The ISO 639-1 language code. E.g. 'ja'. See: https://en.wikipedia.org/wiki/List_of_ISO_639-1_codes
 * @returns A boolean indicating whether or not the widget has i18n support for the language
 */
export declare function isLanguageSupported(language: string): boolean;
