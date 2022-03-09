import React from "react";
declare type HeaderType = {
    title: string;
    secondaryTitle?: string;
    backButton?: boolean;
    hideBurgerButton?: boolean;
    noSeparator?: boolean;
    onMenuClick?: () => void;
    onSecondaryTitleClick?: () => void;
};
declare const Header: React.FC<HeaderType>;
export default Header;
