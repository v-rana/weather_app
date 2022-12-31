import React, { useEffect, useState } from "react";
import "./css/style.css";


const Tempapp = () => {
    const [city,setCity] = useState(null);
    const [search , setSearch ] = useState("");
    const [w,setW] = useState(null);
    useEffect (() =>{
    
        const fetchApi = async() => {
            const url = `https://api.openweathermap.org/data/2.5/weather?q=${search}&units=metric&appid=fc8d379b4255ecc63be81500ec1811d0`;
            const response = await fetch(url);
            const resjson  = await response.json();
            //console.log(resjson)
            setCity(resjson.main)
            setW(resjson.weather[0])
        }
        fetchApi();
    },[search])

    
    return(
        <>
          <div className="box">
              
              <div className="inputData">
                 <input type="search"
                 placeholder="Enter city"
                 className="inputField"
                 defaultValue={""}
                 onChange={(event) => { setSearch(event.target.value)
                }} />
              </div>
                {!city ? (<p className="Errormessage">Data Not Found</p>)
                     : <div>
                        <div>
                        <br />
                        <div className="iconw">
                        <i className="fa-solid fa-temperature-half"></i> {search}
                        </div>
                        
                        <h2 className= "temp">{city.temp}° C</h2>
                        <h3 className= "temp-min-max">Min: {city.temp_min}° C | Max: {city.temp_max}° C</h3>
                        <h3>env: {w.main}</h3>
                        </div>

                        <div className="wave-one"></div> 
                        <div className="wave-two"></div> 
                     </div> 
                }

                       
           </div>

        </>
    )
}
export default Tempapp;