import React, { useEffect, useState } from 'react';
import { format } from 'date-fns';
import AvailableService from './AvailableService';
import ServiceModal from './ServiceModal';
const AvailableServices = ({ date }) => {
    const [services, setServices] = useState([]);
    const [treatment, setTreatment] = useState(null);
    useEffect(()=>{
        fetch('services.json')
        .then(res => res.json())
        .then(data => setServices(data))
    })
    return (
        <div className='mt-12'>
            <div className='text-center'>
                <h3 className='text-primary text-xl'>Available Services On {format(date, 'PP')}</h3>
                <h2 className='text-xl'>Please Select a Service.</h2>
            </div>
            <div className='grid grid-cols-1  lg:grid-cols-2 xl:grid-cols-3 gap-5 mt-2'>
                {
                    services.map(service => <AvailableService key={service._id} service={service} setTreatment={setTreatment}></AvailableService>)
                }
            </div>
            {
                treatment && <ServiceModal date={date} treatment={treatment} setTreatment={setTreatment}></ServiceModal>
            }
        </div>
    );
};

export default AvailableServices;