import { Container, Typography } from "@mui/material";
import { useSelector } from "react-redux";
import { selectAllWatchlistContent } from "../addContent/contentsSlice";
import ContentGrid from "../contentShowcaseUI/contentGrid";

const WatchListContent = () => {
  const watchListContents = useSelector(selectAllWatchlistContent);
  return (
    <Container fixed>
      <Typography variant="h4" style={{ fontWeight: "600" }} mt={4}>
        My WatchList
      </Typography>
      {watchListContents.length > 0 ? (
        <>
          <ContentGrid contents={watchListContents} type="watchlist" />
        </>
      ) : (
        <h2>No Content Added</h2>
      )}
    </Container>
  );
};

export default WatchListContent;
