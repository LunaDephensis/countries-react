import { useState } from 'react'

function Filter(props) {
    let [isActiveDropDown, setIsActiveDropDown] = useState(false);
    let [actualRegion, setActualRegion] = useState(null);
    let [searchValue, setSearchValue] = useState('');

    function toggleDropDown() {
        setIsActiveDropDown(prev => !prev);
    }

    function chooseRegion(region) {
        setActualRegion(region);
        toggleDropDown();
        props.onSelectRegion(region);
    }

    function changeSearchValue(e) {
        const val = e.target.value;
        props.onSearch(val);
        setSearchValue(val);
    }

    return (
        <div className="relative w-full flex justify-start sm:justify-between items-start flex-col sm:flex-row">
            <div className="relative flex justify-start items-center w-full sm:max-w-sm h-12 bg-white dark:bg-darkMain px-8 mb-10 sm:mb-0 rounded-md shadow-md">
                <span className="relative flex justify-center items-center text-lg text-lightPlaceholder dark:text-white mr-8">
                    <ion-icon name="search"></ion-icon>
                </span>
                <input type="text" placeholder="Search for a country..."
                        value={searchValue}
                        onChange={changeSearchValue}
                        className="relative w-full bg-transparent text-base text-darkText dark:text-white placeholder:text-lightPlaceholder dark:placeholder:text-white placeholder:font-light font-normal outline-none border-none"
                />
            </div>
            <div className="relative w-48 h-12 flex justify-center items-center flex-col bg-white dark:bg-darkMain rounded-md shadow-md cursor-pointer">
                <h4 className="w-full text-sm font-normal text-darkText dark:text-white flex justify-between items-center px-4 "
                    onClick={toggleDropDown}
                >
                    {actualRegion !== null ? actualRegion : "Filter by Region"}
                    <span className="relative flex justify-center items-center text-sm text-darkText dark:text-white">
                        <ion-icon name="chevron-down"></ion-icon>
                    </span>
                </h4>
                <ul className={`${isActiveDropDown ? "flex" : "hidden"} absolute top-16 left-0 w-full h-auto z-40 justify-start items-start flex-col bg-white dark:bg-darkMain rounded-md overflow-hidden shadow-md text-sm`}>
                    {
                        props.regions.map((region, i) => {
                            return (<li key={i}
                                        className="relative w-full h-8 flex justify-start items-center text-base text-darkText dark:text-white cursor-pointer px-4 duration-1000 ease-out bg-white hover:bg-[rgba(0,0,0,0.1)] dark:bg-darkMain dark:hover:bg-[rgba(255,255,255,0.1)]"
                                        onClick={() => chooseRegion(region)}
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