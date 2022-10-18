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
          flag: countryData.flags[1],
          name: countryData.name.common,
          capital: countryData.capital,
          area: countryData.area,
          population: countryData.population,
          currency: countryData.currencies[0],
          region: countryData.region,
        };
        setCountryData(countryObj);
        console.log(data[0]);
      });

    console.log(`fetchCountryData function is called with ${country}`)
  }

  return (
    <div>
      <CountryCard
        flag={countryData.flag}
        country={countryData.name} 
        capital={countryData.capital}
        area={countryData.area}
        population={countryData.population}
        currency={countryData.currency}
        region={countryData.region}
      />
      <SearchBar fetchCountryData={fetchCountryData}/>
    </div>
  );
}

export default App;
