import React, { Component } from 'react';

class NewNotes extends Component {

    state = {
        showNewNoteSection: false,
        description: '',
        title: ''
    }
    
    getVisibilityValue = () =>{
        return this.state.showNewNoteSection === true ? 'visible' : 'hidden';
    }

    handleNewNote = ()=>{
        this.state.showNewNoteSection === true ? this.setState({showNewNoteSection: false}) : this.setState({showNewNoteSection: true});
    }

    handleDescription = (event)=>{
        this.setState({description: event.target.value});
    }

    handleTitle = (event)=>{
        this.setState({title: event.target.value});
    }

    closeTextArea = () => {
        this.setState({showNewNoteSection: false});
        this.setState({description: ""});
        this.setState({title: ""});
    }

    render() {     
        return ( 
            <React.Fragment>
                <h2>Add New Note</h2>
                <button className="btn btn-primary btn-lg btn-block" onClick={this.handleNewNote} style={{marginTop: 20}}>Add Note +</button>
                <br/>
                <div style = {{visibility: this.getVisibilityValue()}}>
                    <input className="form-control" type="text" placeholder="Title" style={{marginBottom: 10}} onChange = {this.handleTitle} value={this.state.title}></input>
                    <textarea className="form-control" rows="13" placeholder="Description" onChange = {this.handleDescription} value={this.state.description}></textarea>
                    <button className="btn btn-success btn-lg btn-block" style={{marginTop: 20}} onClick={()=> {this.props.onSave(this.state.title, this.state.description, Math.floor(Math.random() * 1000)); this.closeTextArea();}}>Save</button>
               </div>
            </React.Fragment>
        );
    }
}
 
export default NewNotes;