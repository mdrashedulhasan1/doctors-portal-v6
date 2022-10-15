import React from 'react';
import appoinment from '../../assets/images/appointment.png';
const ContactUs = () => {
    const bg = {
        backgroundImage: `url(${appoinment})`,
        backgroundRepeat: 'no-repeat',
        backgroundSize: 'cover',
        height: '520px'
    }
    return (
        <div style={bg} className='py-12'>
            <div className='text-center'>
                <h3 className='text-primary text-xl'>Contact Us</h3>
                <h2 className='text-2xl my-3 text-white'>Stay Contact With Us</h2>
            </div>
            <div className='grid grid-cols-1 gap-3 justify-items-center'>
                <input type="email" placeholder="Email Address" className="input input-bordered w-full max-w-xs" />
                <input type="text" placeholder="Subject" className="input input-bordered w-full max-w-xs" />
                <textarea className="textarea textarea-bordered w-full max-w-xs" placeholder="Your message"></textarea>
                <input type="submit" value="Submit" className="btn bg-gradient-to-r from-secondary to-primary text-white" />
            </div>
        </div>
    );
};

export default ContactUs;