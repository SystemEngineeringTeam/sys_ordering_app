import Box from '@mui/material/Box';

interface Props {
  option: string;
}

const DrawerOptionList = ({ option }: Props) => {
  return (
    <div>
      <Box>
        <Box sx={{ textAlign: 'left', fontSize: '0.8rem' }}>{option}</Box>
      </Box>
    </div>
  );
};
export default DrawerOptionList;
