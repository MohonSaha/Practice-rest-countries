import React from 'react';
import './Country.css'

const Country = (props) => {
    const { name, population, flags, region, subregion, capital } = props.country;
    const cr = (population / 1000000).toFixed(5);
    return (
        <div>

            <div class="col">
                <div class="card h-100 rounded">
                    <img src={flags.png} class="card-img-top custom-style" alt="Country Flag" />
                    <div class="card-body custom-body bg-light">
                        <h5 class="card-title">{name.common}</h5>
                        <p class="card-text">Population: {cr}M</p>
                        <p>Region: {region}</p>
                        <p>Sub-Region: {subregion}</p>
                        <p>Capital: {capital}</p>
                    </div>
                </div>
            </div>

        </div>
    );
};

export default Country;