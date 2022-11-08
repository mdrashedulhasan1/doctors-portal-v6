import React from 'react';

const AvailableService = ({service, setTreatment}) => {
    const {name, slots} = service;
    return (
        <div className="card bg-base-100 shadow-xl">
            <div className="card-body items-center text-center">
                <h2 className="card-title">{name}</h2>
                <p>{slots?.length? <span>{slots[0]}</span>: "No Slot Available"}</p>
                <p>{slots?.length} {slots?.length?'space':'space'} SPACE AVALABLE</p>
                <div className="card-actions">
                    <label onClick={()=> setTreatment(service)} htmlFor="my-modal-6" className="btn btn-primary text-white modal-button">Booking Appoinment</label>
                </div>
            </div>
        </div>
    );
};

export default AvailableService;