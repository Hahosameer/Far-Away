import "./App.css";
import { Form } from "./component/Form";

import { Logo } from "./component/Logo";
import { PakigingList } from "./component/PakegList";
// import { PakigingList } from "./component/PakegList";
import { Stats } from "./component/Stats";
import { useState } from "react";



function App() {
  const [itemArr, setItemArr] = useState([
    {
      quantity: 4,
      name: "Socks",
      packed: false,
    },
    {
      quantity: 2,
      name: "water bottles",
      packed: false,
    },
    {
      quantity: 6,
      name: "Suits",
      packed: false,
    },
    {
      quantity: 1,
      name: "Charger",
      packed: false,
    },
    {
      quantity: 10,
      name: "toffee",
      packed: true,
    },
  ]);

  return (
    <>
   <Logo />
      <Form setItemArr={setItemArr} item={itemArr} />
      <PakigingList setItemArr={setItemArr} item={itemArr} />
      <Stats />
    </>
  );
}

export default App;
