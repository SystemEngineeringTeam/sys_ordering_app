import Grid from '@mui/material/Grid2';
import MenuItemsCards from './MenuItemsCards';
import MenuItemsBottom from './MenuItemsBottom';
import { type cartData, type category } from '@/types/type';
import { SetStateAction, useState } from 'react';
import ItemPopup from '@/pages/ItemPopup';
import { useItem } from '@/firebase/useItem';
import { menuItems } from '@/utils/menuItems';
import { useOptions } from '@/firebase/useOptions';

interface Props {
  activeCategory: category;
  setCart: React.Dispatch<React.SetStateAction<cartData[]>>;
  cart: cartData[];
  itemId: string;
}

const MenuItemsContainer = ({ activeCategory, cart, setCart, itemId }: Props) => {
  const [cardOpen, setCardOpen] = useState(false);
  const [selectItemId, setSelectItemId] = useState('');

  const items = useItem() || [];
  const options = useOptions() || [];
  const selectItems = menuItems(items, activeCategory);

  return (
    <div>
      <Grid container spacing={2} sx={{ padding: '3%', pb: '85px' }}>
        {selectItems.map((item) => {
          return (
            <Grid size={{ xs: 6, md: 4 }} key={item.id}>
              <MenuItemsCards
                item={item}
                cardOpen={cardOpen}
                setCardOpen={setCardOpen}
                setSelectItemId={setSelectItemId}
              />
            </Grid>
          );
        })}
        <ItemPopup
          itemId={selectItemId}
          cardOpen={cardOpen}
          setCardOpen={setCardOpen}
          cart={cart}
          setCart={setCart}
          kinds="add"
          InCartData={{
            itemId: '',
            qty: 0,
            options: [],
            amountPrice: 0,
            timeStamp: 0,
          }}
        />
        <MenuItemsBottom
          cart={cart}
          items={items}
          options={options}
          itemId={itemId}
          cardOpen={cardOpen}
          setCardOpen={setCardOpen}
          setCart={setCart}
        />
      </Grid>
    </div>
  );
};

export default MenuItemsContainer;
