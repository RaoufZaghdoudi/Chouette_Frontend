import React, { useState } from "react";
import Card from './Card'
import Input from './Input'



const Body = () => {
  const [toDoItems, setItems] = useState([]);

  const deleteItem = (id) => {
    setItems(prev => {
      return prev.filter((element, index) => { return index !== id })
    })
  }
  const addItem = (item) => {
    setItems((prev) => {
      return [...prev, item];
    })
  }

  const updateItem = (item, id) => {
    setItems(prev => {
      return prev.map((elm, index) => index === id ? item : elm);
    }
    )
  }


  return (<div >

    <Input addFun={addItem} />
    {toDoItems.map((item, index) => <Card title={item.title} content={item.content} key={index} idItem={index}
      updateFun={updateItem}
      delete={deleteItem} />)}
  </div>)
}

export default Body;




