import React, { Component } from 'react';
import Loader from '../utils/Loader';
import Party from '../components/Party';

class Parties extends Component {    
    componentDidMount() {
        this.props.fetchParties();
    }
    render() {
        const { data } = this.props;
        return (
            <div className="dashboard">
                <div className="edit-board">
                    <div className="party-view">
                        {
                            data.parties.fetching ?
                            <Loader /> :
                            data.parties.parties.map(party => (
                                <Party key={ party.id } party={ party } />
                            ))
                        }
                    </div>
                </div>
            </div>
        )
    }
}

export default Parties;