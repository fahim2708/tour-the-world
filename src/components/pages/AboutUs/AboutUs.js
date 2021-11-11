import React from 'react';
import story from '../../../img/about_1.jpg'
import mission from "../../../img/about_2.jpg";
import StatisticsSection from '../../singleComponents/StatisticsSection/StatisticsSection'

const AboutUs = () => {
    return (
        <div>
            <div className='container mx-auto'>
                <h2 className='my-8 text-4xl pl-4 md:pl-0'>About Us</h2>
                <div className='flex flex-col md:flex-row mb-12'>
                    <div className='md:w-1/2 md:mr-4 mb-4 md:mb-0 mx-4 md:mx-0 p-8 glass-effect'>
                        <img src={story} alt='' />
                        <h2 className="text-2xl font-semibold py-4 text-blue-500">Our story</h2>
                        <p className="text-justify">
                            You may be arranging travel for a special interest group (eg a historical society), or a sightseeing tour; a sports tournament (skiing?) or a unique family celebration. Whatever the purpose, we have exceptional prices, and itinerary creation and handling expertise to suit and we'll even send an escort when appropriate.
                        </p>
                    </div>
                    <div className='md:w-1/2 mx-4 md:mx-0 md:ml-4 p-8 glass-effect'>
                        <img src={mission} alt='' />
                        <h2 className="text-2xl font-semibold py-4 text-blue-500">Our Mission</h2>
                        <p className="text-justify">
                            You may be arranging travel for a special interest group (eg a historical society), or a sightseeing tour; a sports tournament (skiing?) or a unique family celebration. Whatever the purpose, we have exceptional prices, and itinerary creation and handling expertise to suit and we'll even send an escort when appropriate.
                        </p>
                    </div>
                </div>
                <StatisticsSection></StatisticsSection>
            </div>
        </div>
    );
};

export default AboutUs;