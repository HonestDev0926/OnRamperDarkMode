import React from "react";
import { NextStep } from "../../ApiContext";
declare const ConfirmPaymentView: React.FC<{
    nextStep: NextStep;
    includeCryptoAddr?: boolean;
}>;
export default ConfirmPaymentView;
