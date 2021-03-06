import React, { Component } from 'react';
import Button from "./Button";
import Inputs from "./Input"
import "./App.css";
import * as math from 'mathjs';


export default class App extends Component {
  constructor(props){
    super(props);
    this.state={
      Input:'',
      result:''
    }
  }
// Just to get value present in Input according to their name (Their name is same as state)
  InputChange=(event)=>({
    [event.target.name]: event.target.value
  })
  // When you press the button the number will be passed as argument and The input field will be updated 
  ButtonNumberHandler=(num)=>{
    this.setState({
      //This is because it might not replace the original Number already present there(There means this.state.Input)
        Input : this.state.Input + num,
        result: ''
    })
  }
// Clear Button Handler will clear the state 
  ClearHandler=()=>{
    this.setState({
      Input : '',
      result: ''
    })
  }

  OperatorHandle=(operator)=>{
    this.setState({
      Input : this.state.Input + operator
    })
  }
// Function which will do calculation of whatever input is there
// (math.evaluate is method for calculation in js)
  calculateValue=()=>{
    try{
      this.setState({
        result : math.evaluate(this.state.Input)
      })}
      catch(error){
        this.setState({
          result : 'syntax error'
        })
      }
  }
//When You Click Equal button It will call CalculateValue Function for Calculation
  EqualHandler=()=>{
    this.setState(this.calculateValue());
  }

  render() {
    return (
      <div className="container body">
        <div className="purple-square-container">
          <div className="purple-square">

        <div>
              <input type="text" className="d-block inputFix firstinput" name="Input" value={this.state.Input} onChange={this.InputChange}></input>
              <input type="text" className="d-block inputFix resultinput" name="result" value={this.state.result} onChange={this.InputChange}></input>
              <button className="btn btn-dark mt-2" onClick={this.ClearHandler}>Clear</button>
        </div>
        <div>
              <button className="btn btn-dark mt-2"onClick={() => this.ButtonNumberHandler(7)}>7</button>
              <button className="btn btn-dark mt-2 ml-2"onClick={() => this.ButtonNumberHandler(8)}>8</button>
              <button className="btn btn-dark mt-2 ml-2"onClick={() => this.ButtonNumberHandler(9)}>9</button>
              <button className="btn btn-dark mt-2 ml-2"onClick={() => this.OperatorHandle('/')}>/</button>

        </div>

        <div>
              <button className="btn btn-dark mt-2" onClick={() => this.ButtonNumberHandler(4)}>4</button>
              <button className="btn btn-dark mt-2 ml-2"onClick={() => this.ButtonNumberHandler(5)}>5</button>
              <button className="btn btn-dark mt-2 ml-2"onClick={() => this.ButtonNumberHandler(6)}>6</button>
              <button className="btn btn-dark mt-2 ml-2"onClick={() => this.OperatorHandle('-')}>-</button>

        </div>

        <div>
              <button className="btn btn-dark mt-2"onClick={() => this.ButtonNumberHandler(1)}>1</button>
              <button className="btn btn-dark mt-2 ml-2"onClick={() => this.ButtonNumberHandler(2)}>2</button>
              <button className="btn btn-dark mt-2 ml-2"onClick={() => this.ButtonNumberHandler(3)}>3</button>
              <button className="btn btn-dark mt-2 ml-2"onClick={() => this.OperatorHandle('*')}>*</button>
        </div>

        <div>
              <button className="btn btn-dark mt-2 widthbutton"onClick={() => this.ButtonNumberHandler(0)}>0</button>
              <button className="btn btn-dark mt-2 ml-2 custom" onClick={() => this.EqualHandler("=")}>=</button>
              <button className="btn btn-dark mt-2 ml-2 custom"onClick={() => this.OperatorHandle('+')}>+</button>
        </div>

        </div>
        </div>
      </div>
    )
  }
}
