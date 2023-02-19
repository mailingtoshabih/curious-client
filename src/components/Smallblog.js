import sanitizeHtml from 'sanitize-html';
import { Link } from 'react-router-dom';


export const Smallblog = ({ blog }) => {
    return (
        <div className="rounded-lg w-full sm:w-64 md:w-80 lg:w-64 mx-auto p-2 shadow-xl hover:shadow-purple-300 duration-500">

            <Link to={`/explore/${blog?._id}`}>

                <img
                    className="rounded-lg"
                    src={blog?.image} alt="" />



                <div className="text-xs md:text-sm font-semibold text-gray-600 my-3">
                    {blog && <div dangerouslySetInnerHTML={{ __html: sanitizeHtml(blog.title) }} />}
                </div>

                <div className="flex justify-between text-xs font-semibold text-purple-500 my-3">
                    <p>{blog?.likes} Likes</p>
                    <p>Blog</p>

                </div>



            </Link>
        </div>

    )
}
