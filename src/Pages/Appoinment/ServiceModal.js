import React from 'react';
import { format } from 'date-fns';
import auth from '../../firebase.init';
import { useAuthState } from 'react-firebase-hooks/auth';
import { toast } from 'react-toastify';
import { async } from '@firebase/util';
import { success } from 'daisyui/src/colors';
const ServiceModal = ({ treatment, setTreatment, date }) => {
    const formattedDate = format(date, 'PP');
    // console.log(formattedDate);
    const [user, loading, error] = useAuthState(auth);
    const { _id, name, slots } = treatment;
    const handelBooking = (e) => {
        e.preventDefault();
        const slot = e.target.slot.value;
        console.log(_id, name, slot);
       const bookings = {
        treatmentId:_id,
        treatment:name,
        date:formattedDate,
        slot,
        patient:user.email,
        patientName:user.displayName,
        phone:e.target.phone.value,
       }
       fetch('http://localhost:5000/booking',{
        method:'POST',
        headers:{
            'accept':'application/json',
            'content-type':'application/json'
        },
        body:JSON.stringify(bookings)
       })
       .then(res => res.json())
       .then(data => {
        if(data.success){
            toast(`Your appoinment set at ${formattedDate} on time ${slot}`)
        }
        else{
            toast.error(`Already have an appoinment ${data.booking?.date} on time ${data.booking?.slot}`)
        }
         setTreatment(null)
       })
       
        
    }


    return (
        <div>
            <input type="checkbox" id="my-modal-6" className="modal-toggle" />
            <div className="modal modal-bottom sm:modal-middle">
                <div className="modal-box">
                    <label htmlFor="my-modal-6" className="btn btn-sm btn-circle absolute right-2 top-2">✕</label>
                    <h3 className="font-bold text-2xl">{name}</h3>
                    <form onSubmit={handelBooking} className='grid grid-cols-1 gap-3 justify-items-center mt-3'>
                        <input type="text" disabled value={format(date, 'PP')} className="input input-bordered w-full max-w-xs" />
                        <select name='slot' className="select select-bordered w-full max-w-xs">
                            {
                                slots.map(slot => <option value={slot}>{slot}</option>)
                            }
                        </select>
                        <input type="text" name='name' disabled value={user.displayName} className="input input-bordered w-full max-w-xs" />
                        <input type="email" name='email' disabled value={user.email} className="input input-bordered w-full max-w-xs" />
                        <input type="number" name='phone' placeholder="Phone Number" className="input input-bordered w-full max-w-xs" />
                        <input type="submit" value="Submit" className="btn w-full max-w-xs" />
                    </form>
                </div>
            </div>
        </div>
    );
};

export default ServiceModal;