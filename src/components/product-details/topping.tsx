import { Box, Button, Stack, Divider } from '@mui/material';
import React from 'react';

const ToppingName = ["チーズ", "マヨネーズ", "ケチャップ"];
const ToppingPrice = [100, 0, 0];

const Topping = () => {
  return (
    <Stack spacing={2} sx={{ maxWidth: '90%',  marginLeft: '20px' }}>
      <Box sx={{ fontSize: '1.2rem', color: 'gray' }}>トッピング</Box>
      <Stack divider={<Divider />} spacing={2}>
        {/* ToppingName配列の各要素に対してマッピングを行う */}
        {ToppingName.map((name, index) => (
          // 各トッピングに対して、Boxコンポーネントを生成
          <Box key={name} sx={{ display: 'flex', alignItems: 'center' }}>
            {/* トッピング名と価格（価格が0より大きい場合のみ表示）を表示 */}
            <Box sx={{ flexGrow: 1 }}>
              {name}{ToppingPrice[index] > 0 && `(+${ToppingPrice[index]}円)`}
            </Box>
            {/* 「なし」ボタンを表示 */}
            <Button
              size="small"
              sx={{
                bgcolor: 'gray',
                color: 'white',
                borderRadius: '50px',
                '&:hover': { bgcolor: 'darkgray' },
                minWidth: '60px',
                display: 'flex',
                justifyContent: 'center',
                alignItems: 'center',
              }}
              variant="contained"
            >
              なし
            </Button>
          </Box>
        ))}
      </Stack>
      <Divider sx={{ borderBottomWidth: 2, borderColor: 'black' }} />
    </Stack>
  );
};

export default Topping;
