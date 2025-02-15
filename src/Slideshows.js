import React from 'react';
import { LazyLoadImage } from 'react-lazy-load-image-component';
import { Slide } from 'react-slideshow-image';
import { getSiteBaseURL } from './Constants';

const SLIDE_PATH_PREFIX = 'slides/';

function createSingleSlide(images, slidename) {
    let urlsrc = getSiteBaseURL() + "/" + images[slidename];
    let image = new Image();
    image.src = urlsrc;
    return (
        <div className="each-slide">
            <LazyLoadImage
                alt={image.alt}
                src={urlsrc}
                /*
                height={image.height}
                width={image.width}
                */
            ></LazyLoadImage>
        </div>
    );
}

function generateSlides(images) {
    var slides = [];
    for(let i = 0; i < images.length; i++) {
        slides[i] = createSingleSlide(images, i);
    }
    return slides;
}

export function createSlideShowObject(images) {
    var ret = (
        <Slide easing="ease" arrows={false} canSwipe={false}>
            {generateSlides(images)}
        </Slide>);
    return ret;
}