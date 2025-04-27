import React from "react";
import Calculator from "./Calculator"

const operators = ["*", "/", "-", "+"];
let num = "";
let inputResult = [];
let isDecimalUsed = false;

class Display extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      input: [],
      display: "0",
      output: null
    };
    this.handleChange = this.handleChange.bind(this);
    this.handleClear = this.handleClear.bind(this);
    this.cleanArray = this.cleanArray.bind(this);
    
  }
  
  handleChange(event) {
    let value = event.target.value;
    if (num === "" && value === "=") {
      return this.setState({
        output: null
      });
    }
    const isNull = this.state.output === null;
    if (!isNull) {
      num = this.state.output[0];
      this.setState({
        output: null
      })
    }
    
    
    
    if (value === "=") {
      num = "";
      isDecimalUsed = false;
      this.cleanArray(this.state.input);
    }
    
    if (operators.includes(value)) {
      if (operators.includes(num[num.length - 2])) {
        if (operators.includes(num[num.length - 4])) {
          if (num[num.length - 4] === operators[2] && value === operators[2]) {
            num = num.substring(0, num.length - 4) + operators[3] + " ";
          } else {
            num = num.substring(0, num.length - 4) + value + " ";
          }
        } else if (num[num.length - 2] === operators[2] && value === operators[2]) {
          num = num.substring(0, num.length - 2) + operators[3] + " ";
        } else if (value === operators[2]) {
          num +=  value + " "
        } else {
          num = num.substring(0, num.length - 2) + value + " ";
        }
      } else {
        num += " " + value + " ";
        isDecimalUsed = false;
      }
    } else if (value !== "=") {
      if (value === ".") {
        if (!isDecimalUsed) {
          num += value;
          isDecimalUsed = true;
        }
      } else {
        num += value;
      }
    }
    console.log(num)
    inputResult = num.split(" ");
    inputResult = inputResult.filter((elem) => elem !== "");
    inputResult.forEach((elem, index) => {
      if (operators.includes(elem)) {
        inputResult[index] = elem;
      } else if (elem.charAt(elem.length - 2) === "."){
        inputResult[index] = parseFloat(elem).toFixed(1);
      } else {
        inputResult[index] = parseFloat(elem);
      }
    })
    this.setState({
      input: inputResult,
      display: inputResult[inputResult.length - 1]
    })
  }
  
  
  cleanArray(arr) {
    let result = [];
    let negative = 1;
    let isDivision = false;
    arr.forEach((elem, index) => {
      if (operators.includes(elem)) {
        if (operators.includes(arr[index + 1])) {
          if (elem !== operators[2]) {
            negative = -1;
          }
        }
        if (elem === operators[0]) {
          result.push(elem);
        } else if (elem === operators[1]) {
          result.push(operators[0]);
          isDivision = true;
        } else if (elem === operators[2] && arr[index - 1] !== operators[2]) {
          negative = -1;
        }
      } else {
        if (isDivision) {
          result.push(1 / elem * negative);
          negative = 1;
          isDivision = false;
        } else {
          result.push(elem * negative);
          negative = 1;
        }
      }
    });
    this.calculateOutput(result);
  }
  
  
  calculateOutput(arr) {
    let multiplicationIndex = -1;
    if (arr.length === 1) {
      return this.setState({
        output: [arr[0]]
      });
    }
    if (arr.includes(operators[0])) {
      multiplicationIndex = arr.indexOf(operators[0]);
      arr.splice(multiplicationIndex - 1, 3, arr[multiplicationIndex - 1] * arr[multiplicationIndex + 1]);
      this.calculateOutput(arr);
      
    } else {
      arr = arr.reduce((acc, curr) => acc + curr);
      this.calculateOutput([arr]);
    }
  }
  
  handleClear() {
    this.setState({
      input: [],
      display: "0",
      output: null
    });
    num = "";
    isDecimalUsed = false;
  }
  
  render () {
    return (
      <div>
        <div id="formula">{this.state.input}</div>
        <div id="display">{this.state.output === null ? this.state.display : this.state.output}</div>
        <Calculator handleChange={this.handleChange} handleClear={this.handleClear} />
      </div>
    );
  }
}




export default Display