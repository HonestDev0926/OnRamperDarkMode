import React from 'react';
import './calendar.css';
export interface DateType {
    day: number;
    month: number;
    year: number;
}
interface DatePickerType {
    name: string;
    value?: DateType;
    onChange?: (name: string, value: any, type?: string) => void;
}
declare const DatePicker: React.FC<DatePickerType>;
export default DatePicker;
