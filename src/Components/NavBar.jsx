import { useState } from "react";


const NavBar = () => {
    const [isOpen, setIsOpen] = useState(false);

    const toggleMenu = () => {
        setIsOpen(!isOpen);
    };
    return (
        <div>
            {/* Navbar */}
            <nav className="bg-white p-2 fixed top-0 left-0 w-full z-50 shadow-lg">
                <div className="container mx-auto flex flex-col lg:flex-row justify-between items-center">
                    <div className="w-full flex justify-between items-center">
                        <div className="text-black font-bold text-3xl hover:text-orange-600 hover:cursor-pointer">
                            <img className="w-28 ml-10" src="./LR-LOGO.png" alt="Logo del estudio md:flex-row" />
                        </div>
                        {/* Hamburger menu for small screens */}
                        <div className="lg:hidden">
                            <button onClick={toggleMenu} className="text-black focus:outline-none ">
                                <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" strokeWidth={1.5} stroke="currentColor" className="size-6">
                                    <path strokeLinecap="round" strokeLinejoin="round" d="M3.75 5.25h16.5m-16.5 4.5h16.5m-16.5 4.5h16.5m-16.5 4.5h16.5" />
                                </svg>
                            </button>
                        </div>
                    </div>
                    {/* Navigation links */}
                   <div className={`w-full ${isOpen ? 'flex' : 'hidden'} lg:flex flex-col lg:flex-row lg:space-x-4 lg:mt-0 mt-4 items-center text-xl ${isOpen ? 'justify-center' : ''}`}>
                        <a href="/" className="text-black px-4 py-2 font-semibold hover:text-red-500">Home</a>
                        <a href="#red" className="text-black px-4 py-2 font-semibold hover:text-red-500">Red SMS</a>
                        {/* <a href="/" className="text-black px-4 py-2 font-semibold hover:text-red-500">Nosotros</a> */}
                        <a href="/#nosotros" className="text-black px-4 py-2 font-semibold hover:text-red-500">Nosotros</a>
                        <a href="/#contacto" className="text-black px-4 py-2 font-semibold hover:text-red-500">Contacto</a>

                    </div>
                </div>
            </nav>


        </div>
    )
}

export default NavBar


