import React, { FC } from "react";
import { Post } from "../../../../graphql/_generated/types";
import { CardHeader, Avatar, CardContent, Typography } from "@material-ui/core";
import { Container } from "./Styles";

export interface PostItemProps extends Post {}

const PostItem: FC<PostItemProps> = ({ id, content, createdAt }) => {
  return (
    <>
      <Container>
        <CardHeader
          avatar={<Avatar>A</Avatar>}
          title="Aden Herold"
          subheader={createdAt}
        />
        <CardContent>
          <Typography>{content}</Typography>
        </CardContent>
      </Container>
    </>
  );
};

export default PostItem;
