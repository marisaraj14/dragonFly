import './App.css';
import Login from './Login';
import { Router } from "@reach/router"
import OrderMenu from './OrderMenu';
import { useState, useRef, useEffect } from "react";

function App() {

  const [foodList, setFoodList] = useState([]);
  
  useEffect(() => {
    async function fetchFoodList() {
      try {
        const resp = await window.gapi.client.script.scripts.run({
          'scriptId': 'AKfycbx-PHA4kWR0404h9KA0Ct8zrI41NHQ_3z0ibaqSxI4',
          'resource': {
            'function': 'getSummary'
          }
        })
        var result = resp.result;
        if (result.error) {
          console.log('Error: ' + result.error.message);
          return
        }
        setFoodList(result.response.result);
      } catch (error) {
        console.log(JSON.stringify(error, null, 2));
      } finally {

      };

    }
    fetchFoodList();
  }, [])

  return (
    <Router>
      <Login path="/" />
      <OrderMenu path="/orderPage" foodList={foodList} />
    </Router>
  );
}

export default App;
