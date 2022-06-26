import { MenuIcon, UserCircleIcon } from "@heroicons/react/outline";
import Link from "next/link";
import { useState } from "react";

const Nav = () => {
  const [menu,setMenu] = useState(false)
  return (
    <>
      <nav className="flex items-center justify-between">
        <h1 className="uppercase text-3xl">MNTN</h1>
        <button onClick={() => setMenu(!menu)} className="md:hidden block">
          <MenuIcon className="w-6"/>
        </button>
        <ul className={`flex md:space-x-5 md:static absolute ${menu ? 'right-12 top-16 w-32 rounded bg-white text-black flex flex-col text-center' : '-right-96 '}`}> 
          <li className="hover:bg-gray-200 hover:rounded-t py-4">
            <Link href="/equipment">
              <a>Equipment</a>
            </Link>
          </li>
          <li className="hover:bg-gray-200 py-4">
            <Link href="/about">
              <a>About us</a>
            </Link>
          </li>
          <li className="hover:bg-gray-200 py-4">
            <Link href="/blog">
              <a>Blog</a>
            </Link>
          </li>
          <li className="md:hidden block hover:bg-gray-200 hover:rounded-b py-4 ">
          <Link href="/account">
            <a className="flex justify-center">
              <UserCircleIcon className="w-6 mr-1" />
              Account
            </a>
          </Link>
          </li>
        </ul>
        <div className="md:block hidden">
          <Link href="/account" className="">
            <a className="flex ">
              <UserCircleIcon className="w-6 mr-1" />
              Account
            </a>
          </Link>
        </div>
      </nav>
    </>
  );
};

export default Nav;
