import { useState } from "react";

export const Form = ({ setItemArr, item }) => {
  const [itemName, setitemName] = useState("");
  const [quantity, setquantity] = useState(1);

  const addItem = () => {
    const meraItem = [...item];
    meraItem.push({
      quantity: quantity,
      name: itemName,
      packed: false,
      
    });
    setItemArr(meraItem);

    setitemName([]);
    // setItemsArr([])
  };
  

  return (
    <div className="navbar">
      <p>What do you need for your 🎨 trip?</p>
      <label for="cars">Choose Quantity and Name:</label>
      <select
        className="dropDown"
        onChange={(e) => setquantity(e.target.value)}
        name="quantity"
        id="quantity"
      >
        <option value="1">1</option>
        <option value="2">2</option>
        <option value="3">3</option>
        <option value="4">4</option>
        <option value="5">5</option>
        <option value="6">6</option>
        <option value="7">7</option>
        <option value="8">8</option>
        <option value="9">9</option>
        <option value="10">10</option>
        <option value="11">11</option>
        <option value="12">12</option>
        <option value="13">13</option>
        <option value="14">14</option>
        <option value="15">15</option>
        <option value="16">16</option>
        <option value="17">17</option>
        <option value="18">18</option>
        <option value="19">19</option>
        <option value="20">20</option>
      </select>
      <input
        type="text"
        placeholder="item...."
        onChange={(e) => setitemName(e.target.value)}
      />
      <button onClick={addItem}>Add</button>
    </div>
  );
};
