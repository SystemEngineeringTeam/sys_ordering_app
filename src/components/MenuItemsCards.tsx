import React, { ReactNode } from 'react';
import type { Item } from './Item';

type MenuItemsCardsProps = {
    src: Array<Item>,
    children: (i: Item) => ReactNode
};

export default function MenuItemsCards({ src, children }: MenuItemsCardsProps) {
    return (
        <dl>
        {
        src.map(elem => (
        <React.Fragment key= {elem.itemname}>
           {children(elem)}
        </React.Fragment>
         ))
        }
        </dl>
    );
}