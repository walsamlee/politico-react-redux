import { connect } from 'react-redux';
import Parties from '../components/Parties';
import fetchParties from '../actions/partyActions';

const mapStateToProps = (state) => ({
    data: state,
});

const matchDispatchToProps = (dispatch) => {
    return {
        fetchParties: () => {
            dispatch(fetchParties())
        }
    }
}

const PartiesContainer = connect(
    mapStateToProps,
    matchDispatchToProps,
)(Parties)

export default PartiesContainer;