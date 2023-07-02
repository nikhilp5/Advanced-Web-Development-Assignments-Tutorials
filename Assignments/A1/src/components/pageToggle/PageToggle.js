import { Button } from "@mui/material";
import { useCallback } from "react";
import { useNavigate } from "react-router-dom";

const PageToggle = () => {
  const navigate = useNavigate();
  const handleOnClickWatchlist = useCallback(
    () => navigate("/", { replace: true }),
    [navigate]
  );
  const handleOnClickWatched = useCallback(
    () => navigate("/watched", { replace: true }),
    [navigate]
  );
  const handleOnClickAddtoWatchlist = useCallback(
    () => navigate("/add", { replace: true }),
    [navigate]
  );

  return (
    <div className="togglebutton">
      <Button
        variant="contained"
        style={{ top: "10px", marginLeft: "10px", fontWeight: "bold" }}
        onClick={handleOnClickWatchlist}
      >
        My WatchList
      </Button>
      <Button
        variant="contained"
        style={{ top: "10px", marginLeft: "10px", fontWeight: "bold" }}
        onClick={handleOnClickWatched}
      >
        Watched
      </Button>
      <Button
        variant="contained"
        style={{ top: "10px", marginLeft: "10px", fontWeight: "bold" }}
        onClick={handleOnClickAddtoWatchlist}
      >
        Add to Watchlist
      </Button>
    </div>
  );
};

export default PageToggle;
