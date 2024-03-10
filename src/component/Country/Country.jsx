
import { useState } from 'react';
import './country.css'
export const Country = ({countrys,handlevisitcountry}) => {
    // console.log(countrys);
    const {name,flags,
        population,maps,area,cca3} = countrys;

const [visited,setvisited] = useState(false)
const btnHandler=() => {
    setvisited(!visited);
    // console.log("ghgf");
}

  return (
    <div className={`countrydes ${visited ? "visit" : "non-visit"}`}>
        <h1 style={{color: visited ? "purple" : "black"}}>Country : {name.common}</h1>
        <h2 style={{color : visited ? "gray" : "black"}}>OfficialName : {name.official}</h2>
        <h3>Population : {population}</h3>
        <h3>Map : {maps.openStreetMaps}</h3>
        <h3>Area : {area}</h3>
        <h3>cca3 : {cca3}</h3>
        <img src={flags.png} alt="" />
        <br />
        <br />
        <button className='btn' onClick={handlevisitcountry}>Mark</button>
        <button className='btn' onClick={btnHandler}>{visited ? "visited" : "going"}</button>
        {visited ? "visited" : "i want to visit"}
    </div>
  )
}
export default Country
