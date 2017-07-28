import React from 'react'
import { Link, NavLink, withRouter } from 'react-router-dom';


export const Login = ({ login }) => (



  < div className="signin-container" >
    <div className="buffer local">
      <form onSubmit={evt => {
        evt.preventDefault()
        login(evt.target.username.value, evt.target.password.value)
      }}>
        <div className="form-group">
          <label>email</label>
          <input
            name="username"
            type="email"
            className="form-control"
            required
          />
        </div>
        <div className="form-group">
          <label>password</label>
          <input
            name="password"
            type="password"
            className="form-control"
            required
          />
        </div>
        <button type="submit" className="btn btn-block btn-primary">Login</button>
      </form>
    </div>
    <div className="or buffer">
      <div className="back-line">
        <span>OR</span>
      </div>
    </div>
    <div className="buffer oauth">
      <p>
        <a
          target="_self"
          href="/auth/google"
          className="btn btn-social btn-google">
          <i className="fa fa-google" />
          <span> with Google</span>
        </a>
      </p>
    </div>
  </div >
)

import { login } from 'APP/app/reducers/auth'
import { connect } from 'react-redux'

export default withRouter(connect(
  state => ({}),
  { login },
)(Login))
