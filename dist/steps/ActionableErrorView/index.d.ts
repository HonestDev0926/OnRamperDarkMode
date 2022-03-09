import React from "react";
import { NextStep } from "../../ApiContext";
declare type ActionableErrorProps = {
    nextStep: Partial<NextStep> & {
        type: "actionable-error";
    };
};
declare const ActionableErrorView: React.FC<ActionableErrorProps>;
export default ActionableErrorView;
