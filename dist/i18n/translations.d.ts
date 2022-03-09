declare const resources: {
    en: {
        translation: {
            mainScreen: {
                userIntention: string;
                amount: string;
                currency: string;
                paymentMethod: string;
                noteForCryptoAmount: string;
                noteForFiatAmount: string;
                progressMessage: string;
                infoBox: {
                    seeAllGateways: string;
                    contact: string;
                    seeMore: string;
                };
                button: {
                    viewGateways: string;
                    purchasePrefix: string;
                };
                loadingText: string;
            };
            gatewayScreen: {
                noteAboutApproximation: string;
                noPricesAvailable: string;
                errorConnectingToServerMessage: string;
                errorTryAgainMessage: string;
                continueButtonText: string;
                gatewayBadges: {
                    bestOption: string;
                    bestOffer: string;
                    easiest: string;
                    fastest: string;
                    fast: string;
                    alternative: string;
                };
                gatewayIdProperties: {
                    noIdRequired: string;
                    idRequired: string;
                };
                gatewayOfferActionInFiat: string;
                gatewayOfferActionInCrypto: string;
            };
            header: {
                buyCrypto: string;
                sellCrypto: string;
                selectCrypto: string;
                selectFiat: string;
                selectPaymentMethod: string;
                chooseSeller: string;
                wireTransferDetails: string;
            };
            footer: {
                onramperPrefix: string;
            };
            menu: {
                title: string;
                faq: string;
                legal: string;
                terms: string;
                liveChat: string;
                about: string;
            };
            kycScreens: {
                sendingProgressMessage: string;
                continueButtonText: string;
                itemPrefix: string;
                noReference: string;
            };
            formView: {
                defaultTitle: string;
                emailTitle: string;
                loginRegisterTitle: string;
                phoneNumberTitle: string;
                verifyEmailCodeTitle: string;
                enterVerificationCodesTitle: string;
                enterVerificationCodeTitle: string;
                bankIbanInfoMsg: string;
                inputExpiryDate: string;
                termsAgreement: string;
            };
            informationView: {
                close: string;
                gotIt: string;
            };
            miscViews: {
                completePayment: string;
            };
            loadingScreen: {
                title: string;
                didYouKnow: string;
                whileDidYouKnow: string;
                creatingOrder: string;
                cryptoFacts: string[];
                verifyingIdentity: string;
                verificationOfDocuments: string;
            };
            apiProvider: {
                gatewaysDisabledByFilters: string;
                noGatewaysFound: string;
                noCryptosFound: string;
                noFiatsFound: string;
                noPaymentMethodsFound: string;
                noGatewayForCombination: string;
                noGatewaysConnected: string;
                sellerAvailablePayingWith: string;
                sellerAvailableOr: string;
                partnerContextErrorMessage: string;
                apiKeyNotProvidedErrorMessage: string;
                otherCurrencies: string;
            };
            apiContent: {
                processResponseError: string;
            };
            iframeScreen: {
                autoRedirectFailed: string;
                tryOtherGateway: string;
                bankRejection: string;
                redirect: {
                    message: string;
                    clickButton: string;
                    beRedirected: string;
                    redirectCountdown: string;
                    completePurchase: string;
                    transactionFinished: string;
                    buyMoreCrypto: string;
                };
                autoRedirect: {
                    redirecting: string;
                    newWindow: string;
                    newWindowComplete: string;
                    alreadyCompleted: string;
                    finishProcess: string;
                    pleaseClick: string;
                };
            };
            timeMagnitudes: {
                second: string;
                minute: string;
                hour: string;
                day: string;
            };
            paymentReviewScreen: {
                pay: string;
                convRate: string;
                transFee: string;
                inExchangeOf: string;
                expectedTransTime: string;
                walletAddress: string;
                addressTag: string;
                title: string;
            };
            verifyCreditCardScreen: {
                hint: string;
                resendCode: string;
                gotIt: string;
                helpTitle: string;
                helpText: string;
                pendingTransactionScreenshotAlt: string;
            };
            errorCountriesNotSupported: {
                title: string;
                isNotSupportedBy: string;
                description: string;
            };
            errorDisabledGateways: {
                title: string;
                description: string;
            };
            errorApi: {
                title: string;
                description: string;
            };
            errorCrash: {
                title: string;
                description: string;
            };
            errorNoItemsFound: {
                title: string;
                someItemsDisabled: string;
            };
            errorScreens: {
                readFaqs: string;
                forMoreInfo: string;
            };
            misc: {
                searchbarPlaceholderText: string;
                and: string;
                continue: string;
                tryAgain: string;
                restart: string;
            };
            countries: {
                [x: string]: string;
            };
        };
    };
    ko: {
        translation: {
            mainScreen: {
                userIntention: string;
                amount: string;
                currency: string;
                paymentMethod: string;
                noteForCryptoAmount: string;
                noteForFiatAmount: string;
                progressMessage: string;
                infoBox: {
                    seeAllGateways: string;
                    contact: string;
                    seeMore: string;
                };
                button: {
                    viewGateways: string;
                    purchasePrefix: string;
                };
                loadingText: string;
            };
            gatewayScreen: {
                noteAboutApproximation: string;
                noPricesAvailable: string;
                errorConnectingToServerMessage: string;
                errorTryAgainMessage: string;
                continueButtonText: string;
                gatewayBadges: {
                    bestOption: string;
                    bestOffer: string;
                    easiest: string;
                    fastest: string;
                    fast: string;
                    alternative: string;
                };
                gatewayIdProperties: {
                    noIdRequired: string;
                    idRequired: string;
                };
                gatewayOfferActionInFiat: string;
                gatewayOfferActionInCrypto: string;
            };
            header: {
                buyCrypto: string;
                sellCrypto: string;
                selectCrypto: string;
                selectFiat: string;
                selectPaymentMethod: string;
                chooseSeller: string;
                wireTransferDetails: string;
            };
            footer: {
                onramperPrefix: string;
            };
            menu: {
                title: string;
                faq: string;
                legal: string;
                terms: string;
                liveChat: string;
                about: string;
            };
            kycScreens: {
                sendingProgressMessage: string;
                continueButtonText: string;
                itemPrefix: string;
                noReference: string;
            };
            formView: {
                defaultTitle: string;
                emailTitle: string;
                phoneNumberTitle: string;
                verifyEmailCodeTitle: string;
                enterVerificationCodesTitle: string;
                enterVerificationCodeTitle: string;
                bankIbanInfoMsg: string;
                inputExpiryDate: string;
                termsAgreement: string;
            };
            informationView: {
                close: string;
                gotIt: string;
            };
            miscViews: {
                completePayment: string;
            };
            loadingScreen: {
                title: string;
                didYouKnow: string;
                whileDidYouKnow: string;
                creatingOrder: string;
                cryptoFacts: string[];
                verifyingIdentity: string;
                verificationOfDocuments: string;
            };
            apiProvider: {
                gatewaysDisabledByFilters: string;
                noGatewaysFound: string;
                noCryptosFound: string;
                noFiatsFound: string;
                noPaymentMethodsFound: string;
                noGatewayForCombination: string;
                noGatewaysConnected: string;
                sellerAvailablePayingWith: string;
                sellerAvailableOr: string;
                partnerContextErrorMessage: string;
                apiKeyNotProvidedErrorMessage: string;
                otherCurrencies: string;
            };
            apiContent: {
                processResponseError: string;
            };
            iframeScreen: {
                autoRedirectFailed: string;
                tryOtherGateway: string;
                bankRejection: string;
                redirect: {
                    message: string;
                    clickButton: string;
                    beRedirected: string;
                    redirectCountdown: string;
                    completePurchase: string;
                    transactionFinished: string;
                    buyMoreCrypto: string;
                };
                autoRedirect: {
                    redirecting: string;
                    newWindow: string;
                    newWindowComplete: string;
                    alreadyCompleted: string;
                    finishProcess: string;
                    pleaseClick: string;
                };
            };
            timeMagnitudes: {
                second: string;
                minute: string;
                hour: string;
                day: string;
            };
            paymentReviewScreen: {
                pay: string;
                convRate: string;
                transFee: string;
                inExchangeOf: string;
                expectedTransTime: string;
                walletAddress: string;
                addressTag: string;
                title: string;
            };
            verifyCreditCardScreen: {
                hint: string;
                resendCode: string;
                gotIt: string;
                helpTitle: string;
                helpText: string;
                pendingTransactionScreenshotAlt: string;
            };
            errorCountriesNotSupported: {
                title: string;
                isNotSupportedBy: string;
                description: string;
            };
            errorDisabledGateways: {
                title: string;
                description: string;
            };
            errorApi: {
                title: string;
                description: string;
            };
            errorCrash: {
                title: string;
                description: string;
            };
            errorNoItemsFound: {
                title: string;
                someItemsDisabled: string;
            };
            errorScreens: {
                readFaqs: string;
                forMoreInfo: string;
            };
            misc: {
                searchbarPlaceholderText: string;
                and: string;
                continue: string;
                tryAgain: string;
                restart: string;
            };
            countries: {
                AF: string;
                DZ: string;
                AD: string;
                AO: string;
                AG: string;
                AR: string;
                AM: string;
                AU: string;
                AT: string;
                AZ: string;
                BH: string;
                BY: string;
                BE: string;
                BZ: string;
                BJ: string;
                BT: string;
                BA: string;
                BR: string;
                BN: string;
                BG: string;
                BF: string;
                BI: string;
                CV: string;
                CM: string;
                CA: string;
                CF: string;
                TD: string;
                CL: string;
                CO: string;
                CG: string;
                CD: string;
                CR: string;
                CI: string;
                HR: string;
                CY: string;
                CZ: string;
                DK: string;
                DJ: string;
                DM: string;
                DO: string;
                EG: string;
                SV: string;
                GQ: string;
                EE: string;
                ET: string;
                FJ: string;
                FI: string;
                FR: string;
                GA: string;
                GM: string;
                GE: string;
                DE: string;
                GR: string;
                GD: string;
                GT: string;
                GN: string;
                GW: string;
                GY: string;
                HT: string;
                HN: string;
                HK: string;
                HU: string;
                IN: string;
                ID: string;
                IQ: string;
                IE: string;
                IL: string;
                IT: string;
                JP: string;
                JO: string;
                KZ: string;
                KE: string;
                XK: string;
                KR: string;
                KW: string;
                LA: string;
                LV: string;
                LB: string;
                LS: string;
                LR: string;
                LY: string;
                LI: string;
                LT: string;
                LU: string;
                MG: string;
                MW: string;
                MY: string;
                MV: string;
                ML: string;
                MT: string;
                MH: string;
                MR: string;
                MX: string;
                FM: string;
                MD: string;
                MC: string;
                ME: string;
                MA: string;
                MZ: string;
                NA: string;
                NR: string;
                NP: string;
                NL: string;
                NZ: string;
                NE: string;
                NG: string;
                MK: string;
                NO: string;
                OM: string;
                PW: string;
                PS: string;
                PG: string;
                PY: string;
                PE: string;
                PH: string;
                PL: string;
                PT: string;
                QA: string;
                RO: string;
                RU: string;
                RW: string;
                KN: string;
                LC: string;
                WS: string;
                SM: string;
                ST: string;
                SA: string;
                SN: string;
                RS: string;
                SC: string;
                SL: string;
                SG: string;
                SK: string;
                SI: string;
                SB: string;
                SO: string;
                ZA: string;
                ES: string;
                LK: string;
                SR: string;
                SE: string;
                CH: string;
                TW: string;
                TJ: string;
                TZ: string;
                TH: string;
                TG: string;
                TO: string;
                TT: string;
                TN: string;
                TR: string;
                TM: string;
                UA: string;
                AE: string;
                GB: string;
                OT: string;
                US: string;
                UY: string;
                UZ: string;
                VA: string;
                VN: string;
                EH: string;
                ZM: string;
            };
        };
    };
    ja: {
        translation: {
            mainScreen: {
                userIntention: string;
                amount: string;
                currency: string;
                paymentMethod: string;
                noteForCryptoAmount: string;
                noteForFiatAmount: string;
                progressMessage: string;
                infoBox: {
                    seeAllGateways: string;
                    contact: string;
                    seeMore: string;
                };
                button: {
                    viewGateways: string;
                    purchasePrefix: string;
                };
                loadingText: string;
            };
            gatewayScreen: {
                noteAboutApproximation: string;
                noPricesAvailable: string;
                errorConnectingToServerMessage: string;
                errorTryAgainMessage: string;
                continueButtonText: string;
                gatewayBadges: {
                    bestOption: string;
                    bestOffer: string;
                    easiest: string;
                    fastest: string;
                    fast: string;
                    alternative: string;
                };
                gatewayIdProperties: {
                    noIdRequired: string;
                    idRequired: string;
                };
                gatewayOfferActionInFiat: string;
                gatewayOfferActionInCrypto: string;
            };
            header: {
                buyCrypto: string;
                sellCrypto: string;
                selectCrypto: string;
                selectFiat: string;
                selectPaymentMethod: string;
                chooseSeller: string;
                wireTransferDetails: string;
            };
            footer: {
                onramperPrefix: string;
            };
            menu: {
                title: string;
                faq: string;
                legal: string;
                terms: string;
                liveChat: string;
                about: string;
            };
            kycScreens: {
                sendingProgressMessage: string;
                continueButtonText: string;
                itemPrefix: string;
                noReference: string;
            };
            formView: {
                defaultTitle: string;
                emailTitle: string;
                phoneNumberTitle: string;
                verifyEmailCodeTitle: string;
                enterVerificationCodesTitle: string;
                enterVerificationCodeTitle: string;
                bankIbanInfoMsg: string;
                inputExpiryDate: string;
                termsAgreement: string;
            };
            informationView: {
                close: string;
                gotIt: string;
            };
            miscViews: {
                completePayment: string;
            };
            loadingScreen: {
                title: string;
                didYouKnow: string;
                whileDidYouKnow: string;
                creatingOrder: string;
                cryptoFacts: string[];
                verifyingIdentity: string;
                verificationOfDocuments: string;
            };
            apiProvider: {
                gatewaysDisabledByFilters: string;
                noGatewaysFound: string;
                noCryptosFound: string;
                noFiatsFound: string;
                noPaymentMethodsFound: string;
                noGatewayForCombination: string;
                noGatewaysConnected: string;
                sellerAvailablePayingWith: string;
                sellerAvailableOr: string;
                partnerContextErrorMessage: string;
                apiKeyNotProvidedErrorMessage: string;
                otherCurrencies: string;
            };
            apiContent: {
                processResponseError: string;
            };
            iframeScreen: {
                autoRedirectFailed: string;
                tryOtherGateway: string;
                bankRejection: string;
                redirect: {
                    message: string;
                    clickButton: string;
                    beRedirected: string;
                    redirectCountdown: string;
                    completePurchase: string;
                    transactionFinished: string;
                    buyMoreCrypto: string;
                };
                autoRedirect: {
                    redirecting: string;
                    newWindow: string;
                    newWindowComplete: string;
                    alreadyCompleted: string;
                    finishProcess: string;
                    pleaseClick: string;
                };
            };
            timeMagnitudes: {
                second: string;
                minute: string;
                hour: string;
                day: string;
            };
            paymentReviewScreen: {
                pay: string;
                convRate: string;
                transFee: string;
                inExchangeOf: string;
                expectedTransTime: string;
                walletAddress: string;
                addressTag: string;
                title: string;
            };
            verifyCreditCardScreen: {
                hint: string;
                resendCode: string;
                gotIt: string;
                helpTitle: string;
                helpText: string;
                pendingTransactionScreenshotAlt: string;
            };
            errorCountriesNotSupported: {
                title: string;
                isNotSupportedBy: string;
                description: string;
            };
            errorDisabledGateways: {
                title: string;
                description: string;
            };
            errorApi: {
                title: string;
                description: string;
            };
            errorCrash: {
                title: string;
                description: string;
            };
            errorNoItemsFound: {
                title: string;
                someItemsDisabled: string;
            };
            errorScreens: {
                readFaqs: string;
                forMoreInfo: string;
            };
            misc: {
                searchbarPlaceholderText: string;
                and: string;
                continue: string;
                tryAgain: string;
                restart: string;
            };
            countries: {
                AF: string;
                DZ: string;
                AD: string;
                AO: string;
                AG: string;
                AR: string;
                AM: string;
                AU: string;
                AT: string;
                AZ: string;
                BH: string;
                BY: string;
                BE: string;
                BZ: string;
                BJ: string;
                BT: string;
                BA: string;
                BR: string;
                BN: string;
                BG: string;
                BF: string;
                BI: string;
                CV: string;
                CM: string;
                CA: string;
                CF: string;
                TD: string;
                CL: string;
                CO: string;
                CG: string;
                CD: string;
                CR: string;
                CI: string;
                HR: string;
                CY: string;
                CZ: string;
                DK: string;
                DJ: string;
                DM: string;
                DO: string;
                EG: string;
                SV: string;
                GQ: string;
                EE: string;
                ET: string;
                FJ: string;
                FI: string;
                FR: string;
                GA: string;
                GM: string;
                GE: string;
                DE: string;
                GR: string;
                GD: string;
                GT: string;
                GN: string;
                GW: string;
                GY: string;
                HT: string;
                HN: string;
                HK: string;
                HU: string;
                IN: string;
                ID: string;
                IQ: string;
                IE: string;
                IL: string;
                IT: string;
                JP: string;
                JO: string;
                KZ: string;
                KE: string;
                XK: string;
                KR: string;
                KW: string;
                LA: string;
                LV: string;
                LB: string;
                LS: string;
                LR: string;
                LY: string;
                LI: string;
                LT: string;
                LU: string;
                MG: string;
                MW: string;
                MY: string;
                MV: string;
                ML: string;
                MT: string;
                MH: string;
                MR: string;
                MX: string;
                FM: string;
                MD: string;
                MC: string;
                ME: string;
                MA: string;
                MZ: string;
                NA: string;
                NR: string;
                NP: string;
                NL: string;
                NZ: string;
                NE: string;
                NG: string;
                MK: string;
                NO: string;
                OM: string;
                PW: string;
                PS: string;
                PG: string;
                PY: string;
                PE: string;
                PH: string;
                PL: string;
                PT: string;
                QA: string;
                RO: string;
                RU: string;
                RW: string;
                KN: string;
                LC: string;
                WS: string;
                SM: string;
                ST: string;
                SA: string;
                SN: string;
                RS: string;
                SC: string;
                SL: string;
                SG: string;
                SK: string;
                SI: string;
                SB: string;
                SO: string;
                ZA: string;
                ES: string;
                LK: string;
                SR: string;
                SE: string;
                CH: string;
                TW: string;
                TJ: string;
                TZ: string;
                TH: string;
                TG: string;
                TO: string;
                TT: string;
                TN: string;
                TR: string;
                TM: string;
                UA: string;
                AE: string;
                GB: string;
                OT: string;
                US: string;
                UY: string;
                UZ: string;
                VA: string;
                VN: string;
                EH: string;
                ZM: string;
            };
        };
    };
};
export default resources;
