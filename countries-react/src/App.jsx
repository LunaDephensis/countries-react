import { useState } from 'react'
import Navigation from './components/Navigation'
import CountryList from './components/CountryList'

function App() {
  let [isActiveDarkMode, setIsActiveDarkMode] = useState(false);

  function toggleDarkMode() {
    setIsActiveDarkMode(prev => !prev);
  }

  return (
    <div className={`${isActiveDarkMode && "dark"} relative w-full min-h-screen flex justify-center items-center flex-col`}>
      <Navigation onToggleDarkMode={toggleDarkMode}/>
      <CountryList/>
    </div>
  )
}

export default App
