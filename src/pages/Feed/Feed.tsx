import React, { FC } from "react";
import PostList from "./components/PostList";
import { Grid, Paper } from "@material-ui/core";

const Feed: FC = () => (
  <>
    <Grid container spacing={4}>
      <Grid item sm={2}>
        <Paper style={{ height: "100vh" }}>Left Column</Paper>
      </Grid>
      <Grid item sm={6}>
        <PostList />
      </Grid>
      <Grid item sm={4}>
        <Paper style={{ height: "100vh" }}>Right Column</Paper>
      </Grid>
    </Grid>
  </>
);

export default Feed;
