import Item from '../components/Item';
import { authenticationService } from './authentication';
import history from '../services/history';

export const generateItems = (data, updateState) => {
    if (!data || data.length === 0) 
        return;

    let items = [];

    data.forEach(fish => {
        items.push(
            <Item
                key={Math.random()}
                name={fish.name}
                species={fish.species}
                waterType={fish.waterType}
                protectionPeriod={fish.protectionPeriod}
                protectionLength={fish.protectionLength}
                imageUrl={fish.imageUrl}
                description={fish.description}
                onDelete={() => deleteRecord(fish.id, updateState)}
                onEdit={() => history.push({
                    pathname: '/edit',
                    state: {
                        fish: fish
                    }
                })}
            />
        )
    });

    return items;
}

export const deleteRecord = async (id, updateState) => {
    if (window.confirm('Na pewno chcesz usunąć rekord?')) {
        await fetch(process.env.REACT_APP_URI + `/admin/fish/${id}`, {
                method: 'DELETE',
                headers: {
                    'Authorization': `Bearer ${authenticationService.authToken}`
                }
            })
            .catch(err => console.log(err));
        await updateState();
    }
}
