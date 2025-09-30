import React from 'react'
import { useState, useEffect } from 'react'
import axios from 'axios'
function ListOfJokes( {jokes}) {

    //  const [jokes, setJokes] = useState([])

  // useEffect( () => {
  //   axios.get("/api/jokes")
  //   .then(
  //     response => {
  //       setJokes(response.data)
  //     }
  //   )
  //   .catch(error =>  {
  //     console.log("Error fetching jokes:", error)
  //   })
  // }, [jokes])
  return (
    <>
        <h1>Front And Backend Integration</h1>
      <h2>Joke API Handling </h2>
      <h4>Total number of jokes: {jokes.length} </h4>

      <div className='jokes'>
        {
          jokes.map( (joke, index) => (
            <div key={joke.id}>
              <h3>{joke.tittle}</h3>
              <p>{joke.joke}</p>
            </div>
          ))
        }

      </div>

    </>
  )
}

 export default ListOfJokes