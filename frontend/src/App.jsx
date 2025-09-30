import { useState, useEffect } from 'react'
import reactLogo from './assets/react.svg'
import viteLogo from '/vite.svg'
import './App.css'
import ListOfJokes from './components/listOfJokes.jsx';
import InputNewJokes from './components/InputNewJokes.jsx'
import axios from 'axios';

function App() {

  const  [jokes, setJoke] = useState([])

  const fetchJoke = () => {
    axios.get("/api/jokes")
    .then( Response => 
      setJoke(Response.data
    ))
    .catch(error => console.log(" Error Fetching Joke", error))
  }


  useEffect( () =>  {
    fetchJoke()
  },[])

  return (
    <>
     <ListOfJokes jokes={jokes}/>
      <InputNewJokes onJokeAdded = { fetchJoke} />
    </>
  )
}

export default App


