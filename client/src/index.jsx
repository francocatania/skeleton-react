import React from 'react';
import ReactDOM from 'react-dom';
import HashRouter from 'react-router-dom';

class App extends React.Component {
  constructor(props) {
    super(props);
    this.state = {};
  }

  componentDidMount() {}

  render() {
    return (
       <div>test!</div>
    )
  }
}

ReactDOM.render(
  <HashRouter>
    <App />
  </HashRouter>
  , document.getElementById('app'),
);

