import React from 'react';
import ContactUs from './ContactUs';
import ExAppoinment from './ExAppoinment';
import Footer from './Footer';
import Info from './Info';
import Main from './Main';
import MakeAppoinment from './MakeAppoinment';
import Reviews from './Reviews';
import Services from './Services';
const Home = () => {
    return (
        <div className='mx-14'>
            <Main></Main>
            <Info></Info>
            <Services></Services>
            <ExAppoinment></ExAppoinment>
            <MakeAppoinment></MakeAppoinment>
            <Reviews></Reviews>
            <ContactUs></ContactUs>
            <Footer></Footer>
        </div>
    );
};

export default Home;