import React from 'react';
import logo from './logo.svg';
import './App.css';
import 'bootstrap/dist/css/bootstrap.min.css';
import Header from './components/Header/Header';
import Card from './components/Card/Card';
import Footer from './components/Footer/Footer';
import ChooseUs from './components/WhyUs/ChooseUs';

function App() {
  return (
    <div className="App">
      <Header></Header>
      <Card></Card>
      <ChooseUs></ChooseUs>
      <Footer></Footer>
    </div>
  );
}

export default App;
