import { useState } from 'react'
import Navigation from './components/Navigation'
import CountryList from './components/CountryList'
import CountryDetails from './components/CountryDetails';

function App() {
  let [isActiveDarkMode, setIsActiveDarkMode] = useState(false);
  let [isShownDetails, setIsShownDetails] = useState(false);

  function toggleDarkMode() {
    setIsActiveDarkMode(prev => !prev);
  }

  function toggleCountryDetails() {
    setIsShownDetails(prev => !prev);
  }

  async function getCountryDetails(name) {
    let res = await fetch(`https://restcountries.com/v3.1/name/${name}`);
    let countryData = await res.json();
    return countryData.map((element) => {
      return {
        name: element.name.common,
        nativeName: getNativeNames(element.name.nativeName),
        population: element.population,
        region: element.region,
        subregion: element.subregion,
        capital: element.capital[0],
        tld: element.tld[0],
        currencies: getCurrencies(element.currencies),
        languages: getLanguages(element.languages),
        border: getBorders(element.borders)
      }
    });
  }

  function getNativeNames(natNameObj) {
    let nativeNames = [];
    for( let nativeName of natNameObj ) {
      nativeNames.push(nativeName.common);
    }
    return nativeNames;
  }

  function getCurrencies(currObj) {
    let currencies = [];
    for ( let curr of currObj ) {
      currencies.push(curr.name);
    }
    return currencies;
  }

  function getLanguages(langObj) {
    let languages = [];
    for ( let lang of langObj ) {
      languages.push(lang);
    }
    return languages;
  }

   async function getBorders(borderCodes) {
    let res = await fetch(`https://restcountries.com/v3.1/alpha?codes=${borderCodes.join()}&fields=name`);
    let bordersData = await res.json();
    return bordersData.map((border) => {
      return border.name.common;
    });
  }

  return (
    <div className={`${isActiveDarkMode && "dark"} relative w-full min-h-screen flex justify-center items-center flex-col`}>
      <Navigation onToggleDarkMode={toggleDarkMode}/>
      {isShownDetails ? <CountryDetails onToggleDetails={toggleCountryDetails}/> : <CountryList onToggleDetails={toggleCountryDetails}/>}
      <CountryList/>
    </div>
  )
}

export default App
