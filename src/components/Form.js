import React, {Component} from 'react';
import './Form.css';


class Form extends Component {
    constructor(){
        super ();
        this.addWork=this.addWork.bind(this);
    }

    addWork() {
                // console.log(this.textInput.value);

        if(this.textInput.value!==''){
                this.props.addWork(this.textInput.value);
                this.textInput.value='';
                this.textInput.focus();  
        }           
    }

    render() {
       return (
        <div className="listForm">
        <input
        ref={input => {this.textInput = input}} 
        placeholder="Ingresa una tarea"
        type="text"/>
        <button 
        onClick={this.addWork}
        >
            <img src={require('../images/icons8-plus-64.png')}/>
        </button>

    </div> 
       )   
    }
}

export default Form
