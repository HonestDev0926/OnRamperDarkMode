import React from "react";
import { NextStep } from "../../ApiContext";
declare const PopupView: React.FC<{
    nextStep: NextStep & {
        type: "popup";
    };
}>;
export default PopupView;
