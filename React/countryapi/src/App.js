import SearchBar from "./components/SearchBar";
import CountryCard from "./components/CountryCard";
import { useState } from "react";

function App() {
  const [countryData, setCountryData] = useState('');

  const fetchCountryData = (country) => {
    fetch(`https://restcountries.com/v3/name/${country}`)
      .then((response) => response.json())
      .then((data) => {
        const countryData = data[0];
        const countryObj = {
          name: countryData.name.common,
          area: countryData.area,
          population: countryData.population,
        };
        setCountryData(countryObj);
        console.log(data[0]);
      });

    console.log(`fetchCountryData function is called with ${country}`)
  }

  return (
    <div>
      <CountryCard 
        country={countryData.name} 
        area={countryData.area} 
        population={countryData.population}
      />
      <SearchBar fetchCountryData={fetchCountryData}/>
    </div>
  );
}

export default App;
