import React, { useEffect, useState } from 'react';
import Menu from '../components/Menu';
import { getData } from '../services/fetch';
import { generateItems} from '../services/utils';

import './ViewItemsPage.css';


const ViewItemsPage = (props) => {
    const [fishes, setFishes] = useState();

    useEffect(() => {
        const fetchData = async () => {
            setFishes(await getData('/atlas/fish/all'));
        }
        fetchData();
    }, []);

    let fishItems = generateItems(fishes, async () => {
        setFishes(await getData('/atlas/fish/all'));
    });

    return (
        <div>
            <Menu/>
            <div className='Container'>
                {fishItems}
            </div>
        </div>
    );
}

export default ViewItemsPage;