import './App.css';
import AccountingExplanatory from './components/accounting/accounting_explanatory';
import Ordernumbar from './components/accounting/ordernumbar';
import Precautions from './components/accounting/precautions';
import WaitingPeople from './components/accounting/waiting_people';

const App = () => {
  return (
    <>
      {/*<AccountingExplanatory */}
      <WaitingPeople/>
      <Ordernumbar />
      <Precautions />
    </>
  );
};

export default App;
