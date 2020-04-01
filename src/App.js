import React, { useState } from 'react';

import './App.css';
import 'bootstrap/dist/css/bootstrap.min.css';
import Header from './components/Header/Header';
import Banner from './components/Banner/Banner';

import Card from './components/Card/Card';
import Footer from './components/Footer/Footer';
import ChooseUs from './components/WhyUs/ChooseUs';
import { BrowserRouter as Router, Route, Switch } from 'react-router-dom';
import SingliCardDetails from './components/SingleCard/SingliCardDetails';
import ErrorPage from './components/ErrorPage/ErrorPage';
import Signup from './components/Signup/Signup';
import Shipment from './components/Shipment/Shipment';


function App() {
  const [cart, setCart] = useState([]);
  const [deliveryDetails, setDeliveryDetails] = useState({
    todoor: '',
    road: '',
    flat: '',
    businessname: '',
    address: ''
  });
  const clearCart = () => {
    setCart([])
  }
  const deliveryDetailsHandler = (data) => {
    setDeliveryDetails(data)
  }

  const cartHandler = data => {
    const addedItems = cart.find(item => item.id === data.id);
    const newCart = [...cart, data]
    setCart(newCart);
    if (addedItems) {
      const othersCart = cart.filter(crt => cart.id !== data);
      setCart(othersCart);
    } else {
      const newCart = [...cart, data]
      setCart(newCart);
    }
  }
  const checkOutItemHandler = (productId, productQuantity) => {
    const newCart = cart.map(item => {
      if (item.id === productId) {
        item.quantity = productQuantity;
      }
      return item;
    })

    const filteredCart = newCart.filter(item => item.quantity > 0)
    setCart(filteredCart)
  }

  return (

    <div>

      <Router>
        <Switch>
          <Route exact path="/">
            <Header></Header>
            <Banner></Banner>
            <Card cart={cart}></Card>
            <ChooseUs></ChooseUs>
            <Footer></Footer>
          </Route>
          <Route path="/itemDetails/:id">
            <Header></Header>
            <SingliCardDetails cart={cart} cartHandler={cartHandler}></SingliCardDetails>
            <Footer></Footer>
          </Route>
          <Route path="/checkout">
            <Header cart={cart}></Header>
            <Shipment deliveryDetails={deliveryDetails} deliveryDetailsHandler={deliveryDetailsHandler} cart={cart} clearCart={clearCart} checkOutItemHandler={checkOutItemHandler}></Shipment>
            <Footer></Footer>
          </Route>
          <Route path="/signup">
            <Header></Header>
            <Signup></Signup>
          </Route>
          <Route path="/shipment">
            <Header></Header>
            <Shipment></Shipment>
          </Route>
          <Route path="*">
            <ErrorPage></ErrorPage>
          </Route>
        </Switch>
      </Router>



    </div>

  );
}

export default App;
