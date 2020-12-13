import React, { Component } from 'react';

class PinnedNotes extends Component {
   render() { 
        return ( 
            <React.Fragment>
                <h2>Pinned Notes</h2>
                <ul className="list-group list-group-flush">
                {this.props.notes.map((x, index) =>  
                <div key = {JSON.parse(x).key}>
                <span><li className="list-group-item">{JSON.parse(x).value}
                <button style={{float:"right"}} className="btn" onClick={()=>this.props.onDelete(JSON.parse(x).key, 'p')}><i className="fa fa-archive"></i></button>
                <button style={{float:"right"}} className="btn" onClick={()=>this.props.onUnPin(JSON.parse(x).key)}><i className="fa fa-minus-square"></i></button>
                </li></span>
                </div>
                )}
                </ul>
            </React.Fragment>
        );
    }
}
 
export default PinnedNotes;