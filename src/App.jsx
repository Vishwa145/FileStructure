import React from "react";
import Header from "./Layout/Header";
import FileSystem from "./Layout/FileSystem";

class App extends React.Component {
  constructor(props) {
    super(props);
    //Maintian the error status.
    this.state = { hasError: false };
  }

  static getDerivedStateFromError(error) {
    return { hasError: true };
  }

  render() {

    return (
      <div className="App">
        {this.state.hasError === false ? 
          <React.Fragment>
          <Header />
          <FileSystem />
          </React.Fragment>
        : <h1>Something broke, please close and try again.</h1>}
      </div>
    );
  }
}

export default App;
