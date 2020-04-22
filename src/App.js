import React from "react";
import "./styles.css";
import Navbar from "./Navbar";
import TodayTwoToneIcon from "@material-ui/icons/TodayTwoTone";
import { BrowserRouter as Router, Switch, Route } from "react-router-dom";
let month = [];
month[0] = "January";
month[1] = "February";
month[2] = "March";
month[3] = "April";
month[4] = "May";
month[5] = "June";
month[6] = "July";
month[7] = "August";
month[8] = "September";
month[9] = "October";
month[10] = "November";
month[11] = "December";

export default class App extends React.Component {
  state = {
    clock: new Date(),
    displayDate: false
  };

  updateclock = () => {
    this.setState({ clock: new Date() });
  };

  componentDidMount() {
    setInterval(this.updateclock);
  }
  displayDate = () => {
    if (this.state.displayDate === false) this.setState({ displayDate: true });
    else this.setState({ displayDate: false });
  };

  render() {
    return (
      <Router>
        <div className="App">
          <Navbar />

          <Switch>
            <Route exact path="/">
              <div className="home">
                <div class="btn-container">
                  <button class="btn1 btn" onClick={this.displayDate}>
                    Date
                  </button>
                  <TodayTwoToneIcon fontSize="large" />
                </div>
                <div
                  className="w3-circle"
                  style={{
                    backgroundColor: "black",
                    color: "white",
                    padding: 90
                  }}
                >
                  {this.state.clock.toLocaleTimeString()}
                  <br />

                  <div className={this.state.displayDate ? "" : "hideDate"}>
                    <p style={{ color: "blue" }}> Current Date</p>
                    {this.state.clock.getDate()} :{" "}
                    {month[this.state.clock.getMonth()]} :{" "}
                    {this.state.clock.getFullYear()}
                  </div>
                </div>
              </div>
            </Route>

            <Route path="/about">
              <div className="App">
                <h1>About this app</h1>
                <h2>Simple clock application made with react</h2>
                <h3> Developer : Prabhjot Kaur </h3>
                <h3>
                  {" "}
                  Github Account :{" "}
                  <a
                    href="https://github.com/prabhjotk770/MyClock"
                    target="_blank"
                    rel="noopener noreferrer"
                  >
                    Prabhjot
                  </a>
                </h3>
              </div>
            </Route>
          </Switch>
        </div>
      </Router>
    );
  }
}
