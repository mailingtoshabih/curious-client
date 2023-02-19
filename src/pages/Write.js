import picicon from '../assets/picicon.png';
import { useState, useEffect, useRef } from 'react';
import { Navbar } from "../components/Navbar";
import axios from 'axios';
import { useNavigate } from 'react-router-dom';
import { storage } from '../firebase';
import { ref, uploadBytes, getDownloadURL } from "firebase/storage";
import ReactQuill from 'react-quill';
import 'react-quill/dist/quill.snow.css';

const backend = process.env.REACT_APP_BACKEND;

const modules = {
    toolbar: [
        [{ 'header': [1, 2, false] }],
        ['bold', 'italic', 'underline', 'strike', 'blockquote'],
        [{ 'list': 'ordered' }, { 'list': 'bullet' }, { 'indent': '-1' }, { 'indent': '+1' }],
        ['link', 'image'],
        ['clean']
    ],
}

const formats = [
    'header',
    'bold', 'italic', 'underline', 'strike', 'blockquote',
    'list', 'bullet', 'indent',
    'link', 'image'
]

// -----------------------------------------------------------------

export const Write = () => {

    useEffect(() => {
        window.scrollTo(0, 0)
    }, []);


    const navigate = useNavigate();
    const [publishing, setPublishing] = useState(false);

    const [title, setTitle] = useState("")
    const [summary, setSummary] = useState("")
    const [subheading, setSubheading] = useState("")
    const [likes, setLikes] = useState("")
    
    const [subFile, setSubFile] = useState(null)
    const [file, setFile] = useState(null)

    const [description, setDescription] = useState(JSON.parse(localStorage.getItem("description")) || "")
    const [subdescription, setSubDescription] = useState(JSON.parse(localStorage.getItem("subdescription")) || "")

    localStorage.setItem("description", JSON.stringify(description));
    localStorage.setItem("subdescription", JSON.stringify(subdescription));



    
    const handlePublish = async (e) => {
        e.preventDefault();
        setPublishing(true);

        if (!title && !description && !likes && !subdescription) return;

        const newBlog = {
            title,
            summary,
            subheading,
            description,
            subdescription,
            likes,
        }

        if (file) {
            // Uploading first image
            const fileName = file.name + String(Date.now());
            const imageRef = ref(storage, `/blogimage/${fileName}`);
            await uploadBytes(imageRef, file);
            const imgurl = await getDownloadURL(imageRef);
            newBlog.image = imgurl;
        } 
        if (subFile){
            // Uploading secons image
            const subFileName = subFile.name + String(Date.now());
            const subImageRef = ref(storage, `/blogimage/${subFileName}`);
            await uploadBytes(subImageRef, subFile);
            const subimgurl = await getDownloadURL(subImageRef);
            newBlog.subimage = subimgurl;
        }

        try {
            const res = await axios.post(backend + "/blogs/create", newBlog);
            res && navigate("/");
        } catch (exc) {
            console.log(exc.message);
            setPublishing(false)
            alert("Some Error");
        }
    }



    return (
        <div>

            <Navbar />


            <div className='p-2 md:p-5'>

                <form className='rounded-lg px-1 md:px-5'>

                    {/* image section */}
                    <p className='font-semibold text-gray-400 text-xs md:text-md my-1'>Upload thumbnail image All of Same Size</p>
                    <div className='w-fit my-4'>
                        <label htmlFor="image">
                            <img
                                src={file ? URL.createObjectURL(file) : picicon}
                                className="h-28 w-fit rounded-xl mx-auto cursor-pointer"
                                alt="" />
                        </label>

                        <input type="file" id="image" className='hidden' accept="image/*"
                            onChange={(e) => setFile(e.target.files[0])} />
                    </div>


                    <hr className='my-3 border border-red-500' />


                    {/* Heading section */}
                    <div className='my-4'>

                        <p className='font-semibold text-gray-400 text-xs md:text-md my-3'>Title : 25 words max</p>
                        <div>
                            <input
                                maxLength={"120"}
                                className='my-2 w-full h-10 text-sm md:py-2 px-2 bg-gray-50 rounded-lg text-gray-600 border outline-none'
                                placeholder='Title'
                                onChange={(e) => setTitle(e.target.value)} />
                        </div>


                        <p className='font-semibold text-gray-400 text-xs md:text-md my-3'>Summary : 35 words</p>
                        <input
                            maxLength={"180"}
                            className='my-2 w-full h-10 text-sm md:py-2 px-2 bg-gray-50 rounded-lg text-gray-600 border outline-none'
                            placeholder='Summary'
                            onChange={(e) => setSummary(e.target.value)} />

                    </div>


                    <hr className='my-3 border border-red-500' />


                    {/* Main section */}
                    <div className='my-4'>

                        <p className='font-semibold text-gray-400 text-xs md:text-md my-3'>Subheading : 12 words</p>
                        <div>
                            <input
                                maxLength={"80"}
                                className='my-2 w-full h-10 text-sm md:py-2 px-2 bg-gray-50 rounded-lg text-gray-600 border outline-none'
                                placeholder='Subheading'
                                onChange={(e) => setSubheading(e.target.value)} />
                        </div>


                        <div className='font-semibold text-gray-400 text-xs md:text-md my-3'>Description : 2 paragraphs : 3 lines each"</div>
                        <ReactQuill
                            theme="snow"
                            formats={formats}
                            modules={modules}
                            value={description}
                            onChange={newValue => setDescription(newValue)} />



                        <hr className='my-3 border border-red-500' />




                        {/* image section */}
                        <p className='font-semibold text-gray-400 text-xs md:text-md my-1'>Upload Sub image Strip Sized like Cover Pictures</p>
                        <div className='w-fit my-8'>
                            <label htmlFor="subimage">
                                <img
                                    src={subFile ? URL.createObjectURL(subFile) : picicon}
                                    className="h-28 w-fit rounded-xl mx-auto cursor-pointer"
                                    alt="" />
                            </label>

                            <input type="file" id="subimage" className='hidden' accept="image/*"
                                onChange={(e) => setSubFile(e.target.files[0])} />
                        </div>



                        <div className='font-semibold text-gray-400 text-xs md:text-md my-3'>Subdescription : 2 Para and Conclusion : 3 lines each"</div>
                        <ReactQuill
                            theme="snow"
                            formats={formats}
                            modules={modules}
                            value={subdescription}
                            onChange={newValue => setSubDescription(newValue)} />

                    </div>









                    <hr className='my-3 border border-red-500' />


                    {/* Publish Section */}
                    <div className='my-4'>

                        <div>
                            <p className='font-semibold text-red-600 text-xs md:text-md my-3'>Danger Zone</p>
                            <input
                                className='border my-2 w-36 px-4 p-2 text-sm md:px-4 bg-gray-50 rounded-lg text-red-500 outline-none'
                                type='number'
                                placeholder='Likes'
                                onChange={(e) => setLikes(e.target.value)} />
                        </div>

                        <button
                            className={`w-36 py-2 md:py-4 px-4 md:px-8 rounded-xl text-white font-bold  bg-gradient-to-r from-orange-500 to-red-500 hover:shadow-lg hover:shadow-orange-500 duration-700`}
                            onClick={handlePublish}>
                            {publishing ? "Publishing" : "Publish"}
                        </button>

                    </div>

                </form>




            </div>
        </div>
    )
}
