import React, { Component } from 'react';
import Party from '../components/Party';

class Parties extends Component {
    constructor(props) {
        super(props);
        this.componentDidMount = this.componentDidMount.bind(this);
    }
    componentDidMount() {
        this.props.fetchParties();
    }
    render() {
        const { data } = this.props;
        return (
            <div className="dashboard">
                <div className="edit-board">
                    {
                        data.parties.fetching ?
                        <h3>Loading Parties...</h3> :
                        data.parties.parties.map(party => (
                            <Party key={ party.id } party={ party } col={3} />
                        ))
                    }
                </div>
            </div>
        )
    }
}

export default Parties;