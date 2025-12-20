import React from "react";
import classes from "./signup.module.css";
import { Link } from "react-router-dom";

function Auth() {
  return (
    <section className={classes.login}>
      <Link to={"/"}>
        <img
          src="https://upload.wikimedia.org/wikipedia/commons/thumb/a/a9/Amazon_logo.svg/1280px-Amazon_logo.svg.png"
          alt="amazon Logo"
        />
      </Link>

      {/* sign in part */}
      <div className={classes.login_container}>
        <h1>Sign In</h1>
        <form action="">
          <div>
            <label htmlFor="email">Email</label>
            <input type="email" id="email" />
          </div>
          <div>
            <label htmlFor="password">Password</label>
            <input type="password" id="password" />
          </div>
          <button className={classes.login_signInButton}>Sign In</button>
        </form>
        <p>
          By signing in you agree to the AMAZON FAKE CLONE Conditions of use &
          sale. please see our Privacy Notice, our Cookies Notice and our
          Interest-Based Ads Notice.
        </p>
        <button className={classes.login_registerButton}>
          Create your Amazon Account
        </button>
      </div>
    </section>
  );
}

export default Auth;
