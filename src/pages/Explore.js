import avatar from "../assets/avatar.jpg"
import sanitizeHtml from 'sanitize-html';
import { Navbar } from "../components/Navbar"
import { Footer } from "../components/Footer"
import axios from "axios"
import { useEffect, useState } from "react"
import { useParams, useNavigate } from "react-router-dom"
import { Suggestions } from "../components/Suggestions";
import { Title } from "../components/Title";
import { Divholder } from "../components/Divholder"

const backend = process.env.REACT_APP_BACKEND;




// -----------------------------------------------------

export const Explore = () => {

  useEffect(() => window.scrollTo(0, 0))

  const navigate = useNavigate();
  const params = useParams();
  const [blog, setBlog] = useState(false);


  useEffect(() => {
    window.scrollTo(0, 0)

    const search = async () => {
      const res = await axios.get(backend + `/blogs/explore/${params.id}`);
      res.data && setBlog(res.data);
    }
    search();
  }, [params])


  return (
    <div className="justify-center">

      <Navbar />


      <div className='mt-16 p-4 mb-10 max-w-4xl w-full mx-auto'>

        {
          !blog ?
            <>
              <Divholder />
              <Divholder />
              <Divholder />
              <Divholder />
            </>
            :
            <>

              <div className="">

                <Title blog={blog} />


                {/* image */}
                <div className="mt-10">
                  <img src={blog?.image || avatar} alt="" className="rounded-xl shadow-2xl shadow-green-200 hover:shadow-green-400 duration-700" />
                </div>


                {/* Summary */}
                <p className='mt-8 italic text-lg sm:text-xl md:text-2xl w-fit text-gray-500'>
                  {blog && blog.summary}
                </p>



                <p className="my-10 w-fit p-3 font-bold rounded-xl text-white text-xl text-center md:text-start md:text-2xl  bg-gradient-to-r from-green-500 to-cyan-500 shadow-lg shadow-green-400 hover:shadow-2xl hover:shadow-green-600 duration-700">
                  {blog && blog.subheading}
                </p>



                {/* description */}
                <div className="mt-10 text-lg sm:text-xl lg:text-2xl font-medium text-gray-700">
                  {blog && <div dangerouslySetInnerHTML={{ __html: sanitizeHtml(blog.description) }} />}
                </div>



                {/* subimage */}
                <div className="my-10 rounded-xl">
                  {blog?.subimage && <img src={blog?.subimage} alt="" className="rounded-xl shadow-2xl shadow-orange-100 hover:shadow-orange-400 duration-700" />}
                </div>



                {/* subdescription */}
                <div className="mt-5 text-lg sm:text-xl lg:text-2xl font-medium text-gray-700">
                  {blog && <div dangerouslySetInnerHTML={{ __html: sanitizeHtml(blog.subdescription) }} />}
                </div>



              </div>





              <button onClick={() => navigate(-1)}
                className='flex w-fit my-10 mx-auto p-4 rounded-xl text-white text-sm md:text-lg  bg-gradient-to-r from-orange-600 to-red-400 shadow-lg shadow-red-500 hover:shadow-2xl hover:shadow-red-600 duration-700'>
                Back to home
              </button>

              <hr className="my-6" />

              <Suggestions />

            </>
        }
      </div>

      <Footer />
    </div>
  )
}
