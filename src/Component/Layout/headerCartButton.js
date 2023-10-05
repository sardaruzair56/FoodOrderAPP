import CartIcon from "../Cart/cartIcon";

import classes from './headerCartButton.module.css';
import React from 'react'

const headerCartButton = (props) => {
  return (
    <button className={classes.button}>
        <span className={classes.icon}>
            <CartIcon/>
        </span>
        <span>Your Cart</span>
        <span className={classes.badge}>3</span>
    </button>
  )
}

export default headerCartButton;
