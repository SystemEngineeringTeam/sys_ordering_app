import './App.css';
import Product_amount from './components/product-details/product_amount';
import Product_picture from './components/product-details/product_picture';
import Topping from './components/product-details/topping';

const App = () => {
  return (
    <>
    <Product_picture/>
    <Topping/>
    <Product_amount/>
    </>
  )
};

export default App;
