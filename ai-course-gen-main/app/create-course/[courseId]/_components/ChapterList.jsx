import React from 'react'
import { HiOutlineCheckBadge, HiOutlineClock } from "react-icons/hi2";
import EditChapters from './EditChapters';

function ChapterList({ course, refreshData, edit = true }) {
    return (
        <div className='mt-5 p-4 bg-white shadow-md rounded-lg'>
            <h2 className='text-2xl font-semibold text-gray-800'>Chapters</h2>
            <div className='mt-4'>
                {course?.courseOutput?.chapters.map((chapter, index) => (
                    <div key={index} className='border p-5 rounded-lg mb-5 flex items-center justify-between bg-gray-50 hover:shadow-md transition-all duration-200'>
                        <div className='flex gap-5 items-start w-full'>
                            <div className='flex-none h-12 w-12 bg-primary text-white rounded-full flex items-center justify-center text-lg font-semibold'>
                                {index + 1}
                            </div>
                            <div className='flex-1'>
                                <h2 className='font-bold text-xl flex items-center gap-2 text-gray-900'>
                                    {chapter.chapterName}
                                    {edit && <EditChapters course={course} index={index} refreshData={refreshData} />}
                                </h2>
                                <p className='text-sm text-gray-600 mt-1'>{chapter?.about}</p>
                                <p className='flex gap-2 text-primary items-center text-sm mt-2'>
                                    <HiOutlineClock className='text-lg' />{chapter?.duration}
                                </p>
                            </div>
                        </div>
                        <HiOutlineCheckBadge className='text-4xl text-gray-300 flex-none' />
                    </div>
                ))}
            </div>
        </div>
    )
}

export default ChapterList;
