import React, { Component } from "react";
import Header from "./component/header";
import Headline from "./component/headline";
import "./app.scss";

const tempArr = [
  {
    fName: "Joe",
    sName: "Bloggs",
    email: "joe@bloggs.com",
    age: 24,
    onlineStatus: true
  }
];

class App extends Component {
  render() {
    return (
      <div className="App">
        <Header />
        <section className="main">
          <Headline
            header="Posts"
            desc="Click btn to render post"
            tempArr={tempArr}
          />
        </section>
      </div>
    );
  }
}

export default App;
