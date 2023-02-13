import React,{useState,useEffect} from 'react'
import instance from '../baseUrl'
import './Row.css'

function Row({isLargeRow,title,fetchUrl}) {

    const base_url = "https://image.tmdb.org/t/p/original/";


    //set movies state
    const [movies,setMovies]=useState([])

    //create a function
    async function fetchData(){
        const result = await instance.get(fetchUrl)        // instance is from baseUrl.js
        console.log(result);
        console.log(result.data.results);                  // array of data
        setMovies(result.data.results)
    }

    useEffect(()=>{
        fetchData()                 // objects
    },[])

  return (
    <div className='row'>
        <h1>{title}</h1>
        <div className='movies'>
            {
                movies.map(movie=>(
                    <img className='movie' src={`${base_url}${isLargeRow?movie.poster_path:movie.backdrop_path}`} alt={movie.name}/>
                ))
            }
        </div>
    </div>
  )
}


export default Row


// we get images from 2 paths. One is poster_path and the other one is backdrop_path
// for netflixoriginals we are using posterpath. For the rest backdroppath
// to get images , we have to use the base url . followed by either one of the above paths