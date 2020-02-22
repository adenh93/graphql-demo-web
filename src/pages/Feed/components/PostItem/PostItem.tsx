import React, { FC } from "react";
import moment from "moment";
import { Post } from "../../../../graphql/_generated/types";
import { CardHeader, Avatar, CardContent, Typography } from "@material-ui/core";
import { Container } from "./Styles";

export interface PostItemProps extends Post {}

const PostItem: FC<PostItemProps> = ({ content, createdAt }) => {
  return (
    <>
      <Container>
        <CardHeader
          avatar={<Avatar>A</Avatar>}
          title="Aden Herold"
          subheader={moment(createdAt).fromNow()}
        />
        <CardContent>
          <Typography>{content}</Typography>
        </CardContent>
      </Container>
    </>
  );
};

export default PostItem;
