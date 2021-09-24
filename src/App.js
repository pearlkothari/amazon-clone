import './App.css';
import Header from '../src/Header/Header.jsx';
import Home from '../src/Home/Home.jsx'
import { BrowserRouter as Router,Switch,Route } from 'react-router-dom';
import { Component } from 'react';
import ErrorComponent from './ErrorComponent';
import Checkout from './Checkout/Checkout';

class App extends Component {
  constructor(props){
    super(props);
    this.state={
      count:0,
      amount:0
    };
    this.update_cart_count=this.update_cart_count.bind(this);
  }

  update_cart_count(price){
    this.setState((prev) =>{
        return{
          count:prev.count+1,
          amount:prev.amount+price
        };
      });
  }
  render(){
    return (
      <Router>
        <div className="App">
          <Switch>
            <Route path='/' exact>
              <Header cart={this.state.count}></Header>
              <Home cart={this.update_cart_count}></Home>
            </Route>
            <Route path="/checkout">
              <Header cart={this.state.count}></Header>
              <Checkout update={this.update_cart_count} cart={this.state.count} amount={this.state.amount}></Checkout>
            </Route>
            <Route component={ErrorComponent}></Route>
          </Switch>
        </div>
      </Router>
    );
  }
}

export default App;
