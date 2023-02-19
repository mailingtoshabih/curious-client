import { useState } from 'react'
import axios from 'axios';
const backend = process.env.REACT_APP_BACKEND;







export const Popup = ({blog}) => {


    const [popup, setPopup] = useState(true);

    const handleDelete = async (e) => {
        e.preventDefault();

        const res = await axios.delete(backend + `/blogs/delete/${blog?._id}`);
        if (res) {
            setPopup(false);
            window.location.reload();
        }
    }



    return (
        <>

            <div className={`block p-5 w-72 md:w-96 text-center mx-auto my-auto rounded-xl bg-white shadow-2xl shadow-red-400 relative`}>

                <div className="mb-5 text-lg font-bold text-gray-500">
                    <p>Delete this blog ?</p>
                </div>

                <div className='flex justify-evenly'>

                    <button data-modal-hide="popup-modal" type="button"
                        className='flex w-fit mx-2 p-3 px-5 my-auto rounded-xl text-white text-sm md:text-lg  bg-gradient-to-r from-orange-500 to-red-600 shadow-lg shadow-red-400'
                        onClick={handleDelete}>
                        Yes, Delete
                    </button>

                </div>
            </div>


        </>
    )
}
