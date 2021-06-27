import { useState } from 'react';
import './CreateFish.css';


const CreateFish = (props) => {
    const [name, setName] = useState('');
    const [species, setSpecies] = useState('');
    const [waterType, setWaterType] = useState('');
    const [protectionLength, setProtectionLength] = useState('');
    const [protectionPeriod, setProtectionPeriod] = useState('');
    const [imageUrl, setImageUrl] = useState('');
    const [description, setDescription] = useState('');

    const resetValues = () => {
        setName('');
        setSpecies('');
        setWaterType('');
        setProtectionLength('');
        setProtectionPeriod('');
        setImageUrl('');
        setDescription('');
    };

    return (
        <div className='AddItem'>
            <form>
                <input 
                    type='text' 
                    value={name}
                    onChange={event => setName(event.target.value)}
                    required
                    placeholder={'Nazwa'}
                />
                <input 
                    type='text' 
                    value={species}
                    onChange={event => setSpecies(event.target.value)}
                    required
                    placeholder={'Gatunek'}
                />
                <input 
                    type='text' 
                    value={waterType}
                    onChange={event => setWaterType(event.target.value)}
                    placeholder={'Rodzaj wód'}
                />
                <input 
                    type='text' 
                    value={protectionLength}
                    onChange={event => setProtectionLength(event.target.value)}
                    placeholder={'Wymiar ochronny'}
                />
                <input 
                    type='text' 
                    value={protectionPeriod}
                    onChange={event => setProtectionPeriod(event.target.value)}
                    placeholder={'Okres ochronny'}
                />
                <input 
                    type='text' 
                    value={imageUrl}
                    onChange={event => setImageUrl(event.target.value)}
                    placeholder={'Adres url zdjęcia ryby'}
                />
                <textarea 
                    value={description}
                    onChange={event => setDescription(event.target.value)}
                    placeholder={'Opis'}
                />

                <button 
                    onClick={event => {
                        if (name && species) {
                            event.preventDefault();
                            props.onClick({
                                name, species, waterType, protectionLength, protectionPeriod, imageUrl, description, resetValues
                            });
                        }
                    }
                }>
                    Dodaj rybę
                </button>
            </form>
        </div>
    );
}

export default CreateFish;