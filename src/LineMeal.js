import React from 'react'
import { FaTrashAlt } from 'react-icons/fa'

const LineMeal = ({meal, id, name, carbs, fats, protein, handleDelete, calculateCalories}) => {

  return (
      <li className='item'> 
        <label>Food: {name}</label>
        <br/>
        <label>Carbohydrates: {carbs}g</label>
        <br/>
        <label>Fats: {fats}g</label>
        <br/>
        <label>Protein: {protein}g</label>
        <br/>
        <label>Calories: {calculateCalories(carbs, fats, protein)
}       </label>
    <br />
        <FaTrashAlt 
            onClick={() => handleDelete(id)}
            tabIndex="0"
            aria-label={`Delete ${name}`}
        />
        <br />
        <br />
      </li>
      
  )
  
}

export default LineMeal;