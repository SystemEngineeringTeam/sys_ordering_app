import { useCategory } from '@/firebase/useCategory';
import { type cartData, type category } from '@/types/type';
import { type SyntheticEvent, useState } from 'react';
import MenuItemsContainer from '@/components/menuscrean/MenuItemsContainer';
import { Box, Tab, Tabs } from '@mui/material';
import FirstHome from '@/components/menuscrean/FirstHome';

const AppLayout = () => {
  const option1 = ['1F6Pg1cztoZmXiqTOFUK', 'UIq3PiEC2VFZkiuuh0Av'];
  const option2 = ['UIq3PiEC2VFZkiuuh0Av'];
  const data1: cartData = {
    itemId: '2cvlYVy8zF1uB0hci0Hf',
    options: option1,
    qty: 2,
    amountPrice: 1200,
    timeStamp: 1728470170,
  };
  const data2: cartData = {
    itemId: 'XHRHflP51o4uZmygg07Y',
    options: option2,
    qty: 1,
    amountPrice: 300,
    timeStamp: 1728470210,
  };
  const testCart: cartData[] = [data1, data2];

  const category: category[] = useCategory();
  const [val, setVal] = useState<string>('0');
  const [activeCategory, setActiveCategory] = useState<category>(category[0]);
  const [cart, setCart] = useState<cartData[]>(testCart);

  const handleTab = (event: SyntheticEvent, newValue: string) => {
    setVal(newValue);
    const selectedCategory = category[Number(newValue)];
    setActiveCategory(selectedCategory);
  };

  return (
    <Box sx={{ width: '100%', bgcolor: 'background.paper' }}>
      <Box sx={{ display: 'flex', justifyContent: 'center', alignItems: 'center' }}>
        <Tabs
          allowScrollButtonsMobile
          indicatorColor="secondary"
          onChange={handleTab}
          scrollButtons="auto"
          sx={{
            textAlign: 'center',
            width: '100%',
            maxWidth: '100vw',
            borderBottom: 1,
            borderColor: 'divider',
            justifyContent: 'center',
            alignItems: 'center',
            display: 'flex', // Centralize the Tabs
          }}
          textColor="primary"
          value={val}
          variant="fullWidth"
        >
          {category.map((item, index) => (
            <Tab key={item.id} label={item.name} value={String(index)} />
          ))}
        </Tabs>
      </Box>
      {/* コンテンツエリア */}
      {activeCategory ? (
        <div>
          <MenuItemsContainer activeCategory={activeCategory} cart={cart} setCart={setCart} />
        </div>
      ) : (
        <FirstHome />
      )}
    </Box>
  );
};

export default AppLayout;
