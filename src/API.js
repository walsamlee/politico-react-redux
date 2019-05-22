const apiUrl = 'https://sam-politico.herokuapp.com/api/v1/parties';
const authUrl = 'https://sam-politico.herokuapp.com/api/v1/auth/login';

const getAllParties = () => (
        fetch(apiUrl)
            .then(res => res.json())
    );

const getParty = (id) => (
    fetch(`${apiUrl}/${id}`)
        .then(res => res.json())
);

const authLogin = (userData) => (    
    fetch(authUrl, {
        method: 'POST',
        body: JSON.stringify(userData),
        headers: {
          'Content-Type': 'application/json',
        },
    })
        .then(res => res.json())
)

const API = {
    getAllParties,
    getParty,
    authLogin,
}

export default API;