import { authenticationService } from '../services/authentication';
import './Item.css';


const Item = (props) => {
    const {name, species, waterType, protectionLength, protectionPeriod,
        description, imageUrl, onDelete, onEdit} = props;

    return (
        <div className='FishBox'>
            {
                authenticationService.checkAuthorization() ?
                <div className='ButtonContainer'>
                    <button className='Button'onClick={onEdit}>
                        Edytuj
                    </button>
                    <button className='Button' onClick={onDelete}>
                        Usuń
                    </button>
                </div> : <></>
            }
            <div className='FishImage'>
                <img alt='fish' src={imageUrl}></img>
            </div>
            <div className='FishDescripton'>
                <h2 className='FishName'> {name} </h2>
                <b>Gatunek:</b> {species ? species : 'Nieznany'} <br/>
                <b>Woda:</b> {waterType ? waterType : 'Nieznany'} <br/>
                <b>Wymiar ochronny:</b> {protectionLength ? protectionLength : 'Brak'} <br/>
                <b>Okres ochronny:</b> {protectionPeriod ? protectionPeriod : 'Brak'} <br/>
                <br/>
                {description ? description : 'Brak opisu'} 
            </div>
        </div>
    );
}

export default Item;
