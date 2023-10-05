import React, { useEffect, useState } from 'react';
import axios from "axios"

function Randomuser() {
    const [temp,setTemp] = useState('');

    useEffect(() => {
        getRandomData();
    },[])

    function getRandomData()
    {
        // fetch("https://randomuser.me/api")
        // .then((response) => {
        //     // console.log(response);
        //     return response.json();
        // })
        // .then((result) => 
        // {
        //     // console.log(result.results[0].picture.large);
        //     setTemp(result.results[0].picture.large);
        // })

        axios.get("https://randomuser.me/api")
        .then((response) => {
            console.log(response.data.results[0].picture.large);
            setTemp(response.data.results[0].picture.large);
        })
    }
    
    function randomImage()
    {
        axios.get("https://randomuser.me/api")
        .then((response) => {
            console.log(response.data.results[0].picture.large);
            setTemp(response.data.results[0].picture.large);
        })
    }



  return (
    <>
    <div className="wrapper">
        <div className="box">
            <img src={temp} alt="Random image" />
            
            {/* random image on button click */}
            {/* <button onClick={randomImage}>Random Image</button> */}
            
        </div>
    </div>
    </>
  )
}

export default Randomuser