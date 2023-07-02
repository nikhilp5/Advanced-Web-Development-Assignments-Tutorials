import { Divider, TextField } from "@mui/material";
import { useState } from "react";
import { useLocation } from "react-router";
import ProfileCardList from "./ProfileCardList";

const ProfileListing = () => {
  const { state } = useLocation();
  const initialUserDetails = state;
  const [userDetails, setUserDetails] = useState(state);

  const handleSearch = (event) => {
    var searchTerm = event.target.value.toLowerCase();
    var tempUserDetails = [];
    tempUserDetails = tempUserDetails.concat(initialUserDetails);
    for (var i = tempUserDetails.length - 1; i >= 0; i--) {
      if (!tempUserDetails[i].name.toLowerCase().includes(searchTerm)) {
        tempUserDetails.splice(i, 1);
      }
    }
    setUserDetails(tempUserDetails);
  };

  return (
    <div>
      <div className="center">
        <TextField
          fullWidth
          id="standard-basic"
          label="Search users...."
          variant="filled"
          onChange={(event) => {
            handleSearch(event);
          }}
        />
      </div>
      <Divider />

      {userDetails.length > 0 ? (
        <ProfileCardList userDetails={userDetails} />
      ) : (
        <h2 className="center">No Users Available</h2>
      )}
    </div>
  );
};

export default ProfileListing;
