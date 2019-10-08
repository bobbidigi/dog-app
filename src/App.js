import "./App.css";
import React, {useEffect, useState} from 'react';
import axios from 'axios';

function App(props){


  const [breed, setBreed] = useState('husky')
  const [images, setImages] = useState([])
  useEffect(() =>{
    setImages([])
    fetchDogImages()
  },[breed])

  const handleChange = (event) => {
    setBreed(event.target.value)
  }

  // extract this function from lifecycle event since it's used multiple times
  const fetchDogImages = () => {
    axios.get(`https://dog.ceo/api/breed/${breed}/images`)
      .then(result => {
        setImages(result.data.message)
      })
      .catch(error => {
        console.log('error:', error)
      })
  }


  return (
    <>
      <h1>The Dog Website</h1>

      <select value={breed} onChange={handleChange}>
        <option value="husky">Husky</option>
        <option value="beagle">Beagle</option>
        <option value="corgi">Corgi</option>
        <option value="boxer">Boxer</option>
      </select>

      <div>
        {images.map((image, index) => (
          <img key={index} src={image} alt="Dog" />
        ))}
      </div>
    </>
  )
}

export default App;