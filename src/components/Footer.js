import Tippy from '@tippyjs/react';
import { Link } from 'react-router-dom'
import { useState } from 'react';

export const Footer = () => {

  const [copy, setCopy] = useState("Click to copy my email")

  return (
    <div className='relative w-full bg-gradient-to-r from-green-500 to-cyan-500 shadow-lg shadow-green-400 hover:shadow-2xl hover:shadow-green-600 duration-700'>




      <div className='max-w-5xl mx-auto h-12 space-x-5 text-white flex items-center justify-center '>


        <Link to="/login">
          Login
        </Link>


        <Tippy content={<span className='text-white bg-purple-700 font-bold px-3 py-1 rounded-lg'>{copy}</span>}>

          <button
            onClick={() => {
              navigator.clipboard.writeText("mailingtoshabih@gmail.com");
              setCopy("Copied")
            }}>
            Contact me
          </button>
        </Tippy>


      </div>



    </div>
  )
}
