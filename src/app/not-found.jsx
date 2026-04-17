 "use client"
import React from 'react';
import "@/app/notfound.css"
import Link from 'next/link';
const NotFound = () => {
    return (
        <div className=' text-center py-20 px-3 bg bg-black'>
            <h1 className='text-3xl font-bold text-yellow-500'>NOT FOUND ThiS paGES</h1>
            <h1 className='text-green-400 text-6xl font-bold mt-8'>|404|</h1>
            <Link href={"/"} className='btn btn-primary mt-20 px-10'>Got back</Link>

        </div>
    );
};

export default NotFound;