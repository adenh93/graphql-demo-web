export type Maybe<T> = T | null;
/** All built-in and custom scalars, mapped to their actual values */
export type Scalars = {
  ID: string,
  String: string,
  Boolean: boolean,
  Int: number,
  Float: number,
};

export type CreatePostInput = {
  content: Scalars['String'],
};

export type Mutation = {
   __typename?: 'Mutation',
  createPost?: Maybe<Post>,
  updatePost?: Maybe<Post>,
  deletePost?: Maybe<Post>,
};


export type MutationCreatePostArgs = {
  data?: Maybe<CreatePostInput>
};


export type MutationUpdatePostArgs = {
  id: Scalars['ID'],
  data?: Maybe<UpdatePostInput>
};


export type MutationDeletePostArgs = {
  id: Scalars['ID']
};

export enum MutationType {
  Created = 'CREATED',
  Updated = 'UPDATED',
  Deleted = 'DELETED'
}

export type Post = {
   __typename?: 'Post',
  id: Scalars['ID'],
  content: Scalars['String'],
  createdAt: Scalars['String'],
  updatedAt: Scalars['String'],
};

export type PostSubscriptionPayload = {
   __typename?: 'PostSubscriptionPayload',
  mutation: MutationType,
  node?: Maybe<Post>,
};

export type Query = {
   __typename?: 'Query',
  post?: Maybe<Post>,
  posts: Array<Post>,
};


export type QueryPostArgs = {
  id: Scalars['ID']
};

export type Subscription = {
   __typename?: 'Subscription',
  newPost: Post,
};

export type UpdatePostInput = {
  content: Scalars['String'],
};
