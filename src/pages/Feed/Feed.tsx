import React, { FC } from "react";
import PostList from "./components/PostList";
import { Grid } from "@material-ui/core";
import PostInput from "./components/PostInput";

const Feed: FC = () => (
  <>
    <Grid container spacing={4}>
      <Grid item sm={6}>
        <PostInput />
        <PostList />
      </Grid>
    </Grid>
  </>
);

export default Feed;
