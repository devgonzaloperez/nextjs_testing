import { NavBar } from '@/app/components/NavBar/NavBar';
import { Metadata } from 'next';
import Link from "next/link";
NavBar

//ADD METADATA TO HEAD.
export const metadata: Metadata = {
    title: 'About Page'
};

const HelloPage = () => {
    return (
        <>

            <h1>Hello Page</h1>

            <Link href='/'>
                <button>Go to Home Page</button>
            </Link>
            
        </>
    )
};

export default HelloPage;