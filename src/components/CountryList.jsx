import { useState, useEffect } from 'react'
import Filter from './Filter'
import Country from './Country'
import { getCountries } from '../api/countries';

function CountryList(props) {
    let [allCountries, setAllCountries] = useState([]);
    let [countries, setCountries] = useState([]);
    let [regions, setRegions] = useState([]);

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
                return <Country key={i} getDetails={props.getDetails} {...country} />
                })
            }
            </section>
      </main>
    )
}

export default CountryList;