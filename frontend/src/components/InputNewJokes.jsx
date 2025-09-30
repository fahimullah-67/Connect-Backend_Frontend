import { useState } from 'react'
import axios from 'axios';


function InputNewJokes( {onJokeAdded}) {

  const [newTitle, setNewTitle] = useState("");
  const [newJoke, setNewJoke] = useState("");

  

  const handleSubmit = (e) => {
    e.preventDefault();
    axios.post(
      "/api/jokes",
      {
        joke: newJoke,
        tittle: newTitle
      }
     )
      .then(response => {
        console.log("Joke added:", response.data);
        setNewJoke("");
        setNewTitle("");
        if(onJokeAdded) onJokeAdded()
      })
      .catch(error => {
        console.error("Error adding joke:", error);
      });
  };

  return (
    <>
      <h1>Front And Backend Integration</h1>
      <h2>Joke API Handling </h2>
      <h4>Add New jokes </h4>

      <input 
      type="text" 
      placeholder='write title of joke...'
      value={newTitle}
      onChange={ (e) => setNewTitle(e.target.value)}
      />
      <br />
      <textarea
       type="text" 
      placeholder='write title of joke...'
      value={newJoke}
      onChange={ (e) => setNewJoke(e.target.value)}
      />
      <br />
      <button onClick={handleSubmit}>Add New Joke</button>
    
    
    </>
  )
}

export default InputNewJokes