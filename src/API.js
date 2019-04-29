const apiUrl = 'https://sam-politico.herokuapp.com/api/v1/parties';

const getAllParties = () => (
        fetch(apiUrl)
            .then(res => res.json())
    );

const getParty = (id) => (
    fetch(`${apiUrl}/${id}`)
        .then(res => res.json())
);

const API = {
    getAllParties,
    getParty
}

export default API;