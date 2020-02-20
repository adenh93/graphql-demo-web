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

export type CreateUserInput = {
  username: Scalars['String'],
  email: Scalars['String'],
  name: Scalars['String'],
};

export type Mutation = {
   __typename?: 'Mutation',
  createUser?: Maybe<User>,
  updateUser?: Maybe<User>,
  deleteUser?: Maybe<User>,
  createPost?: Maybe<Post>,
  updatePost?: Maybe<Post>,
  deletePost?: Maybe<Post>,
};


export type MutationCreateUserArgs = {
  data?: Maybe<CreateUserInput>
};


export type MutationUpdateUserArgs = {
  id: Scalars['ID'],
  data?: Maybe<UpdateUserInput>
};


export type MutationDeleteUserArgs = {
  id: Scalars['ID']
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

export type Post = {
   __typename?: 'Post',
  id: Scalars['ID'],
  content: Scalars['String'],
  createdAt: Scalars['String'],
  updatedAt: Scalars['String'],
};

export type Query = {
   __typename?: 'Query',
  user?: Maybe<User>,
  users: Array<User>,
  post?: Maybe<Post>,
  posts: Array<Post>,
};


export type QueryUserArgs = {
  id: Scalars['ID']
};


export type QueryPostArgs = {
  id: Scalars['ID']
};

export type UpdatePostInput = {
  content: Scalars['String'],
};

export type UpdateUserInput = {
  username?: Maybe<Scalars['String']>,
  email?: Maybe<Scalars['String']>,
  name?: Maybe<Scalars['String']>,
};

export type User = {
   __typename?: 'User',
  id: Scalars['ID'],
  username: Scalars['String'],
  email: Scalars['String'],
  name: Scalars['String'],
  posts: Array<Post>,
};
