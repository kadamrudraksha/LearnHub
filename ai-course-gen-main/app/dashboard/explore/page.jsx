'use client'
import { db } from '@/configs/db';
import { CourseList } from '@/configs/schema'
import React, { useEffect, useState } from 'react'
import CourseCard from '../_components/CourseCard';
import { Button } from '@/components/ui/button';

function Explore() {
  const [courseList, setCourseList] = useState([]);
  const [pageIndex, setPageIndex] = useState(0);
  const [isLoading, setIsLoading] = useState(true);
  const [hasMore, setHasMore] = useState(true);

  useEffect(() => {
    GetAllCourse();
  }, [pageIndex])

  const GetAllCourse = async () => {
    setIsLoading(true);
    try {
      const result = await db.select().from(CourseList)
        .limit(6)
        .offset(pageIndex * 6);
      
      setCourseList(result);
      setHasMore(result.length === 6); // If we got less than 6 results, there are no more pages
    } catch (error) {
      console.error("Error fetching courses:", error);
    } finally {
      setIsLoading(false);
    }
  }

  return (
    <div className="container mx-auto py-8">
      <div className="mb-8">
        <h2 className='font-bold text-3xl mb-2'>Explore More Projects</h2>
        <p className="text-gray-600">Explore more projects built with AI by other users</p>
      </div>

      {isLoading ? (
        // Loading skeleton
        <div className='grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6'>
          {[...Array(6)].map((_, index) => (
            <div key={index} className="bg-slate-200 animate-pulse rounded-lg h-[200px]"></div>
          ))}
        </div>
      ) : courseList.length > 0 ? (
        // Course grid
        <div className='grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6'>
          {courseList.map((course, index) => (
            <div key={index} className="transition-transform hover:scale-105 duration-300">
              <CourseCard course={course} displayUser={true} />
            </div>
          ))}
        </div>
      ) : (
        // No courses found
        <div className="text-center py-12">
          <p className="text-xl text-gray-500">No courses found on this page</p>
        </div>
      )}

      {/* Pagination controls */}
      <div className='flex justify-between mt-8'>
        <Button 
          variant={pageIndex === 0 ? "outline" : "default"} 
          onClick={() => setPageIndex(pageIndex - 1)} 
          disabled={pageIndex === 0 || isLoading}
          className="px-6"
        >
          ← Previous Page
        </Button>
        
        <span className="flex items-center text-sm text-gray-500">
          Page {pageIndex + 1}
        </span>
        
        <Button 
          variant={!hasMore ? "outline" : "default"} 
          onClick={() => setPageIndex(pageIndex + 1)} 
          disabled={!hasMore || isLoading}
          className="px-6"
        >
          Next Page →
        </Button>
      </div>
    </div>
  )
}

export default Explore;