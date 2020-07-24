import React, { Component } from "react";
import momentTimezone from "moment-timezone";

class Clock extends Component {
  constructor(props) {
    super(props);
    this.state = {
      time: new Date(),
    };
  }

  componentDidMount() {
    setInterval(() => {
      this.setState({
        time: new Date(),
      });
    }, 1000);
  }

  render() {
    const now = momentTimezone(this.state.time).tz(this.props.timezone);
    return (
      <h1>
        {this.props.timezone} - {now.format("HH:mm:ss")}
      </h1>
    );
  }
}

export default Clock;
