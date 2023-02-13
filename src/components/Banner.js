import React,{useState,useEffect} from 'react'
import instance from '../baseUrl'
import './Banner.css'

function Banner({fetchUrl}) {
    const [movie,setMovies]=useState([])

    //create a function
    async function fetchData(){
        const result = await instance.get(fetchUrl)        // instance is from baseUrl.js
        console.log(result);
        console.log(result.data.results);                  // array of data
        setMovies(result.data.results[Math.floor(Math.random()*result.data.results.length-1)])
    }

    useEffect(()=>{
        fetchData()                 // objects
    },[])

    const base_url = "https://image.tmdb.org/t/p/original/";

    function truncate(str,n){
        return str?.length>n?str.substring(0,n-1)+"...":str;
    }

  return (
    <div
    className='banner'
    style={{backgroundImage:`url(${base_url}${movie.backdrop_path})`,
    backgroundSize:'cover',
    // backgroundPosition:'center'
    }}
    >
       <div className='banner-content'>
        <h1 className='banner-title'>{movie.name}</h1>
        <h3 className='banner-des'>{truncate(movie.overview,170)}</h3>
        </div> 
    </div>
  )
}

export default Banner