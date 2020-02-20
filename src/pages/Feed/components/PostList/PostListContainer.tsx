import React, { FC } from "react";
import { useQuery } from "react-apollo";
import { getPosts } from "../../../../graphql/query/post";
import { Query } from "../../../../graphql/_generated/types";
import PostList from "./PostList";

const PostListContainer: FC = () => {
  const { loading, error, data } = useQuery<Query>(getPosts);

  if (loading) return <p>Loading posts...</p>;
  if (error) return <p>Error loading posts...</p>;

  return (
    <>
      <PostList posts={data!.posts} />
    </>
  );
};

export default PostListContainer;
