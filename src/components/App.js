import React, { useState, useEffect } from "react";

import Header from "./Header";
import ToyForm from "./ToyForm";
import ToyContainer from "./ToyContainer";

function App() {
  const [showForm, setShowForm] = useState(false);
  const [toys, setToys] = useState([])
  
  const handleDonate = (toyId) => {
    fetch(`http://localhost:3001/toys/${toyId}`, {
      method: 'DELETE',
      headers: {'content-Type': 'application/json'},
    })
    .then(() => setToys(toys.filter(toy => toy.id !== toyId))) 
  }

  const handleForm = (newToy) => {
    fetch("http://localhost:3001/toys", {
      method: 'POST',
      headers: {'content-Type': 'application/json'},
      body: JSON.stringify(newToy)
    })
    .then(() => setToys([...toys, newToy]))
  }

  useEffect(() => {
    fetch("http://localhost:3001/toys")
    .then(r => r.json())
    .then(data => setToys(data))
  }, [])

  function handleClick() {
    setShowForm((showForm) => !showForm);
  }

  return (
    <>
      <Header />
      {showForm ? <ToyForm handleForm={handleForm} /> : null}
      <div className="buttonContainer">
        <button onClick={handleClick}>Add a Toy</button>
      </div>
      <ToyContainer toys={toys} handleDonate={handleDonate} />
    </>
  );
}

export default App;
