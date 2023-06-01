function Navigation(props) {
    return (
        <nav className="fixed top-0 left-0 w-full h-20 flex justify-between items-center bg-lightBg dark:bg-darkMain shadow-xl mb-4 px-4 sm:px-20 z-40">
            <h3 className="text-base sm:text-lg font-bold text-darkText dark:text-white">Where in the world?</h3>
            <div className="relative flex justify-end items-center cursor-pointer"
                onClick={props.onToggleDarkMode}
            >
                <span className="flex dark:hidden text-darkText text-sm mr-2">
                    <ion-icon name="moon-outline" ></ion-icon>
                </span>
                <span className="hidden dark:flex text-white text-sm mr-2">
                    <ion-icon name="moon" ></ion-icon>
                </span>
                <span className="flex text-sm font-normal text-darkText dark:text-white">Dark Mode</span>
            </div>
        </nav>
    )
}

export default Navigation;