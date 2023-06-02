function CountryDetails() {
    return (
        <main className="relative w-full min-h-screen flex justify-start items-center flex-col bg-lightBg dark:bg-darkBg px-4 pt-28 sm:px-20">
            <button className="relative flex justify-center items-center border-none outline-none rounded py-2 px-6 text-lg font-normal shadow-lg bg-white dark:bg-darkMain text-darkText dark:text-white">
                <span className="relative mr-4">
                    <ion-icon name="arrow-back-sharp"></ion-icon>
                </span>
                Back
            </button>
            <section className="relative w-full flex justify-start items-center flex-col">
                <img src="/flag.png" alt="national flag" />
                <div>
                    <h3>
                        Germany
                    </h3>
                    <ul>
                        <li>Native Name: <span>Asdasd</span></li>
                        <li>Population: <span>123456123</span></li>
                        <li>Region: <span>Europe</span></li>
                        <li>Sub Region: <span>Western Europe</span></li>
                        <li>Capital: <span>Berlin</span></li>
                    </ul>
                    <ul>
                        <li>Top Level Domain: <span>.de</span></li>
                        <li>Currencies: <span>Euro</span></li>
                        <li>Languages: <span>German</span></li>
                    </ul>
                    <div>
                        <h4>Border Countries:</h4>
                        <div>
                            <span>France</span>
                            <span>Poland</span>
                            <span>Switzerland</span>
                            <span>Austria</span>
                            <span>Luxembourg</span>
                            <span>Belgium</span>
                            <span>Netherlands</span>
                            <span>Denmark</span>
                        </div>
                    </div>
                </div>
            </section>
        </main>
    )
}

export default CountryDetails;