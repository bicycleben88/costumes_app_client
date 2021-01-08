import React from "react";
import { Link } from "react-router-dom";
import { GlobalContext } from "../App";

const Login = (props) => {
  //Deconstruct globalState and setGlobalState and pass into useContext
  const { globalState, setGlobalState } = React.useContext(GlobalContext);
  const { url } = globalState;

  //create empty user object
  const blank = {
    username: "",
    password: "",
  };

  //Define state and setState for form
  const [form, setForm] = React.useState(blank);

  //Allow user to type into text field
  const handleChange = (event) => {
    setForm({ ...form, [event.target.name]: event.target.value });
  };

  //When user clicks Log in
  const handleSubmit = (event) => {
    //stop page from reloading
    event.preventDefault();
    //deconstruct username and password from state
    const { username, password } = form;
    //make API call
    fetch(`${url}/auth/login`, {
      //enter method details
      method: "post",
      headers: {
        "Content-Type": "application/json",
      },
      body: JSON.stringify({ username, password }),
    })
      //convert response to json
      .then((response) => response.json())
      .then((data) => {
        //store token from logged-in user in local storage
        window.localStorage.setItem("token", JSON.stringify(data));
        //add token from logged-in user to globalState
        setGlobalState({ ...globalState, token: data.token });
        //reset the form
        setForm(blank);
        //send user to home page
        props.history.push("/");
      });
  };

  return (
    <article className="form">
      <form onSubmit={handleSubmit} className="banner-header">
        <input
          type="text"
          name="username"
          value={form.username}
          placeholder="username"
          onChange={handleChange}
        />
        <input
          type="password"
          name="password"
          value={form.password}
          placeholder="password"
          onChange={handleChange}
        />
        <input type="submit" value="Log In" className="submit-button" />
      </form>
    </article>
  );
};

export default Login;
