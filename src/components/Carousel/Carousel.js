import React from 'react';
import first from '../../assets/c-1.png';
import second from '../../assets/c-2.jpg';
import third from '../../assets/c-3.jpg';
import Search from '../Search/Search';
import './Carousel.css'


const Carousel = ({ countries }) => {

    return (
        <div className='container'>
            <div id="carouselExampleIndicators" class="carousel slide">
                <div class="carousel-indicators">
                    <button type="button" data-bs-target="#carouselExampleIndicators" data-bs-slide-to="0" class="active" aria-current="true" aria-label="Slide 1"></button>
                    <button type="button" data-bs-target="#carouselExampleIndicators" data-bs-slide-to="1" aria-label="Slide 2"></button>
                    <button type="button" data-bs-target="#carouselExampleIndicators" data-bs-slide-to="2" aria-label="Slide 3"></button>
                </div>
                <div class="carousel-inner">
                    <div class="carousel-item active">
                        <img src={first} class="d-block w-100 rest-custom" alt="..." />
                    </div>
                    <div class="carousel-item">
                        <img src={second} class="d-block w-100 rest-custom" alt="..." />
                    </div>
                    <div class="carousel-item">
                        <img src={third} class="d-block w-100 rest-custom" alt="..." />
                    </div>
                </div>
                <button class="carousel-control-prev" type="button" data-bs-target="#carouselExampleIndicators" data-bs-slide="prev">
                    <span class="carousel-control-prev-icon" aria-hidden="true"></span>
                    <span class="visually-hidden">Previous</span>
                </button>
                <button class="carousel-control-next" type="button" data-bs-target="#carouselExampleIndicators" data-bs-slide="next">
                    <span class="carousel-control-next-icon" aria-hidden="true"></span>
                    <span class="visually-hidden">Next</span>
                </button>
            </div>

            <Search countries={countries}></Search>
        </div>


    );
};

export default Carousel;