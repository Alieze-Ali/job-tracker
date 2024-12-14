// Create Account page
import React from 'react';
import { Link } from "react-router-dom";
import "./CreateAccount.css"; //

const CreateAccount = () => {
    return (
      <div className="create-account-container">
        <div className="create-account-box">
          <h2>Create Account</h2>
          <p className="account-prompt">
            Enter your account details below or <Link to="/login">login</Link>
          </p>
          <form>
            <div className="form-group">
              <label htmlFor="email">Email</label>
              <input
                type="email"
                id="email"
                name="email"
                placeholder="Enter your email"
                required
              />
            </div>
            <div className="form-group">
              <label htmlFor="password">Password</label>
              <input
                type="password"
                id="password"
                name="password"
                placeholder="Create a password"
                required
              />
            </div>
            <div className="form-group">
              <label htmlFor="confirm-password">Confirm Password</label>
              <input
                type="password"
                id="confirm-password"
                name="confirm-password"
                placeholder="Confirm your password"
                required
              />
            </div>
            <button type="submit" className="create-account-button">
              Create Account
            </button>
          </form>
        </div>
      </div>
    );
  };
  
  export default CreateAccount;