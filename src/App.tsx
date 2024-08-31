import './App.css';
import Accounting_explanatory from './components/accounting/accounting_explanatory';
import Ordernumbar from './components/accounting/ordernumbar';
import Precautions from './components/accounting/precautions';

const App = () => {
  return (
    <>
    <Accounting_explanatory />
    <Ordernumbar />
    <Precautions />
    </>
  );
};

export default App;
