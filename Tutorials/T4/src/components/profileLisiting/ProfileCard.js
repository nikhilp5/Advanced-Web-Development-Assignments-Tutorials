import Card from "@mui/material/Card";
import CardContent from "@mui/material/CardContent";
import CardMedia from "@mui/material/CardMedia";
import Typography from "@mui/material/Typography";
import { CardActionArea } from "@mui/material";
import { useNavigate } from "react-router";

const ProfileCard = (props) => {
  const navigate = useNavigate();
  const handleProfile = () => {
    navigate("/profilepage", { state: props.userDetail._id });
  };
  return (
    <Card sx={{ display: "flex", m: 1 }} onClick={handleProfile}>
      <CardActionArea>
        <CardMedia sx={{ height: 100 }} image={props.userDetail.picture} />
        <CardContent>
          <Typography gutterBottom variant="h6" component="div">
            {props.userDetail.name}
          </Typography>
        </CardContent>
      </CardActionArea>
    </Card>
  );
};

export default ProfileCard;
