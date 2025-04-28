import React from "react";
import Clock from "./Clock";
import Controls from "./Controls";

let start = false;
let isBreak = false;

class Display extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      label: "Session",
      break: 5,
      session: 25,
      minutes: 25,
      seconds: 0
    };
    this.handleBreakChange = this.handleBreakChange.bind(this);
    this.handleSessionChange = this.handleSessionChange.bind(this);
    this.handleStartStop = this.handleStartStop.bind(this);
    this.handleReset = this.handleReset.bind(this);
  }
  
  handleBreakChange(event) {
    const value = parseInt(event.target.value);
    if (value !== 0 && value !== 61) {
      this.setState({
        break: value,
        seconds: 0
      });
    }
  }
  
  handleSessionChange(event) {
    const value = event.target.value;
    if (value > 0 && value <= 60) {
      this.setState({
        session: value,
        minutes: value,
        seconds: 0
      });
    }
  }
  
  handleStartStop() {
    let minutes = this.state.minutes;
    let seconds = this.state.seconds;
    
    setTimeout(() => {
      if (seconds === 0 && minutes >= 0) {
        if (minutes - 1 < 0) {
          isBreak = !isBreak;
          let audio = document.getElementById("beep");
          audio.play()
          if (isBreak) {
            this.setState({
              label: "Break",
              minutes: this.state.break,
              seconds: 0
            });
          } else {
            this.setState({
              label: "Session",
              minutes: this.state.session,
              seconds: 0
            })
          }
        } else {
          this.setState({
            minutes: minutes - 1,
            seconds: 59
          })
        }
        minutes = this.state.minutes;
        seconds = this.state.seconds;
      } else if (start) {
        this.setState({
          seconds: seconds - 1
        })
      }
 
      if (minutes >= 0 && start) {
        this.handleStartStop()
      }
    }, 1000)
    
  }
  
  handleReset() {
    start = false;
    isBreak = false;
    this.setState({
      label: "Session",
      break: 5,
      session: 25,
      minutes: 25,
      seconds: 0
    })
    let audio = document.getElementById("beep");
    audio.pause();
  }
  
  render () {
    return (
      <div>
        <h1 id="title">25 + 5 Clock</h1>
        <audio id="beep" src="https://cdn.freecodecamp.org/testable-projects-fcc/audio/BeepSound.wav"></audio>
        <Controls handleBreakChange={this.handleBreakChange} handleSessionChange={this.handleSessionChange} breakLength={this.state.break} sessionLength={this.state.session}/>
        <Clock sessionLength={this.state.minutes} seconds={this.state.seconds} handleStartStop={this.handleStartStop} handleReset={this.handleReset} label={this.state.label} />
      </div>
    )
  }
}

export default Display