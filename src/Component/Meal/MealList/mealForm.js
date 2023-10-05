import React from 'react';
import classes from './mealForm.module.css';
import Input from '../../UI/Input';


const mealForm = (props) => {
  return (
    <form className={classes.form}>
        <Input label="Amount" input={{

          id:"amount_"+props.id,
          type:'number',
          min:1,
          max:5,
          step:1,
          defaultValue:1
        }}/>
        <button>+ ADD</button>
      
    </form>
  )
}

export default mealForm
