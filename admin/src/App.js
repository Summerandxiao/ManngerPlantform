import React, { Component ,Fragment} from 'react';
import "./test.less";
import "./App.css";


class App extends Component {
  render() {
    return (
      <Fragment>
         {this.props.children}
      </Fragment>
    );
  }
}

export default App;
