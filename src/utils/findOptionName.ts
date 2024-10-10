import { type options } from '@/types/type';

export function findOptionName(optionId: string, options: options[]) {
  const optionData: options | undefined = options.find((option) => option.id === optionId);
  if (optionData !== undefined) {
    return optionData.name;
  }
  return 'Item not found';
}
