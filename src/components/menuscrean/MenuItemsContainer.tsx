import Grid from '@mui/material/Grid2';
import MenuItemsCards from './MenuItemsCards';
import MenuItemsBottom from './MenuItemsBottom';
import { cartData, category } from '@/types/type';
import { useState } from 'react';

import Grid2 from '@mui/material/Grid2';
import ItemPopup from '@/pages/ItemPopup';

import { useItem } from '@/firebase/useItem';
import { menuItems } from '@/utils/menuItems';

interface Props {
  activeCategory: category;
  setCart:React.Dispatch<React.SetStateAction<cartData[]>>
  cart:cartData[]
}

const MenuItemsContainer = ({ activeCategory , cart ,setCart }: Props) => {
  const [cardOpen, setCardOpen] = useState(false);
  const [selectItemId,setSelectItemId] = useState('')


  const Item = useItem();
  const selectItems = menuItems(Item, activeCategory);

  return (
    <div>
      <Grid container spacing={2} sx={{ padding: '3%', pb: '85px' }}>
        {selectItems.map((item) => {
          return (
            <Grid size={{xs:6,md:4}} key={item.id}>
              <MenuItemsCards item={item} cardOpen={cardOpen} setCardOpen={setCardOpen} setSelectItemId ={setSelectItemId}/>
            </Grid>
          );
        })}
        <ItemPopup itemId = {selectItemId} cardOpen ={cardOpen} setCardOpen={setCardOpen} cart ={cart} setCart={setCart} />
        <MenuItemsBottom />
      </Grid>
    </div>
  );
};

export default MenuItemsContainer;
