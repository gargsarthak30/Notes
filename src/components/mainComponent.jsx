import React, { Component } from 'react';
import NewNotes from './newNotesComponent';
import AllNotes from './allNotesComponent';
import PinnedNotes from './pinnedNotesComponent';

class Main extends Component {
    
    render() { 
        return ( 
          <React.Fragment>
            <div className="container">
              <div className="row">
                <div className="col-sm m-2">
                  <NewNotes onSave = {this.props.onSave} />
                </div>
    
                <div className = "col-sm m-2">
                  <PinnedNotes notes = {this.props.pinnedNotes} />
                  <hr />
                  <AllNotes notes = {this.props.allNotes} onPin = {this.props.onPin}/>
                </div>
              </div>
            </div>  
          </React.Fragment>
         );
      }
}
 
export default Main;