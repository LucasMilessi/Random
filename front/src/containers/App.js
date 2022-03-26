import React, { Component } from "react";
import From from "../components/From";
import NumbersForm from "../components/NumbersForm";
import NumbersResult from "../components/NumbersResult";

class App extends Component {
  // component stateful
  render() {
    return (
      <>
        <div>
          <NumbersForm />
          <From />
          <NumbersResult />
        </div>
      </>
    );
  }
}

export default App;
