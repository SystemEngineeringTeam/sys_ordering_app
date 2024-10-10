import { type items } from '@/types/type';

export function findItemImg(itemId: string, items: items[]) {
  const itemData: items | undefined = items.find((item) => item.id === itemId);
  if (itemData !== undefined) {
    return itemData.imgUrl;
  }
  return itemData;
}
