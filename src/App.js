import './App.css';
import { useState, useEffect } from 'react';
import Header from './Header';
import Meals from './Meals';
import Footer from './Footer';
import AddMeal from './AddMeal';
import SearchMeals from './SearchMeals';
//import apiRequest from './apiRequest';

function App() {
  //const API_URL = 'http://localhost:3001/meals';

//Local Storage Use State
const [meals, setMeals] = useState(JSON.parse(localStorage.getItem('mealList')) || []);

  //const [meals, setMeals] = useState([]);
  const [newFoodName, setNewFoodName] = useState('')
  const [newFoodCarbs, setNewFoodCarbs] = useState('')
  const [newFoodFats, setNewFoodFats] = useState('')
  const [newFoodProtein, setNewFoodProtein] = useState('')
  const [search, setSearch] = useState('');
  //const [fetchError, setFetchError] = useState(null);
  //const [isLoading, setIsLoading] = useState(true);

  //Retrieve from localStorage
  useEffect(() => {
    localStorage.setItem('mealList', JSON.stringify(meals));
  }, [meals]); 

  {/* useEffect(() => {
    const fetchItems = async () => {
      try {
        const response = await fetch(API_URL);
        if (!response.ok) throw Error('Did not receive expected data');
        const listMeals = await response.json();
        setMeals(listMeals)
        setFetchError(null)
      } catch (err){
        setFetchError(err.message)
      } finally {
        setIsLoading(false)
      }
    }
    setTimeout(() => {
      (async () => await fetchItems())();
    }, 2000)
  }, []) */}

  const addFoodItem = async (name, carbs, fats, protein) => {
    const id = meals.length ? meals[meals.length -1].id +1 : 1;
    const myNewFood = { id, name, carbs, fats, protein};
    const listMeals = [...meals, myNewFood];
    setMeals(listMeals);

    {/*const postOptions = {
      method: 'POST',
      headers: {
        'Content-Type' : 'application/json'
      },
      body: JSON.stringify(myNewFood)
    }
    const result = await apiRequest(API_URL, postOptions)
    if(result) setFetchError(result);
  } */}
}
//rest api

  const handleDelete = async (id) =>{
    const listMeals = meals.filter((meal) => meal.id !== id);
    setMeals(listMeals);

    {/* const deleteOptions = { method: 'DELETE' };
    const reqUrl = `${API_URL}/${id}` ;

    const result = await apiRequest(reqUrl, deleteOptions)
  if(result) setFetchError(result); */}
  }

  const handleSubmit = (e) => {
    e.preventDefault();
    if(!newFoodName) return;
    addFoodItem(newFoodName, newFoodCarbs, newFoodFats, newFoodProtein);
    setNewFoodName('');
    setNewFoodCarbs('');
    setNewFoodFats('');
    setNewFoodProtein('');
  }

  const calculateCalories = (carbs, fats, protein) => {
    let totalCals = 0;
    const carboCals = (carbs * 4);
    const fatCals = (fats * 9);
    const proteinCals = (protein * 4);
    totalCals = (carboCals + fatCals + proteinCals);
    return totalCals;
}

  return (

    <div className="App">
    <Header title="Macro Matcher" />
    <AddMeal 
      newFoodName={newFoodName}
      setNewFoodName={setNewFoodName}
      newFoodCarbs={newFoodCarbs}
      setNewFoodCarbs={setNewFoodCarbs}
      newFoodFats={newFoodFats}
      setNewFoodFats={setNewFoodFats}
      newFoodProtein={newFoodProtein}
      setNewFoodProtein={setNewFoodProtein}
      handleSubmit={handleSubmit}
      />
      <SearchMeals 
        search={search}
        setSearch={setSearch}
      />
      <>
      {/* <main>
        {isLoading && <p>Loading Meals...</p>}
        {fetchError && <p style={{ color: "red"}}>{`Error: ${fetchError}`}</p>}
        {!fetchError && !isLoading &&
        */}
      </>
        <Meals 
          meals = {meals.filter(meal => ((meal.name).toLowerCase()).includes
            (search.toLowerCase()))}
          handleDelete = {handleDelete}
          calculateCalories = {calculateCalories}
        />
    <Footer length={meals.length}/>
    </div>

  );
}

export default App;
