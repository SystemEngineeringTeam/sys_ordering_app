import { type items } from '@/types/type';

export function findOptionName(itemId: string, items: items[]) {
  const itemData: items | undefined = items.find((item) => item.id === itemId);
  if (itemData !== undefined) {
    return itemData.name;
  }
  return 'Item not found';
}
