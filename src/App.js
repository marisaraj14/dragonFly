import './App.css';
import Login from './Login';
import { Router, Link } from "@reach/router"
import OrderMenu from './OrderMenu';

function App() {
  return (

    <Router>
      <Login path="/" />
      <OrderMenu path="/orderPage" />
    </Router>
  );
}

export default App;
