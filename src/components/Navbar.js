import { Link } from "react-router-dom"
import { Menu } from "./Menu"






// change ambiance button
export const Navbar = () => {


    return (

        <div className='relative z-10 mb-10'>


            <div className='h-1 bg-gradient-to-r from-purple-600 to-indigo-600 '></div>


            <nav className="fixed top-0 z-10 backdrop-blur-lg px-2 sm:px-4 py-2 mx-0 w-full">


                <div className="flex mx-auto max-w-7xl">

                    <div className="my-auto mx-auto">
                        <Link to={'/'} className="text-gray-700 font-bold text-xl md:text-2xl">
                            {/* <img src={logo} className="h-6 mr-3 lg:h-8" alt="Feeny" /> */}
                            curious
                            <span className="text-indigo-600">cab</span>
                        </Link>
                    </div>




                    {/* <div className="items-center justify-end my-auto w-full flex">
                        <div className="my-auto flex space-x-4">

                            <div>
                                <Link to={'/'} className="block py-2 pl-3 pr-4 hover:text-blue-600 rounded md:bg-transparent md:p-0 " aria-current="page">Blog</Link>
                            </div>
                            <div>
                                <Link to={'/people'} className="block py-2 pl-3 pr-4 font-display  md:hover:text-blue-700 md:p-0">Author</Link>
                            </div>


                        </div>
                    </div> */}


                </div>
            </nav>

        </div>

    )
}
