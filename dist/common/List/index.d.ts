import React from 'react';
import { ItemType } from '../../ApiContext';
declare type ListProps = {
    items: ItemType[];
    onItemClick?: (index: number, item: ItemType) => void;
    searchable?: boolean;
    paymentMethod?: boolean;
};
declare const List: React.FC<ListProps>;
export default List;
