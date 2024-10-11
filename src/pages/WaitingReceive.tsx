import Ordernumbar from '@/components/accounting/ordernumbar';
import Precautions from '@/components/accounting/precautions';
import WaitingPeople from '@/components/accounting/waiting_people';
import { useLocation } from 'react-router-dom';

const WaitingReceive = () => {
  const location = useLocation();
  const { selectNum } = location.state as { selectNum: number };

  return (
    <div>
      <WaitingPeople />
      <Ordernumbar selectNum={selectNum.toString()} />
      <Precautions />
    </div>
  );
};

export default WaitingReceive;
