import React, { Component } from 'react';

class PinnedNotes extends Component {
    state = {  }
    render() { 
        return ( 
            <React.Fragment>
                <h2>Pinned Notes</h2>
                <ul className="list-group list-group-flush">
                {this.props.notes.map((x, index) => <li className="list-group-item" key= {JSON.parse(x).key}>{JSON.parse(x).value}</li>)}
                </ul>
            </React.Fragment>
        );
    }
}
 
export default PinnedNotes;