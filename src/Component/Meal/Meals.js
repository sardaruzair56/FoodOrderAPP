import React, { Fragment } from 'react';
import MealsSummary from './mealsSummary';
import AvalaibleMeals from './AvalaibleMeals';

const Meals = () => {
  return (
    <Fragment>
        
        <MealsSummary/>
        <AvalaibleMeals/>

    </Fragment>
  )
}

export default Meals;