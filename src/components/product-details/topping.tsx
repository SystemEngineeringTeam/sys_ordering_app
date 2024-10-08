import { Box, Button, Stack, Divider } from '@mui/material';
import React, { useEffect, useState } from 'react';
import { options_id, type options } from '@/types/type';

interface ToppingProps {
  currentOptions: options[];
  setOptionPriceAmount: React.Dispatch<React.SetStateAction<number>>;
  selectOptions: string[];
  setSelectOptions: React.Dispatch<React.SetStateAction<string[]>>;
}

const Topping = ({ currentOptions, setOptionPriceAmount, selectOptions, setSelectOptions }: ToppingProps) => {
  const [optionStates, setOptionStates] = useState<boolean[]>(currentOptions.map(() => false)); // 各トッピングの初期状態を配列で管理

  const calculateTotalPrice = () => {
    const itemPrice = currentOptions.reduce((sum, option, index) => {
      return sum + (optionStates[index] ? 0 : option.price); // 選択されたトッピングの価格を合計（逆に変更）
    }, 0);
    setOptionPriceAmount(itemPrice);
  };

  useEffect(() => {
    // optionStatesの値がtrueの場合、selectOptionsに追加
    const newSelectOptions: options_id[] = [];

    currentOptions.forEach((option, index) => {
      if (optionStates[index]) {
        newSelectOptions.push(option.id);
      }
    });

    setSelectOptions(newSelectOptions);
  }, [optionStates]);

  return (
    <Stack spacing={2} sx={{ maxWidth: '100%' }}>
      <Box sx={{ fontSize: '1.2rem', color: 'gray' }}>トッピング</Box>
      <Stack divider={<Divider />} spacing={2}>
        {/* currentOptionがoptions型であることを確認する条件を追加 */}
        {typeof currentOptions !== null &&
          currentOptions.map((option, index) => (
            // 各トッピングに対して、Boxコンポーネントを生成
            <Box
              key={index}
              sx={{
                display: 'flex',
                alignItems: 'center',
                flexDirection: { xs: 'row', sm: 'row' }, // 画面幅が小さい場合は縦並び、大きい場合は横並び
              }}
            >
              {/* トッピング名と価格（価格が0より大きい場合のみ表示）を表示 */}
              <Box sx={{ flexGrow: 1, textAlign: { xs: 'left', sm: 'left' },}}>
                {option.name}
                {option.price === 0 ? '' : `(+${option.price}円)`}
              </Box>
              {/* 「あり」「なし」ボタンを表示 */}
              <Button
                onClick={() => {
                  const newStates = [...optionStates];
                  newStates[index] = !newStates[index]; // 対応するトッピングの状態をトグル
                  setOptionStates(newStates);
                  calculateTotalPrice();
                }}
                size="small"
                sx={{
                  bgcolor: optionStates[index] ? 'orange' : 'gray', // 状態に応じて色を変更
                  color: 'white',
                  borderRadius: '50px',
                  '&:hover': { bgcolor: optionStates[index] ? 'darkorange' : 'darkgray' },
                  minWidth: '60px',
                  display: 'flex',
                  justifyContent: 'center',
                  alignItems: 'center',
                  mt: { xs: 1, sm: 0 }, // 小さい画面ではボタンに余白を追加
                }}
                variant="contained"
              >
                {optionStates[index] ? 'あり' : 'なし'}
              </Button>
            </Box>
          ))}
      </Stack>
      <Divider sx={{ borderBottomWidth: 2, borderColor: 'black' }} />
    </Stack>
  );
};

export default Topping;