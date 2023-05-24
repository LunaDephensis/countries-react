import { useState } from 'react'

function Filter() {
    let regions = ["Africa", "America", "Asia", "Europe", "Oceania"];
    let [isActiveDropDown, setIsActiveDropDown] = useState(false);
    let [isRegionChoosed, setIsRegionChoosed] = useState(false);
    let [actualRegion, setActualRegion] = useState(null);

    function toggleDropDown() {
        setIsActiveDropDown(prev => !prev);
    }

    function chooseCountry(index) {
        setActualRegion(regions[index]);
        setIsRegionChoosed(true);
        toggleDropDown();
    }

    return (
        <div className="relative w-full flex justify-start sm:justify-between items-start flex-col sm:flex-row">
            <div className="relative flex justify-start items-center w-full sm:max-w-sm h-12 bg-white dark:bg-darkMain px-8 mb-10 sm:mb-0 rounded-md shadow-md">
                <span className="relative flex justify-center items-center text-lg text-lightPlaceholder dark:text-white mr-8">
                    <ion-icon name="search"></ion-icon>
                </span>
                <input type="text" placeholder="Search for a country..."
                        className="relative w-full bg-transparent text-base text-darkText dark:text-white placeholder:text-lightPlaceholder dark:placeholder:text-white placeholder:font-light font-normal outline-none border-none"
                />
            </div>
            <div className="relative w-48 h-12 flex justify-center items-center flex-col bg-white dark:bg-darkMain rounded-md shadow-md cursor-pointer">
                <h4 className="w-full text-sm font-normal text-darkText dark:text-white flex justify-between items-center px-4 "
                    onClick={toggleDropDown}
                >
                    {isRegionChoosed ? actualRegion : "Filter by Region"}
                    <span className="relative flex justify-center items-center text-sm text-darkText dark:text-white">
                        <ion-icon name="chevron-down"></ion-icon>
                    </span>
                </h4>
                <ul className={`${isActiveDropDown ? "flex" : "hidden"} absolute top-16 left-0 w-full h-auto justify-start items-start flex-col bg-white dark:bg-darkMain rounded-md overflow-hidden shadow-md text-sm`}>
                    {
                        regions.map((region, i) => {
                            return (<li key={i}
                                        className="relative w-full h-8 flex justify-start items-center text-base text-darkText dark:text-white cursor-pointer px-4 duration-1000 ease-out bg-white hover:bg-[rgba(0,0,0,0.1)] dark:bg-darkMain dark:hover:bg-[rgba(255,255,255,0.1)]"
                                        onClick={() => chooseCountry(i)}
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

export default Filter;