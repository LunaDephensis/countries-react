function Country(props) {

    return (
        <div className="relative w-60 h-72 flex justify-start items-start flex-col rounded overflow-hidden shadow-md mb-8 sm:mb-0 cursor-pointer"
            onClick={() => props.getDetails(props.name)}
        >
            <div className="relative w-full h-72 flex justify-center items-center border-b border-solid border-neutral-100 dark:border-slate-800">
                <img className="absolute top-0 left-0 w-full h-full" src={props.flag.png} alt={props.flag.alt}/>
            </div>
            <div className="relative w-full h-full bg-white dark:bg-darkMain p-4 text-darkText dark:text-white flex justify-start items-center flex-col">
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