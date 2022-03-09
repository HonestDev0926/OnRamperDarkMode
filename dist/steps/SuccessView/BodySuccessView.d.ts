import React from "react";
declare type BodySuccessViewType = {
    txType: "instant" | "pending";
    trackingURL?: string;
};
declare const BodySuccessView: React.FC<BodySuccessViewType>;
export default BodySuccessView;
