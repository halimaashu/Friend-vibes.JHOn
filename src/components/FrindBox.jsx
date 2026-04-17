import React from 'react';

const FriendBox = () => {
    return (
        <div className='grid  md:grid-cols-2 lg:grid-cols-4 gap-4 max-w-11/12 mx-auto py-10 mb-10'>
            <div className="shadow-xl rounded-lg p-10 text-center flex  flex-col gap-3 justify-center items-center text-gray-600 text-xl font-semibold">
                <h1 className='text-3xl font-bold'>10</h1>
                <h1>All Friends</h1>
                
            </div>
            <div className="shadow-xl rounded-lg p-10 text-center flex  gap-3  flex-col justify-center items-center text-gray-600 text-xl font-semibold">
                <h1 className='text-3xl font-bold'>3</h1>
                <h1>On Track</h1>
                
            </div>
            <div className="shadow-xl rounded-lg p-10 text-center flex gap-3   flex-col justify-center items-center text-gray-600 text-xl font-semibold">
                <h1 className='text-3xl font-bold'>6</h1>
                <h1>Need Attention</h1>
                
            </div>
            <div className="shadow-xl rounded-lg p-10 text-center flex  gap-3  flex-col justify-center items-center text-gray-600 text-xl font-semibold">
                <h1 className='text-3xl font-bold'>12</h1>
                <h1>Interactions This Month</h1>
                
            </div>
        </div>
    );
};

export default FriendBox;