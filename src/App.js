import './App.css';
import Login from './Login';
import { Router } from "@reach/router"
import OrderMenu from './OrderMenu';
import {useState, useEffect} from "react";

function App() {

  const [foodList, setFoodList] = useState([]);

  useEffect(() => {
    async function fetchFoodList() {
      const response = await fetch('fooditems.json');
      const list = await response.json();
      if (response.status !== 200) {
        throw Error(list.message);
      }
      setFoodList(list);
    }
    fetchFoodList();
  },[])

  return (
    <Router>
      <Login path="/" />
      <OrderMenu path="/orderPage" foodList={foodList}/>
    </Router>
  );
}

export default App;
