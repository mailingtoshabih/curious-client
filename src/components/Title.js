import { Top } from "./Top"
import onlyheart from '../assets/heart.png'
import redheart from '../assets/redheart.png'
import { useEffect, useState } from "react"
import { useParams, useNavigate } from "react-router-dom"
import axios from 'axios'
const backend = process.env.REACT_APP_BACKEND;
// ---------------------------------------------------




export const Title = ({ blog }) => {

    const params = useParams();

    useState(() => {
        const search = async () => {
            const res = await axios.get(backend + `/blogs/likevalue/${params.id}`);
            res && setLikeValue(res.data)
        }
        search();
    }, [params])


    const [isLiked, setIsLiked] = useState(JSON.parse(localStorage.getItem(params.id)));
    const [likeValue, setLikeValue] = useState("");

    const date = blog?.createdAt?.substring(0, 10);
    const time = blog?.createdAt?.substring(11, 16);


    const handleLike = async (e) => {
        e.preventDefault();

        try {
            if (isLiked) {
                localStorage.
                    setItem(params.id, JSON.stringify(false));
                setIsLiked(!isLiked);
                setLikeValue(likeValue - 1);

                await axios.put(backend + `/blogs/dislike/${blog._id}`);
            }
            else {
                localStorage.
                    setItem(params.id, JSON.stringify(true));
                setIsLiked(!isLiked);
                setLikeValue(likeValue + 1);

                await axios.put(backend + `/blogs/like/${blog._id}`);
            }
        }
        catch (exc) {console.log(exc.message)}

    }



    return (
        <div>

            <Top blog={blog} />

            {/* Title */}
            <div className='text-center mt-5 md:mt-10  text-gray-700 font-bold text-xl sm:text-3xl md:text-5xl'>
                {blog && blog.title}
                <p className='font-light text-gray-400 text-xs md:text-lg  mt-5 md:mt-10'>{`${date} at ${time}`}</p>


                {/* Like */}
                <div onClick={handleLike} className='cursor-pointer my-3'>
                    <p className='m-auto mb-1 text-indigo-600 text-xs sm:text-sm'>{likeValue} Likes</p>
                    <img src={isLiked ? redheart : onlyheart} alt="" className='h-6 m-auto' />
                </div>

            </div>

        </div>
    )
}
