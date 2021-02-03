import { productData } from "./components/products/data";
import { BrowserRouter as Router, Route, Switch } from "react-router-dom";
import Navbar from "./components/Navbar";
import Home from "./components/pages/Home";
import Products from "./components/pages/Products";
import Services from "./components/pages/Services";
import SignUp from "./components/pages/SignUp";
import ProductsBags from "./components/products/productsBags";
import Cart from './components/cart';
import "./App.css";


function App() {
  return (
    <Router>
      <Navbar />
      <Switch>
        <Route exact path="/" component={Home}></Route>
        <Route path="/products" components={Products}>
          <ProductsBags heading="Daypacks" data={productData} />
        </Route>
        <Route path="/services" component={Services}></Route>
        <Route path="/shoping-cart" component={Cart}></Route>
        <Route path="/sign-up" component={SignUp}></Route>
      </Switch>
    </Router>
  );
}

export default App;
