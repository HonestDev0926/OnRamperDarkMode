import React from "react";
import { NextStep } from "../../ApiContext";
declare type ActionableErrorViewType = {
    title?: string;
    message?: string;
    fatal?: boolean;
    step?: NextStep;
    optionalUrl?: string;
};
declare const BodyActionableErrorView: React.FC<ActionableErrorViewType>;
export default BodyActionableErrorView;
