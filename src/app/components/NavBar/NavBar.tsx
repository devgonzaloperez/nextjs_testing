'use client';

import Link from "next/link";
import styles from './Navbar.module.css';
import { usePathname } from "next/navigation";

const activeLinkstyles = {
    textDecoration: 'underline'
};

export const NavBar = () => {

    const path = usePathname();

    return (
        <nav className={styles['menu-container']}>
            <Link style={(path === '/') ? activeLinkstyles : {}} href='/'>Home</Link>
            <Link style={(path === '/about') ? activeLinkstyles : {}} href='/about'>About</Link>
            <Link style={(path === '/contact') ? activeLinkstyles : {}} href='/contact'>Contact</Link>
        </nav> 
    )

};

