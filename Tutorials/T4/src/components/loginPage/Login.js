import axios from "axios";
import { useState } from "react";
import { useNavigate } from "react-router";

const Login = () => {
  const [loginMessage, setLoginMessage] = useState("");
  const navigate = useNavigate();

  const allInitialValues = {
    username: "",
    password: "",
  };
  const [allValues, setAllValues] = useState(allInitialValues);
  const handleSubmit = (event) => {
    event.preventDefault();
    axios
      .post("https://express-t4.onrender.com/api/login", allValues)
      .then((result) => {
        axios.get("https://express-t4.onrender.com/api/users").then((res) => {
          const userData = res.data;
          setLoginMessage("Login Successful!");
          navigate("/profilelisting", { state: userData });
        });
      })
      .catch((error) => {
        setLoginMessage("Login Failed! Enter testemail@dal.ca and Test@123");
      });
  };
  const handleChange = (event) => {
    setAllValues({
      ...allValues,
      [event.target.name]: event.target.value.trim(),
    });
  };
  return (
    <div className="center">
      <form
        onSubmit={(event) => {
          handleSubmit(event);
        }}
      >
        <label>Email : </label>
        <input
          type="text"
          name="username"
          id="usernameInput"
          placeholder="Enter Email"
          value={allValues.username}
          onChange={handleChange}
        />
        <label>Password : </label>
        <input
          type="text"
          name="password"
          id="passwordInput"
          placeholder="Enter Password "
          value={allValues.password}
          onChange={handleChange}
        />
        <button type="submit">Submit</button>
      </form>
      <p>{loginMessage}</p>
    </div>
  );
};

export default Login;
