import { Navbar } from '../components/Navbar';
import { Header } from '../components/Header';
import { Feed } from '../components/Feed';
import { Footer } from '../components/Footer';
import { useEffect } from 'react';



//global background first div
export const Homepage = () => {

    useEffect(() => {
        window.scrollTo(0, 0)
    }, []);

    return (

        <div>
            <Navbar />
            <Header />



            <div className='md:px-4 relative mt-10 mx-auto w-full flex justify-between'>


                <div className='max-w-3xl mx-auto'>
                    <Feed />
                </div>




            </div>






            <Footer />
        </div>
    )
}
