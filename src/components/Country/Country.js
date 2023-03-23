import React from 'react';
import './Country.css'

const Country = (props) => {
    const { name, population, flags } = props.country;
    const cr = (population / 1000000).toFixed(5);
    return (
        <div>

            <div class="col">
                <div class="card h-100 ">
                    <img src={flags.png} class="card-img-top custom-style" alt="Country Flag" />
                    <div class="card-body custom-body bg-light">
                        <h5 class="card-title">{name.common}</h5>
                        <p class="card-text">Population: {cr}M</p>
                        <button className='btn btn-primary'>Details</button>
                    </div>
                </div>
            </div>

        </div>
    );
};

export default Country;