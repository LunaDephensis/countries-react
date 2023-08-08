import { useState } from 'react'
import Navigation from './components/Navigation'
import CountryList from './components/CountryList'
import CountryDetails from './components/CountryDetails';
import { getCountryDetails } from './api/countries';

function App() {
  let [isActiveDarkMode, setIsActiveDarkMode] = useState(false);
  let [actualCountryDetails, setActualCountryDetails] = useState(null);
  
  function toggleDarkMode() {
    setIsActiveDarkMode(prev => !prev);
  }

  async function chooseActualCountry(name) {
    let country = await getCountryDetails(name);
    setActualCountryDetails(country);
  }

  function backToList() {
    setActualCountryDetails(null);
  }

  return (
    <div className={`${isActiveDarkMode && "dark"} relative w-full min-h-screen flex justify-center items-center flex-col`}>
      <Navigation onToggleDarkMode={toggleDarkMode}/>
      {actualCountryDetails !== null ? <CountryDetails {...actualCountryDetails} onBackToList={backToList} getDetails={chooseActualCountry}/> : <CountryList getDetails={chooseActualCountry}/>}
    </div>
  )
}

export default App
