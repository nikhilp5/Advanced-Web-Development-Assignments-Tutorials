import { useLocation, useNavigate } from "react-router-dom";
import { useCallback } from "react";

const Details = () => {
  const { state } = useLocation();
  const details = state;
  const navigate = useNavigate();
  const goBack = useCallback(
    () => navigate("/", { replace: true }),
    [navigate]
  );
  return (
    <div class="center">
      <h3>Details</h3>
      <h4>First Name : {details.firstName}</h4>
      <h4>Last Name : {details.lastName}</h4>
      <h4>Email : {details.email}</h4>
      <h4>Password : {details.finalPassword}</h4>
      <button type="submit" onClick={goBack}>
        Go Back
      </button>
    </div>
  );
};

export default Details;
