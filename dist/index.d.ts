/// <reference types="react" />
import type { APIProviderType } from "./ApiContext";
import "./polyfills/composedpath.polyfill";
import "./isolateinheritance.css";
import "./normalize.min.css";
import './i18n/setup';
declare type OnramperWidgetProps = Omit<APIProviderType, "themeColor"> & {
    color?: string;
    fontFamily?: string;
    className?: string;
    displayChatBubble?: boolean;
};
declare const initialize: (selector: string, props: OnramperWidgetProps) => void;
export interface EventContext {
    type: string;
    gateway: string;
    trackingUrl?: string;
}
declare const ev: {
    [x: string]: string;
    PURCHASE_COMPLETED: string;
    ALL: string;
};
declare const Onramper: {
    on: (event_type: string, cb: (ctx: EventContext) => void) => void;
    EVENTS: typeof ev;
};
declare const _default: (props: OnramperWidgetProps) => JSX.Element;
export default _default;
export { initialize, Onramper };
