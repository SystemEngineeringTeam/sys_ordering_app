import Ordernumbar from '@/components/accounting/ordernumbar';
import Precautions from '@/components/accounting/precautions';
import WaitingPeople from '@/components/accounting/waiting_people';

const WaitingReceive = () => {
  return (
    <div>
      <WaitingPeople />
      <Ordernumbar />
      <Precautions />
    </div>
  );
};

export default WaitingReceive;
