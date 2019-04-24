import API from './API';

export const fetchParties = () => {
    return ((dispatch) => {
        dispatch({type: 'GET_PARTIES'})
        API.getAllParties()
            .then(parties => {
                dispatch({
                    type: 'PARTIES_RETURNED',
                    payload: parties.data
                })
            })
            .catch(err => {
                dispatch({
                    type: 'GET_PARTIES_ERROR',
                    payload: err,
                })
            });
    });
}