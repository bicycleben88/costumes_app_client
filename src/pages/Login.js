import React from "react";
import { GlobalContext } from "../App";

const Login = (props) => {
  const { globalState, setGlobalState } = React.useContext(GlobalContext);
  const { url } = globalState;
  const blank = {
    username: "",
    password: "",
  };
  const [form, setForm] = React.useState(blank);

  const handleChange = (event) => {
    setForm({ ...form, [event.target.name]: event.target.value });
  };

  const handleSubmit = (event) => {
    event.preventDefault();
    const { username, password } = form;
    fetch(`${url}/auth/login`, {
      method: "post",
      headers: {
        "Content-Type": "application/json",
      },
      body: JSON.stringify({ username, password }),
    })
      .then((response) => response.json())
      .then((data) => {
        //store token from logged-in user in local storage
        window.localStorage.setItem("token", JSON.stringify(data));
        setGlobalState({ ...globalState, token: data.token });
        setForm(blank);
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
