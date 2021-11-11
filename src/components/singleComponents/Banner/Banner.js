import React from 'react';
import { Carousel } from "react-carousel-minimal";
import slider01 from './SliderImage/slider01.jpg';
import slider02 from './SliderImage/slider02.jpg';

const Banner = () => {
    const data = [
        {
            image: `${slider01}`,
            caption: `
             <div class="slider-caption">
                 <h1>Tour The World</h1>
            </div>
            `,
        },
        {
            image: `${slider02}`,
            caption: `
             <div class="slider-caption">
                 <h1>Tour The World</h1>
            </div>
             `,
        },
    ];

    const captionStyle = {
        fontSize: "3em",
        fontWeight: "bold",
    };
    const slideNumberStyle = {
        fontSize: "20px",
        fontWeight: "bold",
    };
    return (
        <div>
            <Carousel
                data={data}
                time={3000}
                width='100%'
                height='700px'
                captionStyle={captionStyle}
                slideNumber={true}
                slideNumberStyle={slideNumberStyle}
                captionPosition='center'
                automatic={false}
                dots={true}
                pauseIconColor='white'
                pauseIconSize='40px'
                slideBackgroundColor='darkgrey'
                slideImageFit='cover'
                thumbnailWidth='100px'
                style={{
                    textAlign: "center",
                    maxWidth: "100%",
                    maxHeight: "700px",
                }}
            />
        </div>
    );
};

export default Banner;