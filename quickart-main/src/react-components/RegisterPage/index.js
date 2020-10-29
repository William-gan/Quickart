import React from 'react';
import { Link } from 'react-router-dom';

import './styles.css';

/* Component for the Register Page */
class RegisterPage extends React.Component {
  render() {
    return (
      <section className='mainBackground'>
        <div className='containerForm'>
          <h1 className='textDefaultColor'>Register</h1>
          <form className='form'>
            <div className='form-group'>
              <input
                className='inputGroup'
                type='text'
                placeholder='Username'
              />
            </div>
            <div className='form-group'>
              <input
                className='inputGroup'
                type='text'
                placeholder='Location'
              />
            </div>
            <div className='form-group'>
              <input
                className='inputGroup'
                type='email'
                placeholder='Email Address'
              />
            </div>
            <div className='form-group'>
              <input
                className='inputGroup'
                type='email'
                placeholder='Confirm Email Address'
              />
            </div>
            <div className='form-group'>
              <input
                className='inputGroup'
                type='password'
                placeholder='Password'
              />
            </div>
            <div className='form-group'>
              <input
                className='inputGroup'
                type='password'
                placeholder='Confirm Password'
              />
            </div>
            <Link to='/posts' type='submit' className='btn btnDefault'>
              Register
            </Link>
          </form>
          <p>
            Have an Account? <Link to='/login'>Login Here</Link>
          </p>
        </div>
      </section>
    );
  }
}

export default RegisterPage;
