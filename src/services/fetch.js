import { authenticationService } from './authentication';

export const getData = async (uri) => {
    let res = await fetch(process.env.REACT_APP_URI + uri)
        .catch(err => console.log(err));
    if (res && res.status === 200) {
        return res.json();
    } else {
        alert('Wystąpił błąd podczas pobierania danych.');
    }
}

export const postData = async (uri, body) => {
    await fetch(process.env.REACT_APP_URI + uri, {
            headers: {
                'Content-Type': 'application/json',
                'Authorization': `Bearer ${authenticationService.authToken}`
            },
            method: 'POST',
            body: JSON.stringify(body)
        })
        .then(res => {
            if (res.status !== 201) {
                alert('Wystąpił błąd podczas dodawania danych.');
                console.log(res);
            }
        })
        .catch(err => console.log(err));
}

export const putData = async (uri, body) => {
    await fetch(process.env.REACT_APP_URI + uri, {
            headers: {
                'Content-Type': 'application/json',
                'Authorization': `Bearer ${authenticationService.authToken}`
            },
            method: 'PUT',
            body: JSON.stringify(body)
        })
        .then(res => {
            if (res.status !== 200) {
                alert('Wystąpił błąd podczas dodawania danych.');
                console.log(res);
            } else {
                alert('Pomyślnie zmieniono dane!');
            }
        })
        .catch(err => console.log(err));
}