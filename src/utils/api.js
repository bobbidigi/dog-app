import axios from 'axios'
import {useState, useEffect} from 'react'

// extract this function from lifecycle event since it's used multiple times
export function useDogImages(breed, count) {
    const [images, setImages] = useState([])

    useEffect(() => {
        setImages([])
        axios.get(`https://dog.ceo/api/breed/${breed}/images/random/${count}`)

      .then(result => {
        setImages(result.data.message)
      })
      .catch(error => {
        console.log('error:', error)
      })
    },[breed,count])
    
    return [images, setImages]
  }