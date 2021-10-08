import './App.css';
import Header from '../src/Header/Header.jsx';
import Home from '../src/Home/Home.jsx'
import { BrowserRouter as Router,Switch,Route } from 'react-router-dom';
import {useEffect} from 'react';
import ErrorComponent from './ErrorComponent';
import Checkout from './Checkout/Checkout';
import Login from './Login/Login';
import { auth } from './firebase.js';
import { loadStripe } from '@stripe/stripe-js';
import { Elements } from '@stripe/react-stripe-js';
import { useStateValue } from './State/StateProvider';
import Payment from './Payment/Payment';

const promise =loadStripe(
  "pk_test_51JSQQbSJspC6yXhCZcmzx59N63xKyJTO5BNYp8HR7mC2AoDM6ncTxsV3hWkNCCV6KnK1NgeAsp6u25v76yQf2wKB004tfROwPQ"
);
function App() {
  const [{user},dispatch]=useStateValue();
  useEffect(()=>{
      // will only run once when the app component loads
      auth.onAuthStateChanged(authUser=>{
        // console.log('The user is ->',authUser);

        if(authUser){
          //  then user just/was logged in
          dispatch({
            type: 'SET_USER',
            user:authUser
          })
        }else{
          // the user is logged out
          dispatch({
            type:'SET_USER',
            user:null
          })
        }
      })
  },[user])
  return (
    <Router>
      <div className="App">
        <Switch>
          <Route path='/' exact>
            <Header></Header>
            <Home ></Home>
          </Route>
          <Route path='/login'>
              <Login></Login>
          </Route>
          <Route path="/checkout">
            <Header></Header>
            <Checkout></Checkout>
          </Route>
          <Route path='/payment'>
              <Header></Header>
              <Elements stripe={promise}>
                <Payment></Payment>
              </Elements>
          </Route>
          <Route component={ErrorComponent}></Route>
        </Switch>
      </div>
    </Router>
  );
}

export default App;
