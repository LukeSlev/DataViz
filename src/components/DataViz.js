import React from "react";
import SplitPane from "./SplitPane";
import "../styles/DataViz.css";

class DataViz extends React.Component {
  constructor(props) {
    super(props);
    this.state = { date: new Date() };

    this.tick = this.tick.bind(this);
  }

  componentDidMount() {
    this.timerID = setInterval(() => this.tick(), 1000);
  }

  componentWillUnmount() {
    clearInterval(this.timerID);
  }

  tick() {
    this.setState({
      date: new Date()
    });
  }
  render() {
    return (
      <div>
        <SplitPane
          left={<h1>Hello, world!</h1>}
          right={<h2>It is {this.state.date.toLocaleTimeString()}.</h2>}
        />
      </div>
    );
  }
}

export default DataViz;
