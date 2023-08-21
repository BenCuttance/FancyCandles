import React, { useState } from "react";
import { useMutation } from "@apollo/client";
import { Link } from "react-router-dom";
import { LOGIN } from "../utils/mutations";
import Auth from "../utils/auth";
import { useStoreContext } from "../utils/GlobalState";
import { DECODE_TOKEN } from "../utils/actions";

import "./Login.css";
import Button from "../components/Button/Button";

function Login(props) {
  const [formState, setFormState] = useState({ email: "", password: "" });
  const [login, { error }] = useMutation(LOGIN);
  let [state, dispatch] = useStoreContext();
  const handleFormSubmit = async (event) => {
    event.preventDefault();
    try {
      const mutationResponse = await login({
        variables: { email: formState.email, password: formState.password },
      });
      const token = mutationResponse.data.login.token;
      // let decoded = Auth.getDecodedToken(token);
      // console.log('new token beeop', decoded)
      Auth.login(token);

      //if succesful navigates to next page

      // dispatch({
      //   type: DECODE_TOKEN,
      //   decoded
      // });
    } catch (e) {
      console.log(e);
    }
  };

  const handleChange = (event) => {
    const { name, value } = event.target;
    setFormState({
      ...formState,
      [name]: value,
    });
  };

  return (
    <div>
      <h1 className="login-heading">Login</h1>
      <form onSubmit={handleFormSubmit} className="login-form">
        <div className="login-form-field">
          <label htmlFor="email">Email address</label>
          <input
            placeholder="youremail@test.com"
            name="email"
            type="email"
            id="email"
            onChange={handleChange}
          />
        </div>
        <div className="login-form-field">
          <label htmlFor="pwd">Password</label>
          <input
            placeholder="******"
            name="password"
            type="password"
            id="pwd"
            onChange={handleChange}
          />
        </div>
        {error ? (
          <div>
            <p className="error-text">
              The provided credentials are incorrect.
            </p>
          </div>
        ) : null}
        <div className="login-form-button">
          <Button type="submit">Submit</Button>
        </div>

        <Link to="/signup">← Don't have an account? Signup here.</Link>
      </form>
    </div>
  );
}

export default Login;
