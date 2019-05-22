import { connect } from 'react-redux';
import fetchUser from '../../actions/authAction';
import Login from '../../components/Login';

const mapStateToProps = (state) => ({
    data: state,
});

const mapDispatchToProps = (dispatch) => {
    return {
        fetchUser: (userData) => {
            dispatch(fetchUser(userData))
        }
    }
}
const AuthLogin = connect(
    mapStateToProps,
    mapDispatchToProps
)(Login);

export default AuthLogin;
