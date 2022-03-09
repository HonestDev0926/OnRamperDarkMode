import React from 'react';
export declare const DEFAULT_VALUE: {
    day: string;
    month: string;
    year: string;
};
interface DateModuleType {
    name: string;
    value?: string;
    onChange?: (name: string, value: any, type?: string) => void;
}
declare const DateModule: React.FC<DateModuleType>;
export default DateModule;
