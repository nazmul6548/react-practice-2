import { useEffect, useState } from "react";
import Country from "../Country/Country";
import './Countrys.css'


export const Countrys = () => {

    const [countrys,setcountrys] = useState([])
    const [visitedcountry,setvisitedcountry] = useState([]);

    useEffect(() => {
        fetch("https://restcountries.com/v3.1/all")
        .then(res => res.json())
        .then(data => setcountrys(data))
        
    },[]);

    const handlevisitcountry = country => {
        console.log("yyu");
    }
    ;
    console.log(countrys);
  return (
    <div>
        <h1>Countrys length : {countrys.length}</h1>
        <div>
            <h2>Mark visitd countrys</h2>
            <ul>

            </ul>
        </div>
        <div  className="countrys">
        {
            countrys.map(country => <Country key={country.cca3}
                 countrys={country}
                 handlevisitcountry={handlevisitcountry}
                 ></Country>)
        }
        </div>
    </div>
  )
}
export default Countrys;
