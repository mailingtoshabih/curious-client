import { Blog } from "./Blog";
import { useState, useEffect } from "react";
import axios from 'axios';
const backend = process.env.REACT_APP_BACKEND;



// Feed component is complete




export const Feed = () => {


    const [blogs, setBlogs] = useState([]);
    
    useEffect( () => {
        const search = async () =>{

            const res = await axios.get(backend + "/blogs/all");
            res && setBlogs(res.data.reverse())
        }
        search();
    },[])


    
    return (
        <div className="p-2">
           
           {/* mapping blogs from here */}
            
            {
                blogs?.map( (blog) => (
                    
                    <Blog key={blog._id} blog={blog}/>

                ))
            }

        </div>
    )
}
