import React from 'react'

const SignIn = () => {
  return (
    <>
      <div className="container my-md-5">
        <div className="row mt-5 pt-5">
          <div className="col text-center">

          <h3>Login Here</h3>

          <label className='mt-4' for="username">Username</label>&nbsp;&nbsp;&nbsp;

          <input type="text" placeholder="Email or Phone" id="username" /><br /><br />

          <label for="password">Password</label>&nbsp;&nbsp;&nbsp;
          <input type="password" placeholder="Password" id="password" /><br /><br />

          <button className='btn btn-outline-primary'>Log In</button>
          </div>

        </div>
      </div>

    </>
  )
}

export default SignIn