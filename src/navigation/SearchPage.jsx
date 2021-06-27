import React, { useEffect, useState } from 'react';
import Menu from '../components/Menu';
import SearchForm from '../components/SearchForm';
import { generateItems } from '../services/utils';
import './SearchPage.css';


const SearchPage = (props) => {
    const [fishes, setFishes] = useState();

    const fetchFishes = async (name = '', species = '', waterType = '') => {
        const query = `/fish?name=${name}&species=${species}&waterType=${waterType}`
        await fetch(process.env.REACT_APP_URI + query)
            .then(res => res.json())
            .then(data => setFishes(data))
            .catch(err => console.log(err));
    }

    useEffect(() => {
        fetchFishes();
    }, []);

    return (
        <div>
            <Menu/>
            <div className='SearchContainer'>
                <SearchForm onSearch={fetchFishes}/>
            </div>
            <div className='Container'>
                {generateItems(fishes, fetchFishes)}
            </div>
        </div>
    );
}

export default SearchPage;