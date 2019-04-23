import React, { Component } from 'react';
import { bindActionCreators } from 'redux';
import { connect } from 'react-redux';

class partyList extends Component {
    createListItem() {
        return this.props.parties.map((party) => {
            return (
                <li key={party.id}>{party.name}</li>
            )
        })
    }
    render() {
        return (
            <ul>
                {this.createListItem()}
            </ul>
        );
    }
}

const mapStateToProps = (state) => {
    return {
        parties: state.parties
    }
}

export default connect(mapStateToProps)(partyList);