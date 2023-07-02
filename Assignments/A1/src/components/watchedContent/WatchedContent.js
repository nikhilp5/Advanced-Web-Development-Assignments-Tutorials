import { Container, Typography } from "@mui/material";
import { useSelector } from "react-redux";
import { selectAllWatchedContent } from "../addContent/contentsSlice";
import ContentGrid from "../contentShowcaseUI/contentGrid";

const WatchedContent = () => {
  const watchedContents = useSelector(selectAllWatchedContent);
  return (
    <Container fixed>
      <Typography variant="h4" style={{ fontWeight: "600" }} mt={4}>
        Watched
      </Typography>
      {watchedContents.length > 0 ? (
        <>
          <ContentGrid contents={watchedContents} type="watched" />
        </>
      ) : (
        <h2>No Content Added</h2>
      )}
    </Container>
  );
};

export default WatchedContent;
