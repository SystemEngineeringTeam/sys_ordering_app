import { Route, BrowserRouter as Router, Routes } from 'react-router-dom';
import BeforeAccountin from './pages/BeforeAccounting';
import WaitingReceive from './pages/WaitingReceive';
import Home from './pages/Home';

const App = () => {
  return (
    <Router>
      <Routes>
        <Route element={<Home />} path="/" />
        <Route element={<BeforeAccountin />} path="/beforeaccountin" />
        <Route element={<WaitingReceive />} path="/waitingreceive" />
        <Route element={<div>Not Found</div>} path="*" />
      </Routes>
    </Router>
  );
};

export default App;
