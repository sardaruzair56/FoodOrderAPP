import CartIcon from "../Cart/cartIcon";
import { useContext } from "react";
import classes from './headerCartButton.module.css';
import React from 'react';
import cartContext from "../../store/cartContext";

const headerCartButton = (props) => {

const cartCTX=useContext(cartContext);
const numberOfCartItems=cartCTX.item.reduce((curNumber, item)=>{

  return curNumber+item.amount;
},0)

  return (
    <button className={classes.button} onClick={props.onClick}>
        <span className={classes.icon}>
            <CartIcon/>
        </span>
        <span>Your Cart</span>
        <span className={classes.badge}>{numberOfCartItems}</span>
    </button>
  )
}

export default headerCartButton;
