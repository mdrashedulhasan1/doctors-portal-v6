import React from 'react';

const Review = ({ review }) => {
    return (
        <div className='shadow-xl p-10'>
            <div>
                <p>{review.description}</p>
            </div>
            <div className='flex justify-center items-center mt-2'>
                <div className="avatar mr-5">
                    <div className="w-24 rounded-full ring ring-primary ring-offset-base-100 ring-offset-2">
                        <img src={review.img} alt="" />
                    </div>
                </div>
                <div>
                    <h3>{review.title}</h3>
                    <p>{review.location}</p>
                </div>
            </div>
        </div>
    );
};

export default Review;