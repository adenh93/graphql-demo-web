import React, { FC } from "react";
import { Post } from "../../../../graphql/_generated/types";
import PostItem from "../PostItem";

export interface PostListProps {
  posts: Post[];
}

const PostList: FC<PostListProps> = ({ posts }) => {
  return (
    <>
      {posts.map(post => (
        <PostItem {...post} />
      ))}
    </>
  );
};

export default PostList;
