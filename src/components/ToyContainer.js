import React from "react";
import ToyCard from "./ToyCard";

function ToyContainer({toys, handleDonate}) {
  return (
    <div id="toy-collection">{toys.map(toy => <ToyCard key={toy.id} toy={toy} handleDonate={handleDonate}/>)}</div>
  );
}

export default ToyContainer;
