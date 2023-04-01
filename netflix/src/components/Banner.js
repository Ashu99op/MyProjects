import axios from '../services/axios'
import React, { useState,useEffect } from 'react'
import requests from '../services/Requests';

const Banner = () => {
    const [movie,setMovie] = useState([]);

    useEffect(() => {
      async function fetchDeta(){
        const request = await axios.get(requests.fetchNetflixOriginals);
        setMovie(request.data.results[Math.floor(Math.random()*request.data.results.length-1)]);
        return request;
      }
      fetchDeta()
    }, [])


    const truncateString = (string,n)=>{
        return string.length > n ? string.substr(0,n-1) + '...' : string
    }



  return (
    <header className='banner' style={{
        backgroundSize : "cover" ,
        backgroundImage:`url("https://image.tmdb.org/t/p/original/${movie?.backdrop_path}")`,
        backgroundPosition:"center center"
    }}>

    <div className='banner-contents'>
        <h1 className='banner-title'>{movie?.title || movie?.original_name}</h1>
        <div className='banner-btns'>
            <button className='banner-btn'>Play</button>
            <button className='banner-btn'>My List</button>
        </div>
        <h1 className='banner-description'>
            {truncateString(movie?.overview,200)}
        </h1>

        <div className='banner-fadeBottom' />
            
    </div>

    </header>
  )
}

export default Banner