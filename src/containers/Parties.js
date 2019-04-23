import React, { Component } from 'react';

import Party from '../components/Party';
import API from '../API';

class Parties extends Component {
    state = {
        isLoading: true,
        parties: []
    }

    componentDidMount() {
        API.getAllParties()
            .then(parties => {
                this.setState({
                    parties: parties.data,
                    isLoading: false
                })
            })
            .catch(error => console.log(`Error: ${error}`));
    }

    render() {
        return (
            <div className="dashboard">
                <div className="edit-board">
                <h3>All Registered Parties</h3>
                    {
                        this.state.isLoading ? 
                            <h3>Loading Parties...</h3> :
                            this.state.parties.map(party => (
                                <Party key={ party.id } party={ party } col={3} />
                            ))
                    }
                </div>
                    
            </div>
        );
    }
}

export default Parties;