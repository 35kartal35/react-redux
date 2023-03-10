import Header from "./containers/Header";
import { BrowserRouter as Router, Switch, Route } from "react-router-dom";
import "./App.css";
import ProductListining from "./containers/ProductListining";
import ProductDetail from "./containers/ProductDetail";

function App() {
  return (
    <div className="App">
      <Router>
        <Header />
        <Switch>
        <Route path="/" exact component={ProductListining} />
        <Route path="/product/:productId" exact component={ProductDetail} />
        <Route>404 Not Found!</Route>
        </Switch>
      </Router>
    </div>
  );
}

export default App;
