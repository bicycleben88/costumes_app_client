import React from "react";
import { Link } from "react-router-dom";
import { GlobalContext } from "../App";

const Signup = (props) => {
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

    fetch(`${url}/auth/signup`, {
      method: "post",
      headers: {
        "Content-Type": "application/json",
      },
      body: JSON.stringify({ username, password }),
    })
      .then((response) => response.json())
      .then((data) => {
        setGlobalState({ ...globalState, token: data.token });
        setForm(blank);
        props.history.push("/login");
      });
  };

  return (
    <section className="form">
      <form onSubmit={handleSubmit}>
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
        <input type="submit" value="Sign Up" className="submit-button" />
      </form>
    </section>
  );
};

export default Signup;
