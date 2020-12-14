import React, { Component } from 'react';


class AllNotes extends Component {
    
    render() { 
        
        return ( 
            <React.Fragment>
                <h2>All Notes</h2>
                <ul className="list-group list-group-flush">
                    {this.props.notes.map((x, index) => 
                    <div key = {JSON.parse(x).key}>
                        <div>
                        <li className="list-group-item card">
                            <h6 className="card-header">
                                {JSON.parse(x).title}
                                <button style={{float:"right"}} className="btn" onClick={()=>this.props.onDelete(JSON.parse(x).key, 'a')}><i className="fa fa-archive"></i></button>
                                <button style={{float:"right"}} className="btn" onClick={()=>this.props.onPin(JSON.parse(x).key)}><i className="fa fa-plus-square"></i></button>
                            </h6>
                            
                            <div className="card-body">
                                {JSON.parse(x).description}
                            </div>
                        </li>
                    </div>
                    </div>
                    )}
                    
                </ul>
            </React.Fragment>
        );
    }
}
 
export default AllNotes;