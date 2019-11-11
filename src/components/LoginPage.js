import React, { useState } from 'react';
import { useDispatch, useSelector } from 'react-redux'
import { loginSuccess } from '../actions/userActions';
import { Link } from 'react-router-dom';
import '../App.css' 

const LoginPage = props => {

  const initialState = {
    firstName: '',
    lastName: '',
    username: '',
    password: '',
    isLoggedIn: false
  }

  const verify = useSelector(state => state.registration);
  const dispatch = useDispatch();
  const [state, setState] = useState(initialState);

  const handleChange = e => {
    setState({...state, [e.target.name] : e.target.value});
  }

  const handleSubmit = e => {

    e.preventDefault();
    let user = {
      ...state,
      username: state.username,
      password: state.password,
      isLoggedIn: true,
    }
    if (state.username == verify.username && state.password == verify.password){
      if(state.username != '' && state.password != '') {
        dispatch(loginSuccess(user));
        props.history.push('/home');
        setState(initialState);
      }
    }
  }

  return (

    <div className="login-page">
      <div className = 'form'>
      <h1>Login Page</h1>
        <form className='login-form' name='form' onSubmit={handleSubmit} >
            {/* <div class = 'form-group'> */}
                <label htmlFor='username'>Username</label>
                <input placeholder='username' onChange={handleChange} value={state.username} name='username'type='text'></input>
            {/* </div> */}
            {/* <div className = 'form-group2'> */}
                <label htmlFor='password'>Password</label>
                <input placeholder='password' onChange={handleChange} value={state.password} name='password' type='password'></input>
            {/* </div> */}
        <button className = 'btn btn-primary'>Submit <Link to='/home'></Link></button>
        <p className="message">Not registered? <Link to="/register">Create an account</Link></p>
        </form>
        </div>
    </div>
  );
}

export default LoginPage;
