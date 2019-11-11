import React from 'react';
import { Switch, Route, Redirect } from 'react-router-dom';
import LoginPage from './components/LoginPage';
import RegisterPage from './RegisterPage/RegisterPage';
import HomePage from './components/HomePage';
import ShoppingPage from './components/ShoppingPage';
import CartPage from './components/CartPage';
import './App.css'

const App = () => {

  return (
    <div className='container'>
      <div className='row'>
        <Switch>
          <Route exact path='/' render={() => <Redirect to='/login' /> } />
          <Route path='/login' component= {LoginPage} />
          <Route path='/register' component={RegisterPage} />
          <Route path='/home' component={HomePage} />
          <Route path='/shop' component={ShoppingPage} />
          <Route path='/cart' component={CartPage} />
        </Switch>
      </div>
    </div>
  );
}

export default App;
