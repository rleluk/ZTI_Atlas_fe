import { useState } from 'react';
import './SearchForm.css'


const SearchForm = (props) => {
    const [name, setName] = useState('');
    const [species, setSpecies] = useState('');
    const [waterType, setWaterType] = useState('');

    const resetValues = () => {
        setName('');
        setSpecies('');
        setWaterType('');
    };

    return (
        <form className='SearchForm'>
            <div>
                <input placeholder='Nazwa ryby' type='text' value={name} onChange={event => setName(event.target.value)}/>
                <input placeholder='Gatunek ryby' type='text' value={species} onChange={event => setSpecies(event.target.value)}/>
                <input placeholder='Rodzaj wód' type='text' value={waterType} onChange={event => setWaterType(event.target.value)}/>
            </div>
            <button 
                onClick={event => {
                    event.preventDefault();
                    props.onSearch(name, species, waterType);
                }
            }> 
                Wyszukaj 
            </button>
            <button 
                onClick={event => {
                    event.preventDefault();
                    resetValues();
                    props.onSearch('', '', '');
                }
            }>
                Wyczyść
            </button>
        </form>
    );
}

export default SearchForm;