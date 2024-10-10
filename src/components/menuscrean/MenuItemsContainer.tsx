import Grid from '@mui/material/Grid2';
import MenuItemsCards from './MenuItemsCards';
import MenuItemsBottom from './MenuItemsBottom';
import { type cartData, type category } from '@/types/type';
import { useState } from 'react';
import ItemPopup from '@/pages/ItemPopup';
import { useItem } from '@/firebase/useItem';
import { menuItems } from '@/utils/menuItems';
import { useOptions } from '@/firebase/useOptions';

interface Props {
  activeCategory: category;
  setCart: React.Dispatch<React.SetStateAction<cartData[]>>;
  cart: cartData[];
}

const MenuItemsContainer = ({ activeCategory, cart, setCart }: Props) => {
  const [cardOpen, setCardOpen] = useState(false);
  const [selectItemId, setSelectItemId] = useState('');

  const items = useItem() ?? [];
  const options = useOptions() ?? [];
  const selectItems = menuItems(items, activeCategory);

  return (
    <div>
      <Grid container spacing={2} sx={{ padding: '3%', pb: '85px' }}>
        {selectItems.map((item) => {
          return (
            <Grid key={item.id} size={{ xs: 6, md: 4 }}>
              <MenuItemsCards
                cardOpen={cardOpen}
                item={item}
                setCardOpen={setCardOpen}
                setSelectItemId={setSelectItemId}
              />
            </Grid>
          );
        })}
        <ItemPopup cardOpen={cardOpen} cart={cart} itemId={selectItemId} setCardOpen={setCardOpen} setCart={setCart} />
        <MenuItemsBottom cart={cart} items={items} options={options} />
      </Grid>
    </div>
  );
};

export default MenuItemsContainer;
