import React from 'react'
import { useGlobalContext } from './context'
import { Link } from 'react-router-dom'


const url = "https://upload.wikimedia.org/wikipedia/commons/thumb/6/65/No-Image-Placeholder.svg/832px-No-Image-Placeholder.svg.png"

const Movies = () => {
  const {movies, isLoading} = useGlobalContext();
  if(isLoading){
    return <div className="loading"></div>

  }

  return <div className="movies">
    {movies.map((movie)=>{
      const {imdbID:id, Poster:poster, Title:title, Year:year} = movie;
      return <Link to= {`/movies/${id}`} key={id} className="movie">
          <div>
            <img className="image-movie" src={poster === 'N/A'? url: poster} alt={title}/>
            <div className="movie-info">
              <h4>{title}</h4>
              <p>{year}</p>
            </div>

          </div> 

      </Link>
    })}
  </div>
}

export default Movies

// dotted loading animation that didnt work
  //   return <div class="sk-chase">
  //   <div class="sk-chase-dot"></div>
  //   <div class="sk-chase-dot"></div>
  //   <div class="sk-chase-dot"></div>
  //   <div class="sk-chase-dot"></div>
  //   <div class="sk-chase-dot"></div>
  //   <div class="sk-chase-dot"></div>
  // </div>