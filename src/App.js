import React from "react";

class App extends React.Component {
  state = {
    isSignedln: false,
  };

  onButtonClick = () => {
    setTimeout(() => {
      this.setState({ isSignedln: true });
    }, 3000);
  };

  render() {
    return (
      <div>
        {this.state.isSignedln ? (
          <div> Hello, user </div>
        ) : (
          <button onClick={this.onButtonClick}>Sign in</button>
        )}
      </div>
    );
  }
}
export default App;