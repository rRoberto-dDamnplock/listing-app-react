import React, { useState } from "react";
import Header from "./Components/UI/Header/Header";
import Body from "./Components/UI/Body/Body";
import Modal from "./Components/UI/Modal/Modal";
import "./App.css";
import Products from "./Components/Mid/Products/Products";

function App() {
  const [setState, setEnteredState] = useState(0)
  const [items, setEnteredItems] = useState([
    {
      title: "Tree1",
      info: "this tree eats CO2 and gives out oxygen. It is very healthy to be around it",
      price: "89",
      id: "0.124",
    },
    {
      title: "Food",
      info: "food is essential in the process of building of muscles and a healthy lifestyle",
      price: "12",
      id: "0.23",
    },
    {
      title: "Dumbells",
      info: "if you want to be succesful in life you have to be able to lift as heavy as you possibly can. So, please lift heavy.",
      price: "78",
      id: "0.343",
    },
    {
      title: "Read",
      info: "If you want to make a lot of money you have to read because if you notice all success stories have a point where they spend two hours of the day reading",
      price: "1000",
      id: "0.454",
    },
  ]);

  const addDataHandler = (enteredTitle, enteredInfo, enteredPrice) => {
    setEnteredItems(prevData => {
      const updatedData = [...prevData];
      updatedData.unshift({
        title: enteredTitle,
        info: enteredInfo,
        price: enteredPrice,
        id: Math.random().toString(),
      });

      return updatedData;
      
    });
    console.log('this is working')
  };

const addModalHandler = () => {
  setEnteredState(1)
}
 const cancelModalHandler = () => {
  // console.log('cancel fired')
  setEnteredState(0)

}

  return (
    <div className="App">
      {setState === 1 &&(   <Modal onAddData={addDataHandler} onCancel={cancelModalHandler}/>) }
   
      <Header onAddModal={addModalHandler} />
      <Body />
      <div className="separation">
        <h1>Products</h1>
      </div>
      <Products products={items} />
    </div>
  );
}

export default App;
