import React from 'react'

import MealList from './MealList'

const Meals = ({meals, handleDelete, calculateCalories}) => {
  return (
      <>
          {meals.length ? (
              <MealList 
                meals={meals}
                handleDelete={handleDelete}
                calculateCalories = {calculateCalories}

              />

          ) : (
              <p style={{marginTop: '2rem'}}>No Meals Tracked</p>
          )}

      </>
  )
}

export default Meals