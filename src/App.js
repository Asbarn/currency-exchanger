import logo from './logo.svg';
import React, {
  useState, useEffect, useRef,
} from 'react';
import './App.css';
import { Identification, Exchanger, Checkout, History } from "./Components"
import { AttachMoney, AccountBalance } from '@material-ui/icons';
function App() {
  const [user, setUser] = useState({});
  const [openCheckout, setOpenCheckout] = useState(false);
  const [openHistory, setOpenHistory] = useState(false);
  return (
    <div >
      <header><div className="container"> <h2>Currency exchanger   <AccountBalance  style={{color:"white", fontSize: "40", marginTop:"10px",marginLeft:"10px" }} /></h2></div></header>
      <Identification />
      <Exchanger openHistory={openHistory} setOpenHistory={setOpenHistory} openCheckout={openCheckout} setOpenCheckout={setOpenCheckout}/>
      <Checkout  openCheckout={openCheckout} setOpenCheckout={setOpenCheckout}/>
      <History  openHistory={openHistory} setOpenHistory={setOpenHistory}/>
      <footer> <h4>Currency exchanger project of Yaroslav Kobernyk-Berezovsky , BSU Faculty of Radiphysics and Computer Technology, 2020<span>&#174;</span></h4></footer>
    </div>
  );
}

export default App;
