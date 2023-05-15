import { Metadata } from 'next';
import Link from "next/link";
import { NavBar } from '../components/NavBar/NavBar';

//ADD METADATA TO HEAD.
export const metadata: Metadata = {
    title: 'About Page'
};

const AboutPage = () => {
    return (
        <>

            <h1>About Page</h1>

            <Link href='/'>
                <button>Go to Home Page</button>
            </Link>
            
        </>
    )
};

export default AboutPage;