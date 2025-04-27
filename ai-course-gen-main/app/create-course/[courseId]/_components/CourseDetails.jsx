import React from 'react';
import { HiOutlineChartBar, HiOutlineClock, HiOutlineBookOpen, HiOutlinePlay } from "react-icons/hi2";

function CourseDetails({ course }) {
  return (
    <div className='border p-6 rounded-2xl shadow-lg mt-5 bg-white'>
      <div className='grid grid-cols-1 sm:grid-cols-2 md:grid-cols-4 gap-6'>
        {/* Skill Level */}
        <div className='flex items-center gap-3 p-4 bg-gray-100 rounded-lg hover:bg-gray-200 transition'>
          <HiOutlineChartBar className='text-5xl text-blue-600' />
          <div>
            <h2 className='text-sm text-gray-500'>Skill Level</h2>
            <h2 className='font-semibold text-lg text-gray-800'>{course?.level}</h2>
          </div>
        </div>

        {/* Duration */}
        <div className='flex items-center gap-3 p-4 bg-gray-100 rounded-lg hover:bg-gray-200 transition'>
          <HiOutlineClock className='text-5xl text-blue-600' />
          <div>
            <h2 className='text-sm text-gray-500'>Duration</h2>
            <h2 className='font-semibold text-lg text-gray-800'>{course?.courseOutput?.duration}</h2>
          </div>
        </div>

        {/* No of Chapters */}
        <div className='flex items-center gap-3 p-4 bg-gray-100 rounded-lg hover:bg-gray-200 transition'>
          <HiOutlineBookOpen className='text-5xl text-blue-600' />
          <div>
            <h2 className='text-sm text-gray-500'>No of Chapters</h2>
            <h2 className='font-semibold text-lg text-gray-800'>{course?.courseOutput?.noOfChapters}</h2>
          </div>
        </div>

        {/* Video Included */}
        <div className='flex items-center gap-3 p-4 bg-gray-100 rounded-lg hover:bg-gray-200 transition'>
          <HiOutlinePlay className='text-5xl text-blue-600' />
          <div>
            <h2 className='text-sm text-gray-500'>Video Included</h2>
            <h2 className='font-semibold text-lg text-gray-800'>{course?.includeVideo ? 'Yes' : 'No'}</h2>
          </div>
        </div>
      </div>
    </div>
  );
}

export default CourseDetails;
