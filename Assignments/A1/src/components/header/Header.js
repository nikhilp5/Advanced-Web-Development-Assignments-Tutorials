import { AppBar, Box, Button, Toolbar, Typography } from "@mui/material";
import { Link } from "react-router-dom";

const Header = () => {
  return (
    <Box sx={{ flexGrow: 1 }}>
      <AppBar position="static">
        <Toolbar>
          <Typography
            style={{ fontWeight: "700", right: "100px", position: "absolute" }}
            sx={{ flexGrow: 1 }}
          >
            <Link to="/" style={{ fontSize: "32px" }}>
              <Button
                color="inherit"
                style={{ fontWeight: "700", fontSize: "15px" }}
              >
                Watchlist
              </Button>
            </Link>
          </Typography>
        </Toolbar>
      </AppBar>
    </Box>
  );
};

export default Header;
