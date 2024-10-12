import './App.css';
import Products from './components/Products.jsx';
import ProductForm from './components/ProductForm';
import { useState } from 'react';

function App() {

  const response = [
    {
      id: "x",
      title: "Mango",
      price: 50,
      date: new Date(2023, 1 ,7) //It's 17 april 2023 not 17 march 2023
    },
    {
      id: "y",
      title: "Apple",
      price: 60,
      date: new Date(2024, 3, 9)
    },
    {
      id: "z",
      title: "Orange",
      price: 55,
      date: new Date(2025, 6, 11)
    },
    {
      id: "a",
      title: "XYZ",
      price: 100,
      date: new Date(2026, 9, 13)
    },
  ]

  const [data, setData] = useState(response);

  // we passed this func as a prop to child component
  function newProductHandler(newProduct){
    console.log("received ", newProduct, "from child component(ProductForm)");

    // updating data
    setData([...data, newProduct]);
  }

  return (
    <div className="App">
      <ProductForm newProductHandler={newProductHandler}></ProductForm>
      <Products products={data}></Products>
    </div>
  );
}

export default App;
