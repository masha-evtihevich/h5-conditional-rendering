import React from "react";
import "./Loader.css";

class Loader extends React.Component {
  state = {
    loading: false,
    greeting: "",
  };

  onButtonClick = () => {
    setTimeout(() => {
      this.sayHi();
    }, 3000);
    this.setState({ loading: true });
  };
  sayHi = () => {
    this.setState({ greeting: "hello", loading: false });
  };

  render() {
    return (
      <div>
        <button onClick={this.onButtonClick}>Say hi</button>
        <span>{this.state.greeting}</span>
        {this.state.loading && <div className="loader" />}
        {this.state.greeting && <div className="greeting " />}
      </div>
    );
  }
}
export default Loader;
