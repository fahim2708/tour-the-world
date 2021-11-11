import React from 'react';
import Banner from '../../singleComponents/Banner/Banner';
import FeatureTourSection from '../../singleComponents/FeatureTourSection/FeatureTourSection';
import HikingStyleSection from '../../singleComponents/HikingStyleSection/HikingStyleSection';
import HotelsSection from '../../singleComponents/HotelsSection/HotelsSection';
import OfferSection from '../../singleComponents/OfferSection/OfferSection';
import ServiceSection from '../../singleComponents/ServicesSection/ServiceSection';
import StatisticsSection from '../../singleComponents/StatisticsSection/StatisticsSection';

const Home = () => {
    return (
        <div>
            <Banner></Banner>
            <FeatureTourSection></FeatureTourSection>
            <ServiceSection></ServiceSection>
            <StatisticsSection></StatisticsSection>
            <HotelsSection></HotelsSection>
            <OfferSection></OfferSection>
            <HikingStyleSection></HikingStyleSection>

        </div>
    );
};

export default Home;