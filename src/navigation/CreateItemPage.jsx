import React from 'react';
import Menu from '../components/Menu';
import CreateFish from '../components/CreateFish';
import { postData } from '../services/fetch';
import './CreateItemPage.css';


const addFish = (fishDetails) => {
    if(window.confirm('Na pewno chcesz dodać nową rybę?')) {
        const body = {
            name: fishDetails.name,
            species: fishDetails.species,
            waterType: fishDetails.waterType,
            protectionLength: fishDetails.protectionLength,
            protectionPeriod: fishDetails.protectionPeriod,
            imageUrl: fishDetails.imageUrl,
            description: fishDetails.description
        }
        postData('/fish', body);
        fishDetails.resetValues();
    }
}

const CreateItemPage = (props) => {
    return (
        <div>
            <Menu/>
            <div className='FormContainer'>
                <div className='AddItems'>
                    <CreateFish
                        onClick={addFish}
                    />
                </div>
            </div>
        </div>
    );
}

export default CreateItemPage;