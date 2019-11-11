import React, {useState} from 'react';
import { Link } from 'react-router-dom';
import { useDispatch } from 'react-redux';
import { registerSuccess } from '../actions/userActions';
import '../App.css'

const RegisterPage = props => {

    const initialState = {
            firstName: '',
            lastName: '',
            username: '',
            password: '',
            submitted: false
        }

    const dispatch = useDispatch();
    const [state, setState] = useState(initialState);

    const onChange = e => {
        setState({...state, [e.target.name]: e.target.value })
    }

    const onSubmit = e => {
        e.preventDefault();
        let user = {
            ...state,
            submitted: true
        }
        if (state.firstName && state.lastName && state.username && state.password) {
            dispatch(registerSuccess(user));
            setState(initialState);
    
            props.history.push('/')
        }
    }
   
    const {submitted} = state;
    return  (
        <div className = 'login-page'>
            <div className = 'form'>
            <h2>Registration Page</h2>
            <form className='login-form' name = 'form' onSubmit = {onSubmit}>
                <div className = {'form-group' + (submitted && !state.firstName ? 'has-error' : '')}>
                    <label htmlFor='firstName'>First Name</label>
                    <input placeholder='John' type='text' className='form-control' name='firstName' value={state.firstName} onChange={onChange} />
                    {submitted && !state.firstName && 
                    <div className='help-block'>First Name is required</div>}
                </div>
                <div className = {'form-group' + (submitted && !state.lastName ? 'has-error' : '')}>
                    <label htmlFor='lastName'>Last Name</label>
                    <input placeholder='Doe' type='text' className='form-control' name='lastName' value={state.lastName} onChange={onChange} />
                    {submitted && !state.lastName && 
                    <div className='help-block'>Last Name is required</div>}
                </div>
                <div className = {'form-group' + (submitted && !state.username ? 'has-error' : '')}>
                    <label htmlFor='username'>Username</label>
                    <input placeholder='John_Doe' type='text' className='form-control' name='username' value={state.username} onChange={onChange} />
                    {submitted && !state.username && 
                    <div className='help-block'>Username is required</div>}
                </div>
                <div className = {'form-group' + (submitted && !state.password ? 'has-error' : '')}>
                    <label htmlFor='password'>Password</label>
                    <input placeholder='doe123' type='password' className='form-control' name='password' value={state.password} onChange={onChange} />
                    {submitted && !state.password && 
                    <div className='help-block'>Password is required</div>}
                </div>
                <div className='form-group'>
                    <button type='submit' className= 'btn btn-primary'>Register</button>
                    <Link to='/login' className='btn btn-link'>Cancel</Link>
                </div>
            </form>
            </div>
        </div>
    );
}

export default RegisterPage;