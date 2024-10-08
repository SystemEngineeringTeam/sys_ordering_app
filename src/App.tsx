import { Route, BrowserRouter as Router, Routes } from 'react-router-dom';
import BeforeAccountin from './pages/BeforeAccounting';
import WaitingReceive from './pages/WaitingReceive';
import Home from './pages/Home';
import ItemPopup from './pages/ItemPopup';
import AppLayout from './layout/AppLayout';

const App = () => {
  return (
    <Router>
      <Routes>
        <Route element={<AppLayout />} path="/"></Route>
        <Route element={<Home />} path="/a" />
        <Route element={<BeforeAccountin />} path="beforeaccountin" />
        <Route element={<WaitingReceive />} path="waitingreceive" />
        <Route element={<div>Not Found</div>} path="*" />
      </Routes>
    </Router>
  );
};

export default App;
