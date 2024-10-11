import { useCategory } from '@/firebase/useCategory';
import { useItem } from '@/firebase/useItem';
import { useOptions } from '@/firebase/useOptions';

const Home = () => {
  const options = useOptions();
  const items = useItem();
  const category = useCategory();

  return (
    <div>
      <h1>テストで出力</h1>
      <h2>category</h2>
      {category?.map((category) => {
        return (
          <div key={category.id}>
            <h2>{category.name}</h2>
          </div>
        );
      })}
      <h2>options</h2>
      {options?.map((option) => {
        return (
          <div key={option.id}>
            <h2>{option.name}</h2>
            <p>{option.price}</p>
          </div>
        );
      })}
      <h2>item</h2>
      {items?.map((item) => {
        return (
          <div key={item.id}>
            <h2>{item.name}</h2>
            <img alt={item.name} src={item.imgUrl} />
            <p>{item.price}</p>
            <p>{item.category_id}</p>
            <p>{item.visible}</p>
            <h3>Itemoptions</h3>
            {item.options.map((option) => {
              return (
                <div key={option.id}>
                  <h3>{option.name}</h3>
                  <p>{option.price}</p>
                </div>
              );
            })}
          </div>
        );
      })}
    </div>
  );
};
export default Home;
