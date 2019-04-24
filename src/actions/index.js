export const selectParty = (party) => {
    console.log('Party selected: ', party.name);
    return {
        type: 'PARTIES_SELECTED',
        payload: party,
    }
}