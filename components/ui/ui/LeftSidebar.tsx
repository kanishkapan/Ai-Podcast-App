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
      imgURL: "/icons/microphone.svg",
    },
    {
      route: "/settings",
      label: "Settings",
      imgURL: "/icons/settings.svg",
    },
  ];

  return (
    <section className="left_sidebar">
      <nav className="flex flex-col bg-black-1 gap-6 p-4">
        {/* Logo Section */}
        <Link href="/" className="flex items-center gap-2">
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
              className="flex items-center gap-4 text-white hover:text-gray-300 transition ease-in-out"
            >
              <Image alt={item.label} src={item.imgURL} height={20} width={20} />
              <span className="text-lg font-medium">{item.label}</span>
            </Link>
          ))}
        </div>
      </nav>
    </section>
  );
};

export default LeftSidebar;
