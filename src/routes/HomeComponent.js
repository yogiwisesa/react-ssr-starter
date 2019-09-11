import React from 'react';
import { Helmet } from 'react-helmet';

class Home extends React.Component {

  exampleMethod () {
    console.log('Js is running')
  }

  head() {
    return(
      <Helmet>
        <title>My Page Title</title>
      </Helmet>
    )
  }

  render() {
    return (
      <div>
        {this.head()}
        <h1>My Home Page</h1>
        <p>Some Content</p>
        <button onClick={() => this.exampleMethod()}>Console log some text</button>
      </div>
    )
  }
}

export default Home;