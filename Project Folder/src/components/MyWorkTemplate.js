import {React, useState, useEffect} from 'react'
import { ImageSliderInfo } from './ImageSliderInfo'
import '../styles/MyWorkTemplate.css'

import {FaArrowCircleRight, FaArrowCircleLeft} from 'react-icons/fa'


export const MyWorkTemplate = () => {

    useEffect(() => {
        window.scrollTo(0, 0)
    })

    /* How many images are availible */
    const length = ImageSliderInfo.length;

    /* Current is the current index of the ImageSliderInfo array */
    const [current, setCurrent] = useState(0);
    
    const nextImage = () => {
        setCurrent(current === length - 1 ? 0 : current + 1 )
    }

    const previousImage = () => {
        setCurrent(current === 0 ? length - 1 : current - 1 )
    }

    /* Check if ImageSliderInfo is returning an array or if the array that is returned is greater than 0 */
    if(!Array.isArray(ImageSliderInfo) || length <= 0){
        return null
    }

  return (
    <div className='imageSliderContainer'>

        <div className='arrowContainer'>
            <FaArrowCircleRight className='rightArrow' onClick={nextImage}/>
            <FaArrowCircleLeft className='leftArrow' onClick={previousImage}/>
        </div>

        {/* map all the images from ImageSliderInfo into a div */}
        {ImageSliderInfo.map((image, index) => {
            return (
                <div key={image.imageKey} className={index === current ? 'image active' : 'image'} >
                    {index === current && (<img src={image.image} alt='my img' className='imageSrc'/>)}  {/* If the image index matches the the current index, render the image */}
                </div>
            )
        })}
    </div>
)
}