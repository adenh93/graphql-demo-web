import React, { FC, useState } from "react";
import {
  useQuery,
  OnSubscriptionDataOptions,
  useSubscription
} from "react-apollo";
import { GET_POSTS } from "../../../../graphql/query/post";
import {
  Query,
  Post,
  Subscription
} from "../../../../graphql/_generated/types";
import PostList from "./PostList";
import { NEW_POST } from "../../../../graphql/subscription/post";

const PostListContainer: FC = () => {
  const [posts, setPosts] = useState<Post[]>([]);

  const onLoadPosts = (data: Query) => setPosts([...posts, ...data.posts]);

  const onNewPost = (data: OnSubscriptionDataOptions<Subscription>) => {
    const post = data.subscriptionData.data!.newPost;
    setPosts([post, ...posts]);
  };

  const { loading, error } = useQuery<Query>(GET_POSTS, {
    onCompleted: onLoadPosts
  });

  useSubscription<Subscription>(NEW_POST, {
    onSubscriptionData: onNewPost
  });

  if (loading) return <p>Loading posts...</p>;
  if (error) return <p>Error loading posts...</p>;

  return (
    <>
      <PostList posts={posts} />
    </>
  );
};

export default PostListContainer;
