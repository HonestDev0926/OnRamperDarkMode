import React from "react";
import { NextStep } from "../../ApiContext";
export interface NewStepProps {
    nextStep?: NextStep;
    isConfirmed?: boolean;
}
declare const StepViewContent: React.FC<NewStepProps>;
export default StepViewContent;
