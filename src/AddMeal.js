import React from 'react'
import { FaPlus } from 'react-icons/fa'
import { useRef } from 'react'

const AddMeal = ({newFoodName, 
                setNewFoodName, 
                newFoodCarbs, 
                setNewFoodCarbs, 
                newFoodFats, 
                setNewFoodFats, 
                newFoodProtein, 
                setNewFoodProtein, 
                handleSubmit}) => {
    const inputRef = useRef();
  return (
      <form className='addForm' onSubmit={handleSubmit}>
          <label htmlFor="addMeal">Add Food: </label>
          <input 
            autoFocus
            ref={inputRef}
            id="addMeal"
            type="text" 
            placeholder='Name'
            required
            value={newFoodName}
            onChange={(e) => setNewFoodName(e.target.value)}
            />
            <input 
            autoFocus
            id="addMeal"
            type="number" 
            placeholder='Carbs'
            required
            value={newFoodCarbs}
            onChange={(e) => setNewFoodCarbs(e.target.value)}
            />
                      <input 
            autoFocus
            id="addMeal"
            type="number" 
            placeholder='Fats'
            required
            value={newFoodFats}
            onChange={(e) => setNewFoodFats(e.target.value)}
            />
        <input 
            autoFocus
            id="addMeal"
            type="number" 
            placeholder='Protein'
            required
            value={newFoodProtein}
            onChange={(e) => setNewFoodProtein(e.target.value)}
            />

            <button
            type='submit'
            aria-label='Add Item'
            onClick={() => inputRef.current.focus()}
            >
            <FaPlus />
        </button>


      </form>
  )
}

export default AddMeal