import React, { useState } from "react";
import { v4 as uuid } from "uuid";

function ItemForm({onItemFormSubmit  }) {

  const [ form , setform]=useState({
    name: '',
    category: 'Produce',
  });
  


  function handleChangeEvent (event){
    setform(
      {
        ...form,
        [event.target.name]: event.target.value});

  }


  function handleSubmit(event){
    event.preventDefault()
    const newItem = {
      id: uuid(), 
      ...form
    };

    onItemFormSubmit(newItem)
  }

  



  return (
    <form className="NewItem">
      <label>
        Name:
        <input type="text" name="name"  value={form.name} onChange={handleChangeEvent}/>
      </label>

      <label>
        Category:
        <select name="category" value={form.category} onChange={handleChangeEvent}>
          <option value="Produce">Produce</option>
          <option value="Dairy">Dairy</option>
          <option value="Dessert">Dessert</option>
        </select>
      </label>

      <button type="submit" onClick={handleSubmit}>Add to List</button>
    </form>
  );
}

export default ItemForm;
