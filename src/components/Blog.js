import avatar from '../assets/avatar.jpg'
import { useEffect, useState, useContext } from 'react'
import { Link } from 'react-router-dom';
import { Context } from "../context.js/Context";
import { readingTime } from '../Read';
import { Popup } from './Popup';
const backend = process.env.REACT_APP_BACKEND;


// This Component is completed


// -----------------------------------------------------------

export const Blog = ({ blog }) => {

    useEffect(() => {
        window.scrollTo(0, 0)
    }, []);

    const date = blog?.createdAt?.substring(0, 10);
    const { user } = useContext(Context);

    const [popup, setPopup] = useState(false);





    return (
        <>

            {/* popup */}
            <div className={`inset-0 fixed text-center z-50  p-4
                ${popup ? "block" : "hidden"} ${popup && "backdrop-blur-md"}`}
                onClick={() => setPopup(false)}>

                {blog && <Popup blog={blog} />}
            </div>



            {/* thumbnail and Title */}
            <div className='md:p-1 md:flex w-full mb-10 mt-5 rounded-xl hover:shadow-2xl hover:shadow-purple-400/50 duration-500'>


                <Link to={`/explore/${blog?._id}`}>
                    <div className='w-full md:w-72 lg:w-80 shrink-0'>
                        <img className='rounded-xl w-full shadow-lg shadow-purple-300'
                            src={blog?.image || avatar} alt="" />
                    </div>
                </Link>


                
                <div className='flex-wrap mb-1'>

                    <Link to={`/explore/${blog?._id}`}>
                        <p className='h-5/6 w-full text-gray-700 font-bold mt-5 md:mt-1 md:px-6 p-2 text-lg md:text-xl lg:text-2xl'>
                            {blog && blog.title}
                        </p>
                    </Link>


                    <div className='w-full h-1/6 text-xs lg:text-sm p-2 md:px-4 flex justify-between font-semibold text-gray-400'>

                        <p className='text-purple-500 my-auto mx-1'>
                            {readingTime(blog?.description)} min read
                        </p>

                        <p className='text-green-500 my-auto mx-1'>{blog?.likes} Likes </p>

                        <p className='my-auto mx-1'>{`${date}`}</p>

                        {user &&

                            <div>
                                <button className=' text-red-500 my-auto mx-1'
                                    onClick={() => setPopup(true)}>
                                    Delete
                                </button>
                            </div>
                        }


                    </div>
                </div>



            </div>

        </>
    )
}
