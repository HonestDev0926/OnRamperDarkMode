import React from "react";
export declare type ScreenType = React.ReactNode;
export declare type NavigationStateType = {
    screens: ScreenType[];
    currentSes: number;
    isChatOpen: boolean;
};
export declare enum NavigationActionsType {
    Only = "ONLY",
    Push = "PUSH",
    Pop = "POP",
    Replace = "REPLACE",
    Chat = "TRIGGERCHAT"
}
export declare type NavigationActions = {
    type: NavigationActionsType.Only;
    screen: ScreenType;
} | {
    type: NavigationActionsType.Push;
    screen: ScreenType;
} | {
    type: NavigationActionsType.Pop;
} | {
    type: NavigationActionsType.Replace;
    screen: ScreenType;
} | {
    type: NavigationActionsType.Chat;
};
declare const NavContext: React.Context<{
    _state: NavigationStateType;
    onlyScreen: (screen: ScreenType) => void;
    backScreen: () => void;
    nextScreen: (screen: ScreenType) => void;
    replaceScreen: (screen: ScreenType) => void;
    triggerChat: () => void;
}>;
declare const NavProvider: React.FC;
declare class NavContainer extends React.Component<{
    home?: ScreenType;
}, {
    intro: boolean;
}> {
    private transitionRef;
    private timer;
    constructor(props: {
        home?: ScreenType;
    });
    componentDidMount(): void;
    componentWillUnmount(): void;
    render(): JSX.Element;
}
export { NavProvider, NavContext, NavContainer };
