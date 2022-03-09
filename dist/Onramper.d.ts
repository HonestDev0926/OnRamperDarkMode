declare const GENERAL_EVENTS: {
    ALL: string;
};
declare const SIMPLE_EVENTS: {
    PURCHASE_COMPLETED: string;
};
declare type EVENTSType = {
    readonly [event_name: string]: string;
} & typeof SIMPLE_EVENTS & typeof GENERAL_EVENTS;
export interface EventContext {
    gateway: string;
    trackingUrl?: string;
}
export declare const EVENTS: EVENTSType;
export declare function emit(event_type: string, ctx: EventContext): void;
export declare function on(event_type: string, cb: (ctx: EventContext & {
    type: string;
}) => void): void;
export {};
