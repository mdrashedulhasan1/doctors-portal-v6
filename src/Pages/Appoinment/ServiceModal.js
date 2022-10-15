import React from 'react';
import { format } from 'date-fns';
const ServiceModal = ({ treatment, setTreatment, date }) => {
    const { _id, name, slots } = treatment;
    const handelBooking = (e) => {
        e.preventDefault();
        const slot = e.target.slot.value;
        console.log(_id, name, slot);
    }
    return (
        <div>
            <input type="checkbox" id="my-modal-6" className="modal-toggle" />
            <div className="modal modal-bottom sm:modal-middle">
                <div className="modal-box">
                    <label htmlFor="my-modal-6" className="btn btn-sm btn-circle absolute right-2 top-2">✕</label>
                    <h3 className="font-bold text-2xl">{name}</h3>
                    <form onSubmit={handelBooking} className='grid grid-cols-1 gap-3 justify-items-center mt-3'>
                        <input type="text" value={format(date, 'PP')} className="input input-bordered w-full max-w-xs" />
                        <select name='slot' className="select select-bordered w-full max-w-xs">
                            {
                                slots.map(slot => <option value={slot}>{slot}</option>)
                            }
                        </select>
                        <input type="text" placeholder="Full Name" className="input input-bordered w-full max-w-xs" />
                        <input type="number" placeholder="Phone Number" className="input input-bordered w-full max-w-xs" />
                        <input type="email" placeholder="Email" className="input input-bordered w-full max-w-xs" />
                        <input type="submit" value="Submit" className="btn w-full max-w-xs" />
                    </form>
                </div>
            </div>
        </div>
    );
};

export default ServiceModal;