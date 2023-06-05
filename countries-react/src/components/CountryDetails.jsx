function CountryDetails() {
    let borderCountries = ["France", "Belgium", "Switzerland", "Denmark", "Poland", "Austria", "Luxembourg", "Netherlands"];

    return (
        <main className="relative w-full min-h-screen flex justify-start items-center flex-col bg-lightBg dark:bg-darkBg px-4 pt-28 sm:px-20">
            <button className="relative flex justify-center items-center border-none outline-none rounded py-2 px-6 text-lg font-normal shadow-lg bg-white dark:bg-darkMain text-darkText dark:text-white">
                <span className="relative mr-4">
                    <ion-icon name="arrow-back-sharp"></ion-icon>
                </span>
                Back
            </button>
            <section className="relative w-full flex justify-start items-center flex-col px-6 sm:justify-between sm:flex-row sm:px-8">
                <img className="relative w-full"
                    src="/flag.png" alt="national flag"
                />
                <div className="relative w-full sm:w-[50%] flex justify-start items-start flex-col text-darkText dark:text-white">
                    <h3 className="relative w-full text-lg font-bold mb-12">
                        Germany
                    </h3>
                    <ul className="relative w-full mb-12">
                        <li className="countryInfo">Native Name: <span>Asdasd</span></li>
                        <li className="countryInfo">Population: <span>123456123</span></li>
                        <li className="countryInfo">Region: <span>Europe</span></li>
                        <li className="countryInfo">Sub Region: <span>Western Europe</span></li>
                        <li className="countryInfo">Capital: <span>Berlin</span></li>
                    </ul>
                    <ul className="relative w-full mb-12">
                        <li className="countryInfo">Top Level Domain: <span>.de</span></li>
                        <li className="countryInfo">Currencies: <span>Euro</span></li>
                        <li className="countryInfo">Languages: <span>German</span></li>
                    </ul>
                    <div>
                        <h4 className="tect-base font-bold">Border Countries:</h4>
                        <div>
                            {
                                borderCountries.map((borderCountry, i) => {
                                    return (<span key={i} className="relative flex justify-center items-center py-2 px-6 text-base font-light border-[0.5px] border-solid border-[rgba(0,0,0,0.1)] shadow-md rounded bg-white dark:bg-darkMain text-darkText dark:text-white">
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