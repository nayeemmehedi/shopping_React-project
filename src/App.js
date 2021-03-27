import React from 'react';
import Header from './First-Components/header/Header';
import Shop from './First-Components/Shop/Shop';
import {
  BrowserRouter as Router,
  Switch,
  Route,
  Link
} from "react-router-dom";

import Inventory from './Second-Components/Inventory/Inventory';
import Notfound from './Second-Components/Notfound/Notfound';
import ProductDetail from './Second-Components/ProductDetails/ProductDetail';
import Reviews from './Second-Components/Reviews/Reviews';

const App = () => {
  return (
    <div>
      <Header></Header>
    

    <Router> 
      <Switch>
          <Route path="/Home">
            <Shop />
          </Route>
          <Route path="/Reviews">
           <Reviews></Reviews>
            
          </Route>
          <Route path="/Pricing">
            <Inventory/>
          </Route> 
          <Route exact path="/">
            <Shop />
          </Route>

          <Route path="/Product/:key">
            <ProductDetail></ProductDetail>
          </Route>


          <Route path="*">
            <Notfound></Notfound>
          </Route>



        </Switch>
     
    </Router>
      
    </div>
  );
};

export default App;