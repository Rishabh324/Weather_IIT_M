import React from 'react'
import BKG from '../assets/left-bkg.jpg'

const Left = () => {
    return (
        <div className='left' style={{ backgroundImage: `url(${BKG})` }}>
            <div className='left-utils'>
                <i className="fa-solid fa-square-plus"></i>
                <i className="fa-solid fa-toggle-off"></i>
            </div>
            <div className='country-details'>
                <div className='details'>
                    <p><i className="fa-solid fa-location-arrow"></i> Haryana, India</p>
                    <p><i className="fa-regular fa-sun"></i> 07:00</p>
                </div>
                <div className='details'>
                    <p>Today 5 July</p>
                    <p><i className="fa-regular fa-sun"></i> 19:00</p>
                </div>
            </div>
            <div id="carouselExample" className="carousel slide">
                <div className="carousel-inner">
                    <div className="carousel-item active" style={{ textAlign: 'center' }}>
                        <p className='temp-para' style={{ fontSize: '5rem' }}>30°</p>
                        <p><i className="fa-solid fa-cloud"></i> Cloudy</p>
                    </div>
                </div>
                <button className="carousel-control-prev" type="button" data-bs-target="#carouselExample" data-bs-slide="prev">
                    <span className="carousel-control-prev-icon" aria-hidden="true"></span>
                    <span className="visually-hidden">Previous</span>
                </button>
                <button className="carousel-control-next" type="button" data-bs-target="#carouselExample" data-bs-slide="next">
                    <span className="carousel-control-next-icon" aria-hidden="true"></span>
                    <span className="visually-hidden">Next</span>
                </button>
            </div>
        </div>
    )
}

export default Left;