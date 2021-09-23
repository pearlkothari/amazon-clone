import './App.css';
import Header from '../src/Header/Header.jsx';
import Home from '../src/Home/Home.jsx'
import { BrowserRouter as Router,Switch,Route } from 'react-router-dom';
import { Component } from 'react';
import ErrorComponent from './ErrorComponent';

class App extends Component {
  render(){
    return (
      <Router>
        <div className="App">
          <Switch>
            <Route path='/' exact>
              <Header></Header>
              <Home></Home>
            </Route>
            <Route component={ErrorComponent}></Route>
          </Switch>
        </div>
      </Router>
    );
  }
}

export default App;
