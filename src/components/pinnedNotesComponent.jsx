import React, { Component } from 'react';

class PinnedNotes extends Component {
    state = {  }
    render() { 
        return ( 
            <React.Fragment>
                <h2>Pinned Notes</h2>
                <ul className="list-group list-group-flush">
                {this.props.notes.map(x => <li className="list-group-item" key= {x}>{x}</li>)}
                </ul>
            </React.Fragment>
        );
    }
}
 
export default PinnedNotes;