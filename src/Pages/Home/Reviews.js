import React from 'react';
import quote from '../../assets/icons/quote.svg'
import person1 from '../../assets/images/people1.png'
import people2 from '../../assets/images/people2.png'
import people3 from '../../assets/images/people3.png'
import Review from './Review';
const Reviews = () => {
    const reviews = [
        {
            _id:1,
            description:'Lorem, ipsum dolor sit amet consectetur adipisicing elit. Nemo, unde? Hic magni numquam nesciunt aliquam? Laudantium magni quibusdam quas exercitationem.',
            img:person1,
            title:'Winson Herry',
            location:'California',
        },
        {
            _id:2,
            description:'Lorem, ipsum dolor sit amet consectetur adipisicing elit. Nemo, unde? Hic magni numquam nesciunt aliquam? Laudantium magni quibusdam quas exercitationem.',
            img:people2,
            title:'Winson Herry',
            location:'California',
        },
        {
            _id:1,
            description:'Lorem, ipsum dolor sit amet consectetur adipisicing elit. Nemo, unde? Hic magni numquam nesciunt aliquam? Laudantium magni quibusdam quas exercitationem.',
            img:people3,
            title:'Winson Herry',
            location:'California',
        },
    ]
    return (
        <div className='py-20'>
            <div className='flex justify-between'>
                <div>
                    <h3 className='text-xl'>Testimonial</h3>
                    <h2 className='text-2xl'>What Our Patients Says</h2>
                </div>
                <div>
                    <img className="w-12 lg:w-24" src={quote} alt="" />
                </div>
            </div>
            <div className='grid grid-cols-1  lg:grid-cols-2 xl:grid-cols-3 gap-5 mt-5'>
                {
                    reviews.map(review => <Review key={review._id} review={review}></Review>)
                }
            </div>
        </div>
    );
};

export default Reviews;