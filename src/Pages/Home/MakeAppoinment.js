import React from 'react';
import doctor from '../../assets/images/doctor.png'
import appoinment from '../../assets/images/appointment.png'
const MakeAppoinment = () => {
    const bg = {
        backgroundImage: `url(${appoinment})`,
        backgroundRepeat: 'no-repeat',
        backgroundSize: 'cover',
    }
    return (
        <div style={bg} className='flex items-center sm:p-10'>
            <div className='flex-6 hidden lg:block'>
                <img style={{marginTop:'-100px'}} src={doctor} alt="" />
            </div>
            <div className='flex-6 text-white '>
                <h3 className='text-primary text-xl'>Appoinment</h3>
                <h2 className='text-2xl my-2'>Make an Appoinment Today</h2>
                <p className='mb-2'>Lorem ipsum dolor sit amet, consectetur adipisicing elit. Placeat libero, culpa autem quasi provident saepe aperiam illum modi debitis sed in enim! Quae obcaecati minima dicta, eaque praesentium ea totam!</p>
                <button className="btn btn-primary bg-gradient-to-r from-secondary to-primary text-white">Get Started</button>
            </div>
        </div>
    );
};

export default MakeAppoinment;