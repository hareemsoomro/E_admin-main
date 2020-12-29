import React, { Component } from "react";

import { Link } from "react-router-dom";

const Registrationform = () => {
  return (
    <div className="container">
      <form className="login-form" action="/Home" method="post">
        <div className="login-wrap">
          <p className="login-img">
            <i className="icon_lock_alt" />
          </p>
          <h2 className="text-center"> Register Now</h2>
          <br />

          <div className="input-group">
            <span className="input-group-addon">
              <i className="icon_profile" />
            </span>
            <input
              type="text"
              className="form-control"
              placeholder="NAME"
              autofocus
            />
          </div>
          <div className="input-group">
            <span className="input-group-addon">
              <i className="icon_key_alt" />
            </span>
            <input
              type="password"
              className="form-control"
              placeholder="EMAIL"
            />
          </div>
          <div className="input-group">
            <span className="input-group-addon">
              <i className="icon_key_alt" />
            </span>
            <input
              type="password"
              className="form-control"
              placeholder="PHONE"
            />
          </div>

          <div className="input-group">
            <span className="input-group-addon">
              <i className="icon_key_alt" />
            </span>
            <input
              type="password"
              className="form-control"
              placeholder="PASSWORD"
            />
          </div>
          <div className="input-group">
            <h4>
              <input type="checkbox" /> I agree to the Terms of Service and
              Privacy Policy
            </h4>
          </div>

          <div className="clearfix" />
          <a ComponentClass={Link} href="/Home" to="/Home">
            <button className="btn btn-primary btn-lg btn-block" type="submit">
              SUBMIT
            </button>
          </a>
        </div>
        <p className=" text-success">
          Already Registered.
          <a ComponentClass={Link} href="/Loginform" to="/Loginform">
            <u className="text-primary">LOGIN</u>
          </a>
        </p>
        <br />
      </form>
    </div>
  );
};

export default Registrationform;
