import React from 'react';
import clock from '../../assets/icons/clock.svg'
import location from '../../assets/icons/marker.svg'
import phone from '../../assets/icons/phone.svg'
import InfoCard from './InfoCard';
const Info = () => {
    const infos = [
        {
            _Id:1,
            img:clock,
            title:'Opening Hours',
            description:'Lorem ipsum, dolor sit amet consectetur adipisicing elit. Aliquid, autem.',
            bgColor:'bg-gradient-to-r from-secondary to-primary' ,
        },
        {
            _Id:2,
            img:location,
            title:'Visit Our Location',
            description:'Lorem ipsum, dolor sit amet consectetur adipisicing elit. Aliquid, autem.',  
            bgColor:'bg-amber-600' ,
        },
        {
            _Id:3,
            img:phone,
            title:'Contact Us',
            description:'Lorem ipsum, dolor sit amet consectetur adipisicing elit. Aliquid, autem.',
            bgColor:'bg-gradient-to-r from-secondary to-primary' ,  
        },
    ]
    return (
        <div className='grid grid-cols-1  lg:grid-cols-2 xl:grid-cols-3 gap-5 mt-2'>
            {
                infos.map(info => <InfoCard key={info._Id} info={info} bgColor={info.bgColor}></InfoCard>)
            }
        </div>
    );
};

export default Info;