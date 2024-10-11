import Ordernumbar from '@/components/accounting/ordernumbar';
import Precautions from '@/components/accounting/precautions';
import WaitingPeople from '@/components/accounting/waiting_people';

interface Props {
  selectNum: string;
}

const WaitingReceive = ({ selectNum }:Props) => {
  return (
    <div>
      <WaitingPeople />
      <Ordernumbar selectNum={selectNum} />
      <Precautions />
    </div>
  );
};

export default WaitingReceive;
