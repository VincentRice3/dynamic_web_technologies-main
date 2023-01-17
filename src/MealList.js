import React from 'react'

import LineMeal from './LineMeal'

const MealList = ({meals, handleDelete,calculateCalories}) => {
  return (
      <ul>
          {meals.map((meal) =>(
            <LineMeal 
                id={meal.id}
                name={meal.name}
                carbs={meal.carbs}
                fats={meal.fats}
                protein={meal.protein}
                handleDelete={handleDelete}
                calculateCalories = {calculateCalories}

            />
          ))}
      </ul>
  )
}

export default MealList