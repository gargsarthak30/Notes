import React, { Component } from 'react';


class AllNotes extends Component {
    
    render() { 
        
        return ( 
            <React.Fragment>
                <h2>All Notes</h2>
                <ul className="list-group list-group-flush">
                    {this.props.notes.map((x, index) => 
                    <div key = {JSON.parse(x).key}>
                        <span><li className="list-group-item" >{JSON.parse(x).value}<button style={{float:"right"}} className="btn" onClick={()=>this.props.onPin(JSON.parse(x).key)}><i className="fa fa-thumb-tack"></i></button></li></span>
                    </div>
                    )}
                    
                </ul>
            </React.Fragment>
        );
    }
}
 
export default AllNotes;