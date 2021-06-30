import React from 'react';
import Menu from '../components/Menu';
import EditFish from '../components/EditFish';
import { putData } from '../services/fetch';


const updateFish = (fishDetails) => {
    if(window.confirm(`Na pewno chcesz zaktualizować dane ryby ${fishDetails.name}?`)) {
        const body = {
            name: fishDetails.name,
            species: fishDetails.species,
            waterType: fishDetails.waterType,
            protectionLength: fishDetails.protectionLength,
            protectionPeriod: fishDetails.protectionPeriod,
            imageUrl: fishDetails.imageUrl,
            description: fishDetails.description
        }
        putData(`/admin/fish/${fishDetails.id}`, body);
        
    }
}

const EditItemPage = (props) => {
    return (
        <div>
            <Menu/>
            <div className='FormContainer'>
                <div className='AddItems'>
                    <EditFish
                        fish={props.location.state.fish}
                        onClick={updateFish}
                    /> 
                </div>
            </div>
        </div>
    );
}

export default EditItemPage;