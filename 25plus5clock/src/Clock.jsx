const Clock = (props) => {
  
  const handleClick = () => {
    start = !start;
    props.handleStartStop();
  }
  
  return (
    <div id="timer-div">
      <div id="timer">
        <p id="timer-label">{props.label}</p>
        <p id="time-left">{props.sessionLength < 10 ? "0" + props.sessionLength : props.sessionLength}:{props.seconds < 10 ? "0" + props.seconds : props.seconds}</p>
      </div>
      <div id="timer-controls">
        <button id="start_stop" onClick={handleClick}>⏯</button>
        <button id="reset" onClick={props.handleReset}>↻</button>
      </div>
    </div>
  )
}

export default Clock