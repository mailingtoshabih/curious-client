import { Link } from "react-router-dom"
// --------------------------------------------------



export const Menu = () => {


    return (
        <div className={`rounded-xl mt-10 md:hidden px-2 py-2 h-fit my-auto flex gap-16 items-center w-full overflow-y-auto scrollbar-hide font-semibold text-indigo-600`}>

            <Link to="/">
                <button className='my-auto'>Blog</button>
            </Link>

            <Link to="/">
                <button className='my-auto'>About</button>
            </Link>

        </div>
    )
}



