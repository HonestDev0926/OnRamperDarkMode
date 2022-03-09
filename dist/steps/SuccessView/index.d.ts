import React from "react";
import type { NextStep } from "../../ApiContext";
declare type SuccessViewProps = {
    nextStep: Partial<NextStep> & {
        type: "completed";
    };
    txType: "instant" | "pending";
};
declare const SuccessView: React.FC<SuccessViewProps>;
export default SuccessView;
