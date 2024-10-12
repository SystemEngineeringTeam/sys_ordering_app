import { Route, BrowserRouter as Router, Routes } from 'react-router-dom';
import AppLayout from './layout/AppLayout';
import BeforeAccountin from './pages/BeforeAccounting';
import Home from './pages/Home';
import WaitingReceive from './pages/WaitingReceive';

const App = () => {
  return (
    <Router>
      <Routes>
        <Route element={<AppLayout />} path="/" />
        <Route element={<Home />} path="/a" />
        <Route element={<BeforeAccountin />} path="beforeaccountin" />
        <Route element={<WaitingReceive  />} path="waitingreceive" />
        <Route element={<div>Not Found</div>} path="*" />
      </Routes>
    </Router>
  );
};
export default App;
