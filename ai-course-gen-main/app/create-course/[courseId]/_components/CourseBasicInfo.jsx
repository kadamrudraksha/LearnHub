import { Button } from '@/components/ui/button';
import Image from 'next/image'
import React, { useEffect, useState } from 'react'
import { FaPuzzlePiece } from "react-icons/fa6";
import EditCourseBasicInfo from './EditCourseBasicInfo';
import { storage } from '@/configs/firebaseConfigs';
import { getDownloadURL, ref, uploadBytes } from 'firebase/storage';
import { db } from '@/configs/db';
import { CourseList } from '@/configs/schema';
import { eq } from 'drizzle-orm';
import Link from 'next/link';

function CourseBasicInfo({ course, refreshData, edit = true }) {
    const [selectedFile, setSelectedFile] = useState()

    useEffect(() => {
        if (course) {
            setSelectedFile(course?.courseBanner)
        }
    }, [course])

    const onFileSelected = async (event) => {
        const file = event.target.files[0];
        setSelectedFile(URL.createObjectURL(file));

        const fileName = Date.now() + '.jpg'
        const storageRef = ref(storage, 'ai-course-generator/' + fileName);
        await uploadBytes(storageRef, file).then(() => {
            return getDownloadURL(storageRef);
        }).then(async (downloadUrl) => {
            await db.update(CourseList).set({
                courseBanner: downloadUrl
            }).where(eq(CourseList.id, course?.id))
        })
    }

    return (
        <div className='p-10 border rounded-xl shadow-lg mt-5 bg-white'>
            <div className='grid grid-cols-1 md:grid-cols-2 gap-6 items-center'>
                <div>
                    <h2 className='font-bold text-3xl text-gray-900 flex items-center gap-2'>
                        {course?.courseOutput?.courseName}
                        {edit && <EditCourseBasicInfo course={course} refreshData={() => refreshData(true)} />}
                    </h2>
                    <p className='text-sm text-gray-600 mt-3 leading-relaxed'>{course?.courseOutput?.description}</p>
                    <h2 className='font-medium mt-4 flex gap-2 items-center text-primary text-lg'>
                        <FaPuzzlePiece className='text-xl' /> {course?.category}
                    </h2>
                    {!edit && (
                        <Link href={'/course/' + course?.courseId + '/start'}>
                            <Button className='w-full mt-5 py-3 text-lg'>Start</Button>
                        </Link>
                    )}
                </div>
                <div className='relative'>
                    <label htmlFor='upload-image' className='cursor-pointer'>
                        <Image 
                            src={selectedFile ? selectedFile : '/image.png'}
                            width={400} 
                            height={250} 
                            className='w-full rounded-xl h-[250px] object-cover shadow-md border border-gray-200' 
                            alt='Course Banner'
                        />
                    </label>
                    {edit && <input type='file' id='upload-image' className='hidden' onChange={onFileSelected} />} 
                </div>
            </div>
        </div>
    )
}

export default CourseBasicInfo;
