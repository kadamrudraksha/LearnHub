'use client';

import Image from 'next/image';
import React, { useContext } from 'react';
import { HiOutlineHome, HiOutlineSquares2X2 } from 'react-icons/hi2';
import { RiLogoutCircleRLine } from 'react-icons/ri';
import { usePathname } from 'next/navigation';
import Link from 'next/link';
import { UserCourseListContext } from '@/app/_context/UserCourseListContext';

function SideBar() {
  const { userCourseList } = useContext(UserCourseListContext);
  const path = usePathname();

  // Sidebar menu items
  const Menu = [
    { id: 1, name: 'Home', icon: <HiOutlineHome size={22} />, path: '/dashboard' },
    { id: 2, name: 'Explore', icon: <HiOutlineSquares2X2 size={22} />, path: '/dashboard/explore' },
    { id: 3, name: 'Logout', icon: <RiLogoutCircleRLine size={22} />, path: '/dashboard/logout' },
  ];

  return (
    <aside className="fixed inset-y-0 left-0 w-64 bg-white shadow-md border-r p-6 flex flex-col gap-6">
      {/* Logo */}
      <div className="flex items-center justify-center">
        <Image src="/logo.jpg" width={50} height={60} alt="Logo" />
      </div>

      {/* Menu */}
      <nav className="flex flex-col space-y-4">
        {Menu.map((item) => (
          <Link key={item.id} href={item.path} 
            className={`flex items-center gap-3 px-5 py-3 rounded-xl transition 
            ${path === item.path ? 'bg-purple-100 text-purple-800 font-semibold' : 'hover:bg-gray-100'}`}
          >
            {item.icon}
            <span>{item.name}</span>
          </Link>
        ))}
      </nav>

      {/* Display course count */}
      <div className="mt-auto text-center text-gray-700 text-sm bg-gray-100 p-3 rounded-xl">
        <span className="font-semibold text-purple-700">{userCourseList.length}</span> Courses Created
      </div>
    </aside>
  );
}

export default SideBar;
