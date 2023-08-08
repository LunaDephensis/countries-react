async function getCountryDetails(name) {
    let res = await fetch(`https://restcountries.com/v3.1/name/${name}`);
    let countryData = await res.json();
    let element = countryData[0];
    return {
      name: element.name.common,
      nativeName: getNativeNames(element.name.nativeName),
      population: element.population || "-",
      region: element.region || "-",
      subregion: element.subregion || "-",
      capital: getCapital(element),
      tld: getTld(element),
      currencies: getCurrencies(element.currencies),
      languages: getLanguages(element),
      border: await getBorders(element.borders),
      flag: element.flags
    }
}

function getNativeNames(natNames) {
    if(!natNames) {
      return ["-"];
    }
    return Object.values(natNames).map((element) => {
      return element.common;
    });
}

function getCapital(element) {
    if(!element.capital) {
      return "-";
    }
    return element.capital[0];
}

function getTld(element) {
    if(!element.tld) {
      return "-";
    }
    return element.tld[0];
}

function getCurrencies(curr) {
    if(!curr) {
      return ["-"];
    }
    return Object.values(curr).map((element) => {
      return element.name;
    });
}

function getLanguages(element) {
    if(!element.languages) {
      return ["-"];
    }
    return Object.values(element.languages);
}

async function getBorders(borderCodes) {
    if(!borderCodes) {
      return ["This country has no border countries."];
    }
    let res = await fetch(`https://restcountries.com/v3.1/alpha?codes=${borderCodes.join()}&fields=name`);
    let bordersData = await res.json();
    return bordersData.map((border) => {
      return border.name.common;
    });
}

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

export {getCountryDetails, getCountries};