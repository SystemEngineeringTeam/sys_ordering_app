import { Route, BrowserRouter as Router, Routes } from 'react-router-dom';
import BeforeAccountin from './pages/BeforeAccounting';
import WaitingReceive from './pages/WaitingReceive';
import Home from './pages/Home';
import Test from './pages/Test';

const App = () => {
  return (
    <Router>
      <Routes>
        <Route element={<Home />} path="/" />
        <Route element={<BeforeAccountin />} path="/beforeaccountin" />
        <Route element={<WaitingReceive />} path="/waitingreceive" />
        <Route element={<Test itemId="2cvlYVy8zF1uB0hci0Hf" />} path="/test" />
        <Route element={<div>Not Found</div>} path="*" />
      </Routes>
    </Router>
  );
};

export default App;
