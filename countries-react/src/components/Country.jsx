function Country() {
    return (
        <div className="relative w-60 h-80 flex justify-start items-start flex-col rounded overflow-hidden shadow-md">
            <div className="relative w-full h-32 flex justify-center items-center">
                <img className="relative w-full h-full"/>
            </div>
            <div className="relative w-full h-full bg-white dark:bg-darkBg p-4 text-darkText dark:text-white flex justify-start items-center flex-col">
                <h3 className="w-full text-lg font-bold">
                    Germany
                </h3>
                <ul>
                    <li>Population: <span>123456</span></li>
                    <li>Region: <span>Europe</span></li>
                    <li>Capital: <span>Berlin</span></li>
                </ul>
            </div>
        </div>
    )   
}

export default Country;