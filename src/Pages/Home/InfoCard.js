import React from 'react';

const InfoCard = ({info, bgColor}) => {
    return (
        <div className={`card card-side shadow-xl px-10 ${bgColor}`}>
            <figure><img src={info.img} alt="Movie" /></figure>
            <div className="card-body text-white">
                <h2 className="card-title">{info.title}</h2>
                <p>{info.description}</p>
            </div>
        </div>
    );
};

export default InfoCard;