import { useEffect, useState } from "react";
import Country from "../Country/Country";


export const Countrys = () => {

    const [countrys,setcountrys] = useState([])

    useEffect(() => {
        fetch("https://restcountries.com/v3.1/all")
        .then(res => res.json())
        .then(data => setcountrys(data))
        
    },[]);
    console.log(countrys);
  return (
    <div>
        <h1>Countrys length : {countrys.length}</h1>
        {
            countrys.map(country => <Country key={country.cca3} countrys={country}></Country>)
        }
    </div>
  )
}
export default Countrys;
