import onlyheart from '../assets/heart.png'
import redheart from '../assets/redheart.png'
import copy from '../assets/copy.png'
import back from '../assets/back.png'
import user from '../assets/user.png'
import { useNavigate, Link } from "react-router-dom";
import { useState } from "react";






export const Top = ({ blog }) => {

    const [heart, setHeart] = useState(false);
    const navigate = useNavigate();
    const [like, setLike] = useState(blog?.likes);





    return (
        <>


            <div className='flex justify-between font-bold text-gray-500 text-xs sm:text-lg mt-4'>


                <div onClick={() => navigate(-1)} className="p-1 flex cursor-pointer space-x-3">
                    <img src={back} alt="" className='h-6 my-auto' />
                    <p className="my-auto">Previous</p>
                </div>


                <div className='flex space-x-3'>
                    <div 
                        onClick={() => navigator.clipboard.writeText(blog?.description)} 
                        className='flex space-x-3 cursor-pointer'>

                        <img src={copy} alt="" className='h-6 m-auto' />
                    </div>

                    <Link to="/login" className='flex space-x-3 cursor-pointer'>
                        <img src={user} alt="" className='h-6 m-auto' />
                    </Link>
                </div>

            </div>


        </>
    )
}
