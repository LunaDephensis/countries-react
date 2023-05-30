import { useState, useEffect } from 'react'
import Navigation from './components/Navigation'
import Filter from './components/Filter'
import Country from './components/Country'

function App() {
  let [countries, setCountries] = useState([]);

  async function getCountries() {
    let res = await fetch("https://restcountries.com/v3.1/all?fields=name,flags,region,capital,population");
    let countriesData = await res.json();
    return countriesData.map((element) => {
      return {
        name: element.name.common,
        flag: element.flags,
        population: element.population,
        region: element.region,
        capital: element.capital[0]
      }});
  }

  useEffect(() => {
    getCountries().then((data) => {
      setCountries(data);
    });
  }, []);

  return (
    <div className='relative w-full min-h-screen flex justify-center items-center flex-col'>
      <Navigation/>
      <main className='relative w-full min-h-screen flex justify-start items-center flex-col bg-lightBg dark:bg-darkBg px-4 pt-28 sm:px-20'>
        <Filter/>
        <section className='relative w-full h-auto flex justify-center items-center flex-col sm:grid sm:grid-cols-4 sm:gap-10 py-12'>
          {
            countries.map((country, i) => {
              return <Country key={i} {...country}/>
            })
          }
        </section>
      </main>
    </div>
  )
}

export default App
