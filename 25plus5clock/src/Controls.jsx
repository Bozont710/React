const Controls = (props) => {
  return (
    <div id="controls">
      <div id="break">
        <p id="break-label">Break Length</p>
        <button id="break-decrement" onClick={props.handleBreakChange} value={props.breakLength - 1}>➭</button>
        <p id="break-length">{props.breakLength}</p>
        <button id="break-increment" onClick={props.handleBreakChange} value={props.breakLength + 1}>➭</button>
      </div>
      <div id="session">
        <p id="session-label">Session Length</p>
        <button id="session-decrement" onClick={props.handleSessionChange} value={props.sessionLength - 1}>➭</button>
        <p id="session-length">{props.sessionLength}</p>
        <button id="session-increment" onClick={props.handleSessionChange} value={parseInt(props.sessionLength) + 1}>➭</button>
      </div>
    </div>
  )
}

export default Controls