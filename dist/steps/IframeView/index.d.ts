import React from "react";
import { NextStep } from "../../ApiContext";
declare const IframeView: React.FC<{
    nextStep: NextStep & {
        type: "iframe" | "redirect";
    };
}>;
export default IframeView;
