import SearchBar from "./components/SearchBar";
import CountryCard from "./components/CountryCard";
import { useState } from "react";

function App() {
  const [countryData, setCountryData] = useState(null);

  const fetchCountryData = (country) => {
    fetch(`https://restcountries.com/v3/name/${country}`)
      .then((response) => response.json())
      .then((data) => {
        const countryData = data[0];
        const countryObj = {

        };
        setCountryData(countryObj);
        console.log(data[0]);
      });

    console.log(`fetchCountryData function is called with ${country}`)
  }

  return (
    <div>
      <CountryCard 
        country={"something"} 
        area={"something"} 
        population={"something"}
      />
      <SearchBar fetchCountryData={fetchCountryData}/>
    </div>
  );
}

export default App;
