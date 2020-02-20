import React, { FC } from "react";
import { Post } from "../../../../graphql/_generated/types";

export interface PostItemProps extends Post {}

const PostItem: FC<PostItemProps> = ({ id, content }) => {
  return (
    <>
      <p>{content}</p>
    </>
  );
};

export default PostItem;
