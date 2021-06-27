import { useState } from 'react';


const EditFish = (props) => {
    const fish = props.fish;
    const id = fish.id;

    const [name, setName] = useState(fish.name);
    const [species, setSpecies] = useState(fish.species);
    const [waterType, setWaterType] = useState(fish.waterType);
    const [protectionLength, setProtectionLength] = useState(fish.protectionLength);
    const [protectionPeriod, setProtectionPeriod] = useState(fish.protectionPeriod);
    const [imageUrl, setImageUrl] = useState(fish.imageUrl);
    const [description, setDescription] = useState(fish.description);


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
                                id, name, species, waterType, protectionLength, protectionPeriod, imageUrl, description
                            });
                        }
                    }
                }>
                    Edytuj rybę
                </button>
            </form>
        </div>
    );
}

export default EditFish;