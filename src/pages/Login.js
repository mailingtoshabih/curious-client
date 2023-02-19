import { Navbar } from "../components/Navbar"
import { useState, useContext, useEffect } from "react";
import axios from "axios";
import { Link } from "react-router-dom";
import { Context } from "../context.js/Context";

const backend = process.env.REACT_APP_BACKEND;



export const Login = () => {

    const { dispatch, isFetching } = useContext(Context);

    const [email, setEmail] = useState("");
    const [password, setPassword] = useState("");

    useEffect(() => {
        window.scrollTo(0, 0)
    }, []);



    const handleSignin = async (e) => {
        e.preventDefault();
        dispatch({ type: "LOGIN_START" });

        if (email && password) {
            try {
                const res = await axios.post(backend + "/auth/login", { email, password });
                res && dispatch({ type: "LOGIN_SUCCESS", payload: res.data });
            }

            catch (exc) {
                dispatch({ type: "LOGIN_FAILURE" });
            }
        }
    }





    // ----------------------------------------------------------------
    return (
        <div>
            <Navbar />

            <div className="p-2">


                <div className='mx-auto text-center md:w-96 font-semibold text-gray-500 text-2xl md:text-3xl lg:text-4xl mt-10'>
                    Your gateway to
                    <p className="text-green-400">curious
                        <span className="text-cyan-400">cab</span>
                    </p>
                </div>

                <form className='p-3 mt-20 rounded-xl mx-auto w-full md:w-96 shadow-xl shadow-purple-100'>

                    <div className="my-2">
                        <p className='font-semibold text-gray-400 text-md m-4'>Sign in</p>
                        <input type="text" className='text-gray-600 w-full p-3 h-10 outline-none bg-gray-50 rounded-xl'
                            placeholder="curious@cab.com"
                            onChange={(e) => setEmail(e.target.value)} />
                    </div>


                    <div className="my-2">
                        <p className='font-semibold text-gray-400 text-md m-4'>Password</p>
                        <input type="password" className='text-gray-600 h-10 outline-none w-full bg-gray-50 p-3 rounded-xl' placeholder="****"
                            autoComplete="false"
                            onChange={(e) => setPassword(e.target.value)} />
                    </div>


                    <div className="my-5 text-center">
                        <button className='flex mx-auto py-2 md:py-3 px-4 md:px-8 rounded-xl text-white  bg-gradient-to-r from-purple-600 to-indigo-600 shadow-lg shadow-purple-500' onClick={handleSignin} disabled={isFetching}>

                            {isFetching ? "Loading..." : "Login"}
                        </button>
                    </div>




                </form>

            </div>

        </div>
    )
}
