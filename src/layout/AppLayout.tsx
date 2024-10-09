import { useCategory } from '@/firebase/useCategory';
import { cartData, category } from '@/types/type';
import { SyntheticEvent, useState } from 'react';
import MenuItemsContainer from '@/components/menuscrean/MenuItemsContainer';
import { Box, Tab, Tabs } from '@mui/material';
import FirstHome from '@/components/menuscrean/FirstHome';

const AppLayout = () => {
  const category: category[] = useCategory();
  const [val, setVal] = useState<string>('0');
  const [activeCategory, setActiveCategory] = useState<category>(category[0]);
  const [cart, setCart] = useState<cartData[]>([]);

  const handleTab = (event: SyntheticEvent, newValue: string) => {
    setVal(newValue);
    const selectedCategory = category[Number(newValue)];
    setActiveCategory(selectedCategory);
  };

  return (
    <Box sx={{ width: '100%', bgcolor: 'background.paper' }}>
      <Box sx={{ display: 'flex', justifyContent: 'center', alignItems: 'center' }}>
        <Tabs
          value={val}
          onChange={handleTab}
          textColor="primary"
          indicatorColor="secondary"
          variant="fullWidth"
          scrollButtons="auto"
          allowScrollButtonsMobile
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
        >
          {category.map((item, index) => (
            <Tab key={item.id} label={item.name} value={String(index)} />
          ))}
        </Tabs>
      </Box>
      {/* コンテンツエリア */}
      {activeCategory ? (
        <div>
          <MenuItemsContainer activeCategory={activeCategory} />
        </div>
      ) : (
        <FirstHome />
      )}
    </Box>
  );
};

export default AppLayout;
