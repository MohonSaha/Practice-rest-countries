import React from 'react';
import './Search.css'

const Search = ({ countries }) => {
    return (
        <div>

            <div className='parent-container my-5'>
                <div class="input-group mb-3 custom-input w-100">
                    <input type="text" class="form-control" placeholder="Search here" aria-label="Recipient's username" aria-describedby="button-addon2" />
                    <button class="btn btn-outline-primary" type="button" id="button-addon2">Button</button>
                </div>

                <div className='d-flex justify-content-around'>
                    <div class="dropdown custom-input">
                        <button class="btn btn-secondary dropdown-toggle" type="button" data-bs-toggle="dropdown" aria-expanded="false">
                            Select Sort Method
                        </button>
                        <ul class="dropdown-menu">
                            <li><button class="dropdown-item" type="button">Name</button></li>
                            <li><button class="dropdown-item" type="button">Population</button></li>
                        </ul>
                    </div>
                    <div>
                        <h3>Available: {countries.length} </h3>
                    </div>
                </div>
            </div>
        </div>
    );
};

export default Search;