'use client'
import React, { useState, useEffect } from 'react';
import SideBar from './_components/SideBar';
import Header from './_components/Header';
import { UserCourseListContext } from '../_context/UserCourseListContext';  // Corrected path

function DashboardLayout({ children }) {
  const [userCourseList, setUserCourseList] = useState([]);
  const [isMounted, setIsMounted] = useState(false);

  useEffect(() => {
    setIsMounted(true); // Indicate the client-side is mounted
  }, []);

  if (!isMounted) {
    return null; // Avoid rendering on the server-side mismatch
  }

  return (
    <UserCourseListContext.Provider value={{ userCourseList, setUserCourseList }}>
      <div>
        <div className='md:w-64 hidden md:block'>
          <SideBar />
        </div>
        <div className='md:ml-64 p-5'>
          <Header />
          <div className='p-10'>
            {children}
          </div>
        </div>
      </div>
    </UserCourseListContext.Provider>
  );
}

export default DashboardLayout;
