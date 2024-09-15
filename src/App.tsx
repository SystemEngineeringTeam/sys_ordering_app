import './App.css';
import ProductAmount from './components/product-details/product_amount';
import ProductPicture from './components/product-details/product_picture';
import Topping from './components/product-details/topping';

const App = () => {
  return (
    <>
      <ProductPicture />
      <Topping />
      <ProductAmount />
    </>
  );
};

export default App;
