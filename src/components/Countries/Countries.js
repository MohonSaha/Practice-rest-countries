import React, { useEffect, useState } from 'react';
import Carousel from '../Carousel/Carousel';
import Country from '../Country/Country';

const Countries = () => {
    const [countries, setCountries] = useState([]);
    useEffect(() => {
        fetch('https://restcountries.com/v3.1/all')
            .then(res => res.json())
            .then(data => setCountries(data))
    }, [])
    return (
        <div className='container-fluid'>
            <Carousel countries={countries}></Carousel>

            <div className="row row-cols-1 row-cols-md-3 gy-5">
                {
                    countries.map(country => <Country country={country}></Country>)
                }
                
            </div>
        </div>

    );
};

export default Countries;