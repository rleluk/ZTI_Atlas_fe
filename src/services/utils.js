import Item from '../components/Item';
import {getData} from './fetch';

export const generateItems = (data, setState, uri) => {
    if (!data || data.length === 0) 
        return;

    let items = [];

    data.forEach(fish => {
        items.push(
            <Item
                key={Math.random()}
                name={fish['name']}
                species={fish['species']}
                waterType={fish['waterType']}
                protectionPeriod={fish['protectionPeriod']}
                protectionLength={fish['protectionLength']}
                imageUrl={fish['imageUrl']}
                description={fish['description']}
                onDelete={() => deleteRecord(fish['id'], setState, uri)}
            />
        )
    });

    return items;
}


export const deleteRecord = async (id, setState, updateStateUri) => {
    if (window.confirm('Na pewno chcesz usunąć rekord?')) {
        await fetch(process.env.REACT_APP_URI + `/fish/${id}`, {method: 'DELETE'})
            .catch(err => console.log(err));
        setState(await getData(updateStateUri));
    }
}
