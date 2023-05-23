function Filtration() {
    let regions = ["Africa", "America", "Asia", "Europe", "Oceania"];

    return (
        <div className="relative w-full flex justify-start sm:justify-between items-start flex-col sm:flex-row">
            <div className="relative flex justify-start items-center w-full sm:max-w-sm h-12 bg-white dark:bg-darkMain px-8 rounded-md shadow-md">
                <span className="relative text-2xl text-lightPlaceholder dark:text-white mr-8">
                    <ion-icon name="search"></ion-icon>
                </span>
                <input type="text" placeholder="Search for a country..."
                        className="relative w-full bg-white text-base text-darkText dark:text-white placeholder:text-lightPlaceholder dark:placeholder:text-white placeholder:font-light font-normal outline-none border-none"
                />
            </div>
            <div className="relative w-48 h-12 flex justify-center items-center flex-col bg-white dark:bg-darkMain rounded-md shadow-md cursor-pointer">
                <h4 className="text-base font-normal text-darkText dark:text-white flex justify-between items-center px-8">
                    Filter by Region
                    <span className="text-base text-darkText dark:text-white">
                        <ion-icon name="chevron-down"></ion-icon>
                    </span>
                </h4>
                <ul className="absolute -top-2 left-0 w-full h-auto bg-white dark:bg-darkMain rounded-md shadow-md p-8">
                    {
                        regions.map((region, i) => {
                            return (<li key={i}
                                        className="relative w-full h-8 flex justify-start items-center px-8 text-base text-darkText dark:text-white cursor-pointer"
                                    >
                                    {region}
                                    </li>)
                        })
                    }
                </ul>
            </div>
        </div>
    )
}

export default Filtration;