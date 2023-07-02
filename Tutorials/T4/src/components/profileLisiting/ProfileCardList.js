import { Grid } from "@mui/material";
import ProfileCard from "./ProfileCard";

const ProfileCardList = (props) => {
  return (
    <Grid sx={{ flexGrow: 1 }} container space={2} mt={3}>
      <Grid item xs={12}>
        <Grid container justifyContent="center" spacing={2}>
          {props.userDetails.map((userDetail) => (
            <div key={userDetail.id}>
              <Grid item>
                <ProfileCard userDetail={userDetail} />
              </Grid>
            </div>
          ))}
        </Grid>
      </Grid>
    </Grid>
  );
};

export default ProfileCardList;
