import React, { useState, useEffect } from 'react'
import { useParams, Link } from 'react-router-dom'
import { API_ENDPOINT } from './context'

const url1 = "https://upload.wikimedia.org/wikipedia/commons/thumb/6/65/No-Image-Placeholder.svg/832px-No-Image-Placeholder.svg.png"
const SingleMovie = () => {
  const {id }= useParams();
  const [movie, setMovie] = useState([]);
  const[isLoading, setIsLoading] = useState(true);
  const[error, setError] = useState({show:false, message:''})

  const fetchMovie = async (url) =>{

      const response = await fetch(url);
      const data = await response.json();
      if(data.Response==='False'){
 setError({show:true, message:data.Error})
 setIsLoading(false);
      }else{
        setMovie(data);
        setIsLoading(false);
      }

  }

  useEffect(()=>{
    fetchMovie(`${API_ENDPOINT}&i=${id}`)
  },[id])
     
if(isLoading){
  return <div className="loading">

  </div>

}
if(error.show){
  return <div className="page-error">
  <h1>{error.message}</h1>
  <Link to="/" className="btn">Back to Search Movies</Link>
  </div>
}
const {Poster:poster, Title:title, Year:year, Plot:plot } = movie;
  return <div className="single-movie">
    <img src={poster ==='N/A'? url1 : poster} alt={title}/>
    <div className="single-movie-info">
    <h2>{title}</h2>
    <p>{plot}</p>
    <h4>{year}</h4>
    <Link to="/" className="btn">Back to Search Movies</Link>
    </div> 
  </div>
}

export default SingleMovie

// dotted loading animation that didnt work properly
//   return <div class="sk-chase">
//   <div class="sk-chase-dot"></div>
//   <div class="sk-chase-dot"></div>
//   <div class="sk-chase-dot"></div>
//   <div class="sk-chase-dot"></div>
//   <div class="sk-chase-dot"></div>
//   <div class="sk-chase-dot"></div>
// </div>