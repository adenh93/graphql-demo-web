import React, { FC } from "react";
import { Post } from "../../../../graphql/_generated/types";
import PostItem from "../PostItem";
import { Grid } from "@material-ui/core";
import { Container } from "./Styles";

export interface PostListProps {
  posts: Post[];
}

const PostList: FC<PostListProps> = ({ posts }) => {
  return (
    <>
      <Container>
        <Grid container spacing={2}>
          {posts.length ? (
            posts.map(({ id, ...post }) => (
              <Grid item sm={12} key={id}>
                <PostItem id={id} {...post} />
              </Grid>
            ))
          ) : (
            <p>It's quiet around here. Be a based chad and add a post!</p>
          )}
        </Grid>
      </Container>
    </>
  );
};

export default PostList;
