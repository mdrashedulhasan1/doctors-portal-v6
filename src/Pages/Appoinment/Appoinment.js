import React from 'react';
import Footer from '../Home/Footer';
import AvailableServices from './AvailableServices';
import SelectDay from './SelectDay';

const Appoinment = () => {
    const [date, setDate] = React.useState(new Date());
    return (
        <div className='mx-12'>
            <SelectDay date={date} setDate={setDate}></SelectDay>
            <AvailableServices date={date} setDate={setDate}></AvailableServices>
            <Footer></Footer>
        </div>
    );
};

export default Appoinment;