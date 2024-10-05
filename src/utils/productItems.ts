import { useItem } from '@/firebase/useItem';

const productItems = (ItemId: string) => {
  const item = useItem();

  const foundItem = item?.find((currentItem) => currentItem.id === ItemId);

  return foundItem || null;
};

export default productItems;
