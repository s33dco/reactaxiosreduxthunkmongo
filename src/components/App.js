import React, { Component } from 'react';
import NewPost from './NewPost';
import '../../node_modules/bootstrap/dist/css/bootstrap.min.css';

class App extends Component {
  render() {
    return (
      <div className="container">
        <div className="row">
          <div className="col-md-6">
            <NewPost />
          </div>
          <div className="col-md-6">
            Display Post
          </div>
        </div>
      </div>
    );
  }
}

export default App;
