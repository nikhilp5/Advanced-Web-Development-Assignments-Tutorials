import { Divider } from "@mui/material";
import axios from "axios";
import { useEffect, useState } from "react";
import { useLocation } from "react-router";

const ProfilePage = () => {
  const { state } = useLocation();
  const userId = state;
  const [details, setDetails] = useState({});
  useEffect(() => {
    axios
      .get("https://express-t4.onrender.com/api/users/" + userId)
      .then((res) => {
        setDetails(res.data);
      });
  }, [userId]);
  return (
    <div className="center">
      <h3>Details</h3>
      <Divider />
      <h3>Name : {details.name}</h3>
      <Divider />
      <h3>Age : {details.age}</h3>
      <Divider />
      <h3>Gender : {details.gender}</h3>
      <Divider />
      <h3>Email : {details.email}</h3>
      <Divider />
      <h3>Phone : {details.phone}</h3>
      <Divider />
      <h3>Address : {details.address}</h3>
      <Divider />
    </div>
  );
};

export default ProfilePage;
