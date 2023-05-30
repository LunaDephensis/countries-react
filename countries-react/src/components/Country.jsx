function Country(props) {
    return (
        <div className="relative w-60 h-72 flex justify-start items-start flex-col rounded overflow-hidden shadow-md mb-8 sm:mb-0">
            <div className="relative w-full h-60 flex justify-center items-center">
                <img className="absolute top-0 left-0 w-full h-full" src={props.flag.png} alt={props.flag.alt}/>
            </div>
            <div className="relative w-full h-full bg-white dark:bg-darkBg p-4 text-darkText dark:text-white flex justify-start items-center flex-col">
                <h3 className="w-full text-base font-bold mb-3 text-darkText dark:text-white">
                    {props.name}
                </h3>
                <ul className="relative w-full flex justify-center items-start flex-col text-darkText dark:text-white">
                    <li className="countryInfo">Population: <span>{props.population}</span></li>
                    <li className="countryInfo">Region: <span>{props.region}</span></li>
                    <li className="countryInfo">Capital: <span>{props.capital}</span></li>
                </ul>
            </div>
        </div>
    )   
}

export default Country;