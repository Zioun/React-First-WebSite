import { useEffect, useState } from "react";
import "./App.css";
import Card from "./Card";

function App() {
  const [photo, setPhoto] = useState([]);
  useEffect(() => {
    fetch("https://jsonplaceholder.typicode.com/photos")
    .then(res => res.json())
    .then(data => setPhoto(data))
  },[])
  console.log(photo)
  return (
    <>
      <h1 className="text-5xl font-bold text-center mt-2">Gallery</h1>
      <hr className="my-5" />
      
      <div className="grid grid-cols-12 gap-y-5">
        {
          photo.map(card => <Card card={card}></Card>)
        }
      </div>
      
    </>
  );
}

export default App;
