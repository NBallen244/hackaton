const BarraNav = () => {
    return (
        <div>
        <div className="w-screen bg-gray-900 text-white p-4 flex flex-row justify-between items-center ">
            <nav className="flex flex-row items-center space-x-4 w-screen">
                <h1 className="text-3xl font-bold">NavBar</h1>
                <ul className="flex flex-row space-x-4 ">
                    <li className="hover:text-gray-400 cursor-pointer">Home</li>
                    <li className="hover:text-gray-400 cursor-pointer">Features</li>
                    <li className="hover:text-gray-400 cursor-pointer">Pricing</li>
                    <li className="hover:text-gray-400 cursor-pointer">About</li>
                </ul>
                <div className="ml-auto justify-end flex space-x-2">
                    <input
                        type="text"
                        placeholder="Search"
                        className="p-2 rounded border bg-white text-black"
                    />
                    <button className="bg-transparent cursor-pointer text-blue-800 font-bold py-2 px-4 rounded border-2 border-blue-800 hover:bg-blue-800 hover:text-white transition duration-300">
                        Search
                    </button>
                </div>
            </nav>
        </div>
        <div className="w-screen bg-gray-900 text-white p-4 flex flex-row justify-between items-center " style={{ transform: "rotate(180deg)" }}>
            <nav className="flex flex-row items-center space-x-4 w-screen">
                <h1 className="text-3xl font-bold">NavBar</h1>
                <ul className="flex flex-row space-x-4 ">
                    <li className="hover:text-gray-400 cursor-pointer">Home</li>
                    <li className="hover:text-gray-400 cursor-pointer">Features</li>
                    <li className="hover:text-gray-400 cursor-pointer">Pricing</li>
                    <li className="hover:text-gray-400 cursor-pointer">About</li>
                </ul>
                <div className="ml-auto justify-end flex space-x-2">
                    <input
                        type="text"
                        placeholder="Search"
                        className="p-2 rounded border bg-white text-black"
                    />
                    <button className="bg-transparent cursor-pointer text-blue-800 font-bold py-2 px-4 rounded border-2 border-blue-800 hover:bg-blue-800 hover:text-white transition duration-300">
                        Search
                    </button>
                </div>
            </nav>
        </div>
        </div>
    );
};

export default BarraNav;