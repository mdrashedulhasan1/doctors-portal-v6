import React from 'react';

const AvailableService = ({service, setTreatment}) => {
    return (
        <div className="card bg-base-100 shadow-xl">
            <div className="card-body items-center text-center">
                <h2 className="card-title">{service.name}</h2>
                <p>{service.slots[0]}</p>
                <p>{service.slots.length} SPACE AVALABLE</p>
                <div className="card-actions">
                    <label onClick={()=> setTreatment(service)} htmlFor="my-modal-6" className="btn btn-primary text-white modal-button">Booking Appoinment</label>
                </div>
            </div>
        </div>
    );
};

export default AvailableService;