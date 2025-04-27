'use client';

import Image from 'next/image';
import React from 'react';
import { MdOutlineMenuBook } from 'react-icons/md';
import { FaEllipsisVertical } from 'react-icons/fa6';
import DropdownOption from './DropdownOption';
import { eq } from 'drizzle-orm';
import Link from 'next/link';
import { db } from 'configs/db';
import { CourseList } from 'configs/schema';

function CourseCard({ course, refreshData, displayUser = false }) {
    const handleOnDelete = async () => {
        const resp = await db.delete(CourseList)
            .where(eq(CourseList.id, course?.id))
            .returning({ id: CourseList?.id });

        if (resp) {
            refreshData();
        }
    };

    return (
        <div className='shadow-lg rounded-xl border p-4 mt-5 cursor-pointer hover:border-primary transition-transform duration-200 hover:scale-105 bg-white'>
            <Link href={`/course/${course?.courseId}`}>
                <Image 
                    src={course?.courseBanner} 
                    width={300} 
                    height={200} 
                    className='w-full h-[200px] object-cover rounded-xl' 
                    alt='Course Banner'
                />
            </Link>
            <div className='p-3'>
                <div className='flex justify-between items-center'>
                    <h2 className='font-bold text-lg'>{course?.courseOutput?.courseName}</h2>
                    {!displayUser && (
                        <DropdownOption handleOnDelete={handleOnDelete}>
                            <FaEllipsisVertical className='text-gray-500 hover:text-gray-700' />
                        </DropdownOption>
                    )}
                </div>
                <p className='text-sm text-gray-500 mt-1'>{course?.category}</p>
                <div className='flex items-center justify-between mt-3 gap-2'>
                    <span className='flex gap-2 items-center px-3 py-1 bg-purple-100 text-primary text-sm rounded-md flex-1'>
                        <MdOutlineMenuBook className='text-purple-600' />
                        {course?.courseOutput?.noOfChapters} Chapters
                    </span>
                    <span className='px-3 py-1 bg-blue-100 text-blue-600 text-sm rounded-md flex-1 text-center'>
                        {course?.level}
                    </span>
                </div>
                {displayUser && (
                    <div className='flex items-center gap-3 mt-4'>
                        <Image 
                            src={course?.userProfileImage} 
                            width={35} 
                            height={35} 
                            className='rounded-full border' 
                            alt='User Profile'
                        />
                        <h2 className='text-sm text-gray-700'>{course?.username}</h2>
                    </div>
                )}
            </div>
        </div>
    );
}

export default CourseCard;
