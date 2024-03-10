
import './country.css'
export const Country = ({countrys}) => {
    // console.log(countrys);
    const {name,flags} = countrys;
  return (
    <div className="countrydes">
        <h1>Country : {name.common}</h1>
        <h2>OfficialName : {name.official}</h2>
        <img src={flags.png} alt="" />
    </div>
  )
}
export default Country
