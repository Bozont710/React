const Calculator = (props) => {
  
  return (
    <div id="calculator-pad">
      <button id="clear" value="AC" onClick={props.handleClear}>AC</button>
      <button id="divide" value="/" onClick={props.handleChange}>/</button>
      <button id="multiply" value="*" onClick={props.handleChange}>X</button>
      <button id="seven" value="7" onClick={props.handleChange}>7</button>
      <button id="eight" value="8" onClick={props.handleChange}>8</button>
      <button id="nine" value="9" onClick={props.handleChange}>9</button>
      <button id="subtract" value="-" onClick={props.handleChange}>-</button>
      <button id="four" value="4" onClick={props.handleChange}>4</button>
      <button id="five" value="5" onClick={props.handleChange}>5</button>
      <button id="six" value="6" onClick={props.handleChange}>6</button>
      <button id="add" value="+" onClick={props.handleChange}>+</button>
      <button id="one" value="1" onClick={props.handleChange}>1</button>
      <button id="two" value="2" onClick={props.handleChange}>2</button>
      <button id="three" value="3" onClick={props.handleChange}>3</button>
      <button id="zero" value="0" onClick={props.handleChange}>0</button>
      <button id="decimal" value="." onClick={props.handleChange}>.</button>
      <button id="equals" value="=" onClick={props.handleChange}>=</button>
    </div>
  )
}

export default Calculator