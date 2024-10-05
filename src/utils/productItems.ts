import { useItem } from '@/firebase/useItem';
import { items } from '@/types/type';

const ProductItems = (ItemId: string) => { // 型を修正
  const item = useItem();

  const foundItem = item?.find((currentItem) => currentItem.id === ItemId);

  if(!foundItem){
    console.log('undifind')
    return null
  }else
    return foundItem
};

export default ProductItems;
