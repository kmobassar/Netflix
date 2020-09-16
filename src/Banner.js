import React, { useEffect, useState } from 'react';
import axios from './axios';
import request from './request';
import './Banner.css';
function Banner(){
    const [movies,setMovies]=useState([]);

    useEffect(()=>{
        async function fetchData(){

            const requests= await axios.get(request.fetchNetflixOriginals);
           
            setMovies(requests.data.results[
            Math.floor(Math.random()*requests.data.results.length-1)
                        ]            );
                        return requests;
        }
        fetchData();
    },[]);
    console.log(movies);
    function truncate(str,n){
        return str?.length>n ?str.substr(0,n-1) +"...":str;
    }
    
    return(
       <header className="banner" 
       style={{
       backgroundSize:"cover",
       backgroundImage:`url(
           "https://image.tmdb.org/t/p/original/${movies?.backdrop_path}"
           )`,
           backgroundPosition:"center center",
       }}
       >
           <div className="banner_contents">

               <h1 className="banner_title">
                   {movies?.title || movies?.name ||movies?.original_name}
               </h1>
               <div clas="banner_buttons">
                   <button className="banner_button">Play</button>
                   <button className="banner_button">My List</button>
               </div>
    <h2 className="banner_description"> {truncate(movies?.overview,150)}</h2>
               
               </div>
     <div className="banner--fadebutton"/>

       </header>

    );
}
export default Banner;