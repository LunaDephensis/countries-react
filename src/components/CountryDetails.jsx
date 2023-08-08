function CountryDetails(props) {
    return (
        <main className="relative w-full min-h-screen flex justify-start items-start flex-col bg-lightBg dark:bg-darkBg px-4 pt-28 sm:px-20">
            <button className="relative flex justify-center items-center border-none outline-none rounded py-2 px-6 mb-12 text-lg font-normal shadow-lg bg-white dark:bg-darkMain text-darkText dark:text-white"
                    onClick={props.onBackToList}
            >
                <span className="relative mr-4">
                    <ion-icon name="arrow-back-sharp"></ion-icon>
                </span>
                Back
            </button>
            <section className="relative w-full flex justify-start items-start flex-col sm:justify-between sm:flex-row">
                <img className="relative w-full sm:max-w-[40%] sm:max-h-[350px] mb-8 sm:mb-0"
                    src={props.flag.png} alt={props.flag.alt}
                />
                <div className="relative w-full sm:w-[50%] flex justify-start items-start flex-col text-darkText dark:text-white">
                    <h3 className="relative w-full text-lg font-extrabold mb-6">
                        {props.name}
                    </h3>
                    <div className="relative w-full flex justify-start items-start flex-col sm:flex-row">
                        <ul className="relative w-full mb-8">
                            <li className="countryInfo">Native Name: <span>{props.nativeName.join(', ')}</span></li>
                            <li className="countryInfo">Population: <span>{props.population}</span></li>
                            <li className="countryInfo">Region: <span>{props.region}</span></li>
                            <li className="countryInfo">Sub Region: <span>{props.subregion}</span></li>
                            <li className="countryInfo">Capital: <span>{props.capital}</span></li>
                        </ul>
                        <ul className="relative w-full mb-8">
                            <li className="countryInfo">Top Level Domain: <span>{props.tld}</span></li>
                            <li className="countryInfo">Currencies: <span>{props.currencies.join(', ')}</span></li>
                            <li className="countryInfo">Languages: <span>{props.languages.join(', ')}</span></li>
                        </ul>
                    </div>
                    <div>
                        <h4 className="tect-base font-bold mb-4">Border Countries:</h4>
                        <div className="relative w-full flex justify-start items-start flex-wrap gap-x-2 mb-4 sm:mb-0">
                            {
                                props.border.map((borderCountry, i) => {
                                    return (<span key={i} className="relative flex justify-center items-center py-2 px-4 mb-8 text-base font-light border-[0.5px] border-solid border-[rgba(0,0,0,0.1)] shadow-md rounded cursor-pointer bg-white dark:bg-darkMain text-darkText dark:text-white"
                                                onClick={() => props.getDetails(borderCountry)}
                                            >
                                                {borderCountry}
                                            </span>);
                                })
                            }
                        </div>
                    </div>
                </div>
            </section>
        </main>
    )
}

export default CountryDetails;