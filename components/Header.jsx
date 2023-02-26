import React, { useState, useEffect } from 'react';

import Image from 'next/image';
import Link from 'next/link';
import { getCategories } from '../services';
import logo from '../public/logo.png';

const Header = () => {
  const [categories, setCategories] = useState([]);
  const [showMenu, setShowMenu] = useState(false);

  useEffect(() => {
    getCategories().then((newCategories) => setCategories(newCategories));
  }, []);

  const toggleMenu = () => setShowMenu(!showMenu);

  return (
    <div className="container mx-auto px-10 mb-8">
      <div className="border-b w-full inline-block border-yellow-400 py-8">
        <div className="flex items-center justify-between">
          <div>
            <Link href="/">
              <div className="flex items-center cursor-pointer">
                <Image
                  un
                  alt="logo"
                  height={30}
                  width={30}
                  className="align-middle rounded-full"
                  src={logo}
                />
                <span className="cursor-pointer font-semibold text-4xl text-black ml-2">BNI</span>
              </div>
            </Link>
          </div>
          <div className="md:hidden">
            <button
              className="bg-yellow-400 hover:bg-black text-white font-bold py-2 px-4 rounded hamburger hamburger--spin p-2"
              type="button"
              onClick={toggleMenu}
            >
              <span className="hamburger-box">
                <span className="hamburger-inner"></span>
              </span>
            </button>
          </div>
          <div className="hidden md:flex md:items-center">
            {categories.map((category) => (
              <Link key={category.slug} href={`/category/${category.slug}`}>
                <span className="md:float-right mt-2 align-middle text-black ml-4 font-semibold cursor-pointer hover:text-yellow-400">
                  {category.name}
                </span>
              </Link>
            ))}
          </div>
        </div>
        {/* Conditionally render the menu based on screen size and showMenu state */}
        <div className={`md:hidden ${showMenu ? 'block' : 'hidden'}`}>
          {categories.map((category) => (
            <Link key={category.slug} href={`/category/${category.slug}`}>
              <span className="block mt-2 align-middle text-black font-semibold cursor-pointer hover:text-yellow-400">
                {category.name}
              </span>
            </Link>
          ))}
        </div>
      </div>
    </div>
  );
};

export default Header;
