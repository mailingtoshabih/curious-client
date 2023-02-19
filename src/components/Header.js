import { Link } from "react-router-dom"
import { Context } from '../context.js/Context';
import { useContext } from 'react';






export const Header = () => {

    const { user, dispatch } = useContext(Context);

    const handleLogout = (e) => {
        e.preventDefault();
        dispatch({ type: "LOGOUT" });
    }

    

    return (
        <>

            {user ?
                <>
                    <div className='mx-auto mt-20 text-center md:w-96 font-semibold text-gray-500 text-2xl md:text-3xl lg:text-4xl'>
                        <p>What would you</p>
                        <p>like to do
                            <span className="text-green-400"> Sir ?</span>
                        </p>
                    </div>

                    <div className="my-5 flex justify-center">

                        <Link to={process.env.REACT_APP_CONSOLE}
                            target={"_blank"} 
                            className='flex w-fit py-2 mx-2 md:py-3 px-4 md:px-8 rounded-xl text-white text-sm md:text-lg  bg-gradient-to-r from-green-500 to-cyan-500 shadow-lg shadow-green-400 hover:shadow-2xl hover:shadow-green-600 duration-700'>
                            Analytics
                        </Link>

                        <Link to="/write" className='flex w-fit py-2 mx-2 md:py-3 px-4 md:px-8 rounded-xl text-white text-sm md:text-lg  bg-gradient-to-r from-purple-600 to-indigo-600 shadow-lg shadow-purple-500 hover:shadow-2xl hover:shadow-purple-600 duration-700'>
                            Add New Blog
                        </Link>

                        <button className='flex w-fit mx-2 py-2 md:py-3 px-4 md:px-8 rounded-xl text-white text-sm md:text-lg  bg-gradient-to-r from-orange-500 to-red-600 shadow-lg shadow-red-400 hover:shadow-2xl hover:shadow-red-400 duration-700'
                            onClick={handleLogout}>

                            Logout
                        </button>

                    </div>
                </>

                :

                <>
                    <div className='mx-auto mt-20 text-center md:w-96 font-semibold text-gray-500 text-2xl md:text-3xl lg:text-4xl'>
                        <p>It's wonderful to</p>
                        <p>see new faces
                            <span className="text-green-400"> here</span>
                        </p>
                    </div>

                    <div className="my-5 text-center">
                        <Link className='flex w-fit mx-auto py-2 md:py-3 px-4 md:px-8 rounded-xl text-white text-sm md:text-lg  bg-gradient-to-r from-purple-600 to-indigo-600 shadow-lg shadow-purple-500 hover:shadow-2xl hover:shadow-purple-600 duration-700'>
                            Welcome
                        </Link>
                    </div>
                </>
            }


        </>
    )
}
