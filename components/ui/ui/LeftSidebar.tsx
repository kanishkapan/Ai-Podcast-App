"use client";

import React from 'react';
import Link from 'next/link';
import Image from 'next/image';

const LeftSidebar = () => {
  // Sidebar menu items
  const menuItems = [
    {
      route: "/home",
      label: "Home",
      imgURL: "/icons/home.svg",
    },
    {
      route: "/profile",
      label: "Profile",
      imgURL: "/icons/profile.svg",
    },
    {
      route: "/create-podcast",
      label: "Create Podcast",
      imgURL: "/icons/microphone.svg",
    },
    {
      route: "/discover",
      label: "Discover",
      imgURL: "/icons/discover.svg",
    },
  ];

  return (
    <section className="left_sidebar">
      <nav className="flex flex-col bg-black-1 gap-6 p-4">
        {/* Logo Section */}
        <Link
          href="/"
          className="flex items-center gap-3 py-4 max-lg:px-4 justify-center lg:justify-start bg-nav-focus "
        >
          <Image alt="logo" src="/icons/logo.svg" height={27} width={23} />
          <h1 className="text-24 bg-black-1 font-extrabold text-white max-lg:hidden">
            PodCastr
          </h1>
        </Link>

        {/* Menu Items */}
        <div className="flex flex-col gap-4 mt-8">
          {menuItems.map((item, index) => (
            <Link
              key={index}
              href={item.route}
              className="relative flex items-center gap-4 text-white hover:text-gray-300 transition ease-in-out group"
            >
              <Image alt={item.label} src={item.imgURL} height={20} width={20} />
              <span className="text-lg font-medium">{item.label}</span>
              {/* Hover Underline Effect */}
              <span className="absolute bottom-0 left-0 h-1 w-0 bg-orange-1 transition-all duration-300 group-hover:w-full"></span>
            </Link>
          ))}
        </div>
      </nav>
    </section>
  );
};

export default LeftSidebar;
