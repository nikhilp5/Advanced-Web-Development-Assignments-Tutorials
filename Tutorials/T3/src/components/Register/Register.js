import { useEffect, useState } from "react";
import { useNavigate } from "react-router-dom";

const Register = () => {
  const allInitialValues = {
    firstName: "",
    lastName: "",
    email: "",
    initialPassword: "",
    finalPassword: "",
  };

  const [allValues, setAllValues] = useState(allInitialValues);
  const [allErrors, setAllErrors] = useState({});

  const handleChange = (event) => {
    setAllValues({ ...allValues, [event.target.name]: event.target.value });
    console.log(allValues);
  };

  const navigate = useNavigate();

  const handleSubmit = (event) => {
    event.preventDefault();
    let currentErrors = validateInputs(allValues);
    setAllErrors(currentErrors);
    if (Object.keys(currentErrors).length === 0) {
      navigate("/details", { state: allValues });
    }
  };

  useEffect(() => {}, [allErrors]);
  const validateInputs = (currentValues) => {
    const errors = {};
    var letters = /^[a-zA-Z]+$/; //https://stackoverflow.com/questions/23476532/check-if-string-contains-only-letters-in-javascript
    var email = /^[\w-\.]+@([\w-]+\.)+[\w-]{2,4}$/; //https://regexr.com/3e48o
    var password = /^[ A-Za-z0-9_@./#&+-]*$/; //https://stackoverflow.com/questions/17439917/regex-to-accept-alphanumeric-and-some-special-character-in-javascript
    if (
      currentValues.firstName.length <= 0 ||
      !letters.test(currentValues.firstName)
    ) {
      errors.firstName = "First Name is not valid";
    }
    if (
      currentValues.lastName.length <= 0 ||
      !letters.test(currentValues.lastName)
    ) {
      errors.lastName = "Last Name is not valid";
    }
    if (currentValues.email.length <= 0 || !email.test(currentValues.email)) {
      errors.email = "Email is not valid";
    }
    if (
      currentValues.initialPassword.length <= 8 ||
      !password.test(currentValues.initialPassword)
    ) {
      errors.initialPassword = "Password is not valid";
    }
    if (
      currentValues.finalPassword.length <= 8 ||
      !password.test(currentValues.finalPassword)
    ) {
      errors.finalPassword = "Password is not valid";
    } else if (currentValues.finalPassword !== currentValues.initialPassword) {
      errors.finalPassword = "Password is not same";
    }
    return errors;
  };
  return (
    <div class="center">
      <form onSubmit={handleSubmit}>
        <label for="firstNameInput">First Name : </label>
        <input
          type="text"
          name="firstName"
          id="firstNameInput"
          placeholder="Enter name"
          value={allValues.firstName}
          onChange={handleChange}
        />
        <p>{allErrors.firstName}</p>
        <label>Last Name : </label>
        <input
          type="text"
          name="lastName"
          id="lastNameInput"
          placeholder="Enter Last Name  "
          value={allValues.lastName}
          onChange={handleChange}
        />
        <p>{allErrors.lastName}</p>

        <label>Email : </label>
        <input
          type="email"
          name="email"
          id="emailInput"
          placeholder="Enter Email"
          value={allValues.email}
          onChange={handleChange}
        />
        <p>{allErrors.email}</p>

        <label>Password : </label>
        <input
          type="password"
          name="initialPassword"
          id="passwordInput"
          placeholder="Enter password"
          value={allValues.initialPassword}
          onChange={handleChange}
        />
        <p>{allErrors.initialPassword}</p>

        <label>Confirm Password : </label>
        <input
          type="password"
          name="finalPassword"
          id="confirmPasswordInput"
          placeholder="Confirm password"
          value={allValues.finalPassword}
          onChange={handleChange}
        />
        <p>{allErrors.finalPassword}</p>

        <button type="submit">Submit</button>
      </form>
    </div>
  );
};

export default Register;
