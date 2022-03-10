import React from 'react';
import { ItemType } from '../ApiContext';
interface PickViewProps {
    title: string;
    items: ItemType[];
    onItemClick?: (name: string, index: number, item: ItemType) => void;
    name?: string;
    searchable?: boolean;
    paymentMethod?: boolean;
}
declare const PickView: React.FC<PickViewProps>;
export default PickView;
