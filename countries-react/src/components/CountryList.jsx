import { useState, useEffect } from 'react'
import Filter from './Filter'
import Country from './Country'

function CountryList() {
    let [allCountries, setAllCountries] = useState([]);
    let [countries, setCountries] = useState([]);
    let [regions, setRegions] = useState([]);

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
          }
        });
      }
    
      useEffect(() => {
        getCountries().then((data) => {
          setAllCountries(data);
          setCountries(data);
          let regions = new Set();
          data.forEach((country) => {
            regions.add(country.region);
          });
          setRegions(Array.from(regions).sort());
        });
      }, []);
    
    
      function getCountriesByRegion(region) {
        let regionalCountries = allCountries.filter((country) => {
          return country.region === region;
        });
        setCountries(regionalCountries);
      }

      function searchCountry(value) {
        if(value.length !== '') {
          let searchResult = allCountries.filter((country) => {
            return country.name.toLowerCase().includes(value.toLowerCase());
          });
          setCountries(searchResult);
        }
        else {
          setCountries(allCountries);
        }
      }

    return (
        <main className='relative w-full min-h-screen flex justify-start items-center flex-col bg-lightBg dark:bg-darkBg px-4 pt-28 sm:px-20'>
            <Filter onSelectRegion={getCountriesByRegion} regions={regions} onSearch={searchCountry}/>
            <section className='relative w-full h-auto flex justify-center items-center flex-col sm:grid sm:grid-cols-4 sm:gap-10 py-12'>
            {
                countries.map((country, i) => {
                return <Country key={i} {...country}/>
                })
            }
            </section>
      </main>
    )
}

export default CountryList;