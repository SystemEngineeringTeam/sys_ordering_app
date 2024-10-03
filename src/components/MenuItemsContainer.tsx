import React from 'react';
import ReactDOM from 'react-dom/client';
import './index.css';
import MenuItemsCards from './MenuItemsCards';
import Items from './Items';
import type { Item } from './Item';
import reportWebVitals from './reportWebVitals';
import Grid from '@mui/material/Grid2';

const root = ReactDOM.createRoot(
  document.getElementById('root') as HTMLElement
);

root.render(
  <MenuItemsCards src={Items}>
  {(elem: Item) => (
    <div>
      {elem.itemname}<br></br>
      <img src={elem.imgpath} alt=''/><br></br>
      {elem.price}円~
    </div>
  )}
  </MenuItemsCards>
);

reportWebVitals();