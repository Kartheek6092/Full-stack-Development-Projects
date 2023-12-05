import { Component } from 'react';

import { BrowserRouter, Route } from 'react-router-dom'
// import logo from './logo.svg';
import Welcome from './components/Welcome'
import './App.css';

class App extends Component{
  render() {
      return (
        <BrowserRouter>
          <Route exact path='/welcome' component={Welcome} />
        </BrowserRouter>
      )
  }
}

export default App;
