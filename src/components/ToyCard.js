import React, { useState } from "react";

function ToyCard({toy: { id, name, image, likes }, handleDonate}) {
  const [numLikes, setNumLikes] = useState(likes)

  const handleLikes = () => {
    fetch(`http://localhost:3001/toys/${id}`, {
      method: 'PATCH',
      headers: {'content-Type': 'application/json'},
      body: JSON.stringify({id, name, image, likes: numLikes + 1})
    })
    .then(() => setNumLikes(numLikes + 1))
  }
  return (
    <div className="card">
      <h2>{name}</h2>
      <img
        src={image}
        alt={name}
        className="toy-avatar"
      />
      <p>{numLikes} Likes </p>
      <button className="like-btn" onClick={() => handleLikes()}>Like {"<3"}</button>
      <button className="del-btn" onClick={() => handleDonate(id)}>Donate to GoodWill</button>
    </div>
  );
}

export default ToyCard;
