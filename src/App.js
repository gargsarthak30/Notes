import React, { Component } from 'react';
import Main from './components/mainComponent';

class App extends Component {
  
  state = { 
    pinnedNotes: [],
    allNotes: []
   }

  componentDidMount = ()=>{
    this.setState({allNotes: this.getAllNotes()});
    this.setState({pinnedNotes: this.getPinnedNotes()});
  }

getAllNotes = ()=>{
    let notes = [];
    const notesFromStorage = localStorage.getItem('allNotes');
    if(notesFromStorage !== null)
    {
      notes = JSON.parse(notesFromStorage);
    }
    return notes;
}

getPinnedNotes = ()=>{
  let notes = [];
  const notesFromStorage = localStorage.getItem('pinnedNotes');
    if(notesFromStorage !== null)
    {
      notes = notesFromStorage.split(',');
    }
    return notes;
}

handleSave = (newNote, id) => {
  let allNotesNewList = this.state.allNotes;
  var newValue = {'value': newNote, 'key': id};
  allNotesNewList.push(JSON.stringify(newValue));
  
  this.setState({allNotes: allNotesNewList});
}

handlePin = (noteId) => {
  console.log('clicked: ', noteId);
}

componentDidUpdate = () => {
  const allNotes = this.state.allNotes;
  const pinnedNotes = this.state.pinnedNotes;
  
  localStorage.setItem('allNotes', JSON.stringify(allNotes));
  localStorage.setItem('pinnedNotes', pinnedNotes);
}

  render() { 
    return ( 
      <React.Fragment>
          <nav className="navbar navbar-light bg-dark">
            <span className="navbar-brand mb-0 h1" style={{color: "white"}}><i>Notes</i></span>
          </nav>
            <Main pinnedNotes = {this.state.pinnedNotes} allNotes = {this.state.allNotes} onSave = {this.handleSave} onPin = {this.handlePin}/>
          
      </React.Fragment>
     );
  }
}
 
export default App;