import React, { Fragment } from "react";
import classes from './header.module.css';
import Image from '../../assets/meals.jpg';
import HeaderCartButton from "./headerCartButton";



const header = (props) => {
  return (
    <Fragment>
        <header className={classes.header}>
            <h1>React Meals</h1>
            <HeaderCartButton onClick={props.onShownCart}/>
            
        </header>
        <div className={classes['main-image']}>
            <img src={Image} alt="A table full of Delicious Food"/>
         </div>
    </Fragment>
  )
}

export default header
