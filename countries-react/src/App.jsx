import { useState } from 'react'
import Navigation from './components/Navigation'
import CountryList from './components/CountryList'
import CountryDetails from './components/CountryDetails';

function App() {
  let [isActiveDarkMode, setIsActiveDarkMode] = useState(false);
  let [actualCountryDetails, setActualCountryDetails] = useState(null);
  function toggleDarkMode() {
    setIsActiveDarkMode(prev => !prev);
  }

  async function getCountryDetails(name) {
    let res = await fetch(`https://restcountries.com/v3.1/name/${name}`);
    let countryData = await res.json();
    let element = countryData[0];
    return {
      name: element.name.common,
      nativeName: getNativeNames(element.name.nativeName),
      population: element.population,
      region: element.region,
      subregion: element.subregion,
      capital: element.capital[0],
      tld: element.tld[0],
      currencies: getCurrencies(element.currencies),
      languages: Object.values(element.languages),
      border: await getBorders(element.borders),
      flag: element.flags
    }
  }
  
  function getNativeNames(natNames) {
    return Object.values(natNames).map((element) => {
      return element.common;
    });
  }

  function getCurrencies(curr) {
    return Object.values(curr).map((element) => {
      return element.name;
    });
  }

  async function chooseActualCountry(name) {
    let country = await getCountryDetails(name);
    setActualCountryDetails(country);
  }

   async function getBorders(borderCodes) {
    if(!borderCodes) {
      return ["This country has no borders."];
    }
    let res = await fetch(`https://restcountries.com/v3.1/alpha?codes=${borderCodes.join()}&fields=name`);
    let bordersData = await res.json();
    return bordersData.map((border) => {
      return border.name.common;
    });
  }

  function backToList() {
    setActualCountryDetails(null);
  }

  return (
    <div className={`${isActiveDarkMode && "dark"} relative w-full min-h-screen flex justify-center items-center flex-col`}>
      <Navigation onToggleDarkMode={toggleDarkMode}/>
      {actualCountryDetails !== null ? <CountryDetails {...actualCountryDetails} onBackToList={backToList}/> : <CountryList getDetails={chooseActualCountry}/>}
    </div>
  )
}

export default App
