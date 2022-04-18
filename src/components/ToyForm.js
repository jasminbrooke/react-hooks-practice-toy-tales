import React, { useState } from "react";

function ToyForm({handleForm}) {
  const [name, setName] = useState('')
  const [image, setImage] = useState('')

  const handleSubmit = (e) => {
    e.preventDefault();
    handleForm({name, image, likes: 0})
  }

  return (
    <div className="container">
      <form className="add-toy-form" onSubmit={(e) => handleSubmit(e)}>
        <h3>Create a toy!</h3>
        <input
          type="text"
          name="name"
          placeholder="Enter a toy's name..."
          className="input-text"
          onChange={(e) => setName(e.target.value)}
          />
        <br />
        <input
          type="text"
          name="image"
          placeholder="Enter a toy's image URL..."
          className="input-text"
          onChange={(e) => setImage(e.target.value)}
        />
        <br />
        <input
          type="submit"
          name="submit"
          value="Create New Toy"
          className="submit"
        />
      </form>
    </div>
  );
}

export default ToyForm;
