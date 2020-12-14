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
      notes = JSON.parse(notesFromStorage);
    }
    return notes;
}

handleSave = (newNoteTitle, newNoteDescription, id) => {
  let allNotesNewList = this.state.allNotes;
  var newValue = {'title': newNoteTitle, 'description': newNoteDescription, 'key': id};
  allNotesNewList.push(JSON.stringify(newValue));
  
  this.setState({allNotes: allNotesNewList});
}

handleUnPin = (noteId)=>{
  let allNotes = this.state.allNotes;

  let oldList = this.state.pinnedNotes;
  let newList = [];

  oldList.forEach(element => {
      newList.push(JSON.parse(element));
  });
  
  let note = newList.filter(x=>x.key === noteId)[0];
  let pinnedNotes = newList.filter(x=>x.key !== noteId);
  
  const newPinnedlNotesList = [];
  
  pinnedNotes.forEach(element => {
    newPinnedlNotesList.push(JSON.stringify(element));
  })

  allNotes.push(JSON.stringify(note));

  this.setState({pinnedNotes: newPinnedlNotesList});
  this.setState({allNotes: allNotes});
}

handleDelete = (noteId, type) =>{
  //pinnedNotes
  if(type === 'p')
  {
      const oldPinnedNotes = this.state.pinnedNotes;
      let newPinnedNotes = [];

      oldPinnedNotes.forEach(element => {
        newPinnedNotes.push(JSON.parse(element));
      });

      const listToReturn = newPinnedNotes.filter(x=>x.key !== noteId);
      let output = [];

      listToReturn.forEach(element => {
        output.push(JSON.stringify(element));
      });

      this.setState({pinnedNotes: output});
}
  else //allNotes
  {
    const oldAllNotes = this.state.allNotes;
    let newAllNotes = [];

    oldAllNotes.forEach(element => {
      newAllNotes.push(JSON.parse(element));
    });

    const listToReturn = newAllNotes.filter(x=>x.key !== noteId);
    let output = [];

    listToReturn.forEach(element => {
      output.push(JSON.stringify(element));
    });

    this.setState({allNotes: output});
  }
  
}

handlePin = (noteId) => {
  let pinnedNotes = this.state.pinnedNotes;

  let oldList = this.state.allNotes;
  let newList = [];

  oldList.forEach(element => {
      newList.push(JSON.parse(element));
  });
  
  let pinnedNote = newList.filter(x=>x.key === noteId)[0];
  let unpinnedNotes = newList.filter(x=>x.key !== noteId);
  
  const newAllNotesList = [];
  
  unpinnedNotes.forEach(element => {
    newAllNotesList.push(JSON.stringify(element));
  })

  pinnedNotes.push(JSON.stringify(pinnedNote));

  this.setState({pinnedNotes: pinnedNotes});
  this.setState({allNotes: newAllNotesList});
}

componentDidUpdate = () => {
  const allNotes = this.state.allNotes;
  const pinnedNotes = this.state.pinnedNotes;
  
  localStorage.setItem('allNotes', JSON.stringify(allNotes));
  localStorage.setItem('pinnedNotes', JSON.stringify(pinnedNotes));
}

  render() { 
    return ( 
      <React.Fragment>
          <nav className="navbar navbar-light bg-dark">
            <span className="navbar-brand mb-0 h1" style={{color: "white"}}><i>Notes</i></span>
          </nav>
            <Main pinnedNotes = {this.state.pinnedNotes} 
            allNotes = {this.state.allNotes} 
            onSave = {this.handleSave} 
            onPin = {this.handlePin} 
            onUnPin = {this.handleUnPin}
            onDelete = {this.handleDelete}
            />
          
      </React.Fragment>
     );
  }
}
 
export default App;