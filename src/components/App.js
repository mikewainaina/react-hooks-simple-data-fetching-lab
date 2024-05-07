// create your App component here
// create your App component here
import { useEffect, useState } from "react";
import React from "react";

function App(){
const [image, setImage]=useState(null)
useEffect(() => {
    fetch("https://dog.ceo/api/breeds/image/random")
    .then(res => res.json())
    .then(data => setImage(data.message))

   },);

return (
<div>
      {image ? (
        <img src={image} alt="A Random Dog" />
      ) : (
        <p>Loading...</p>
      )}
    </div>
)
}
export default App;