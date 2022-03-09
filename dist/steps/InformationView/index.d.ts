import React from "react";
import { NextStep } from "../../ApiContext/api/types/nextStep";
declare const InformationView: React.FC<{
    nextStep: NextStep & {
        type: "information";
    };
}>;
export default InformationView;
