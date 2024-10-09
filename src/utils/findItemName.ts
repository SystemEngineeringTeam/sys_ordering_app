import { type items } from '@/types/type';

export function findItemName(itemId: string, items: items[]) {
  const itemData: items | undefined = items.find((item) => item.id === itemId);
  if (itemData !== undefined) {
    return itemData.name;
  }
  return itemData;
}
