import { type items, type category } from '@/types/type';

export function menuItems(Items: items[] | undefined, category: category) {
  if (Items !== undefined) {
    const selectItems = Items.filter((item) => {
      return category.id === item.category_id;
    });
    return selectItems;
  }
  const item: items[] = [];
  return item;
}
