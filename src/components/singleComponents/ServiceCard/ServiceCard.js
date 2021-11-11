import React from 'react';

const ServiceCard = (props) => {
    const { service, shortDesc, img } = props.service
    return (
        <div className="bg-white p-4 text-center rounded-md">
            <img className="mx-auto" src={img} alt="" />
            <div>
                <h2 className="text-2xl py-8">{service}</h2>
                <p>{shortDesc}</p>
            </div>
        </div>
    );
};

export default ServiceCard;