import { Banner } from '@myorg/common-ui';
// Be carefull here if this file changes it shoulds affect to tests as well
// import { exampleProducts } from '@myorg/products';

// eslint-disable-next-line @typescript-eslint/no-unused-vars
export function App() {
  return (
    <>
      <Banner text="Welcome to the store!" />
      {/* <ul>
          {exampleProducts.map((product) => (
          <li key={product.id}>
          <strong>{product.name}</strong> Price: {product.price}
          </li>
          ))}
          </ul> */}
    </>
  );
}

export default App;
