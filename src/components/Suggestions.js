import { Smallblog } from "./Smallblog";
import { useState, useEffect } from "react";
import axios from 'axios';
const backend = process.env.REACT_APP_BACKEND;




export const Suggestions = () => {


    const [blogs, setBlogs] = useState([]);

    useEffect(() => {
        const search = async () => {

            const res = await axios.get(backend + "/blogs/all");
            res && setBlogs(res.data.reverse())
        }
        search();
    }, [])

    // grid grid-cols-4 gap-4

    return (
        <>
            <p className="text-center my-5 font-bold text-gray-500 text-xl md:text-2xl lg:text-3xl>">
                Continue Reading
            </p>


            <div className="mx-auto max-w-4xl 
            grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-2">


                {
                    blogs?.map((blog) => (
                        <Smallblog key={blog._id} blog={blog} />
                    ))
                }

            </div>
        </>
    )
}
