import { Metadata } from "next";
import Head from "next/head";
import Link from "next/link";
import { NavBar } from "./components/NavBar/NavBar";

//ADD METADATA TO HEAD
export const metadata: Metadata = {
  title: 'Home Page',
};

const HomePage = () => {
  return(
    <div>
      <main>
        <h1>Home Page!</h1>
      </main>
    </div>
  )
};

export default HomePage;