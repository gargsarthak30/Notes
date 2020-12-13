import React, { Component } from 'react';

class NewNotes extends Component {

    state = {
        showTextArea: false,
        newNoteValue: ''
    }
    
    getVisibilityValue = () =>{
        return this.state.showTextArea === true ? 'visible' : 'hidden';
    }

    handleNewNote = ()=>{
        this.state.showTextArea === true ? this.setState({showTextArea: false}) : this.setState({showTextArea: true});
    }

    handleChange = (event)=>{
        this.setState({newNoteValue: event.target.value});
    }

    closeTextArea = () => {
        this.setState({showTextArea: false});
        this.setState({newNoteValue: ""});
    }

    render() { 
        
        return ( 
            <React.Fragment>
                <h2>Add New Note</h2>
                <button className="btn btn-primary btn-lg btn-block" onClick={this.handleNewNote} style={{marginTop: 20}}>Add Note +</button>
                <br/>
                <div style = {{visibility: this.getVisibilityValue()}}>
                    <textarea className="form-control" rows="13" onChange = {this.handleChange} value={this.state.newNoteValue}></textarea>
                    <button className="btn btn-success btn-lg btn-block" style={{marginTop: 20}} onClick={()=> {this.props.onSave(this.state.newNoteValue, Math.floor(Math.random() * 1000)); this.closeTextArea();}}>Save</button>
                </div>
            </React.Fragment>
        );
    }
}
 
export default NewNotes;