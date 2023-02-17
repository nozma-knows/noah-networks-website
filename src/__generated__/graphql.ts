/* eslint-disable */
export type Maybe<T> = T | null;
export type InputMaybe<T> = Maybe<T>;
export type Exact<T extends { [key: string]: unknown }> = { [K in keyof T]: T[K] };
export type MakeOptional<T, K extends keyof T> = Omit<T, K> & { [SubKey in K]?: Maybe<T[SubKey]> };
export type MakeMaybe<T, K extends keyof T> = Omit<T, K> & { [SubKey in K]: Maybe<T[SubKey]> };
/** All built-in and custom scalars, mapped to their actual values */
export type Scalars = {
  ID: string;
  String: string;
  Boolean: boolean;
  Int: number;
  Float: number;
};

export type Blog = {
  __typename?: 'Blog';
  author: User;
  authorId: Scalars['String'];
  category?: Maybe<Scalars['String']>;
  content?: Maybe<Array<Maybe<Scalars['String']>>>;
  createdAt: Scalars['String'];
  id: Scalars['ID'];
  subtitle?: Maybe<Scalars['String']>;
  title?: Maybe<Scalars['String']>;
  updatedAt: Scalars['String'];
};

export type BlogInput = {
  authorId: Scalars['ID'];
  category: Scalars['String'];
  content: Array<InputMaybe<Scalars['String']>>;
  subtitle: Scalars['String'];
  title: Scalars['String'];
};

export type CreateLoginInput = {
  email: Scalars['String'];
  firstName: Scalars['String'];
  lastName: Scalars['String'];
  password: Scalars['String'];
  passwordConfirmation: Scalars['String'];
};

export type Login = {
  __typename?: 'Login';
  email: Scalars['String'];
  id: Scalars['ID'];
  user: User;
};

export type LoginInput = {
  email: Scalars['String'];
  password: Scalars['String'];
};

export type Mutation = {
  __typename?: 'Mutation';
  createBlog: Blog;
  createLogin: Login;
  createProject: Project;
  deleteBlog: Blog;
  deleteProject: Project;
  login: Session;
  logout: Session;
  updateBlog: Blog;
  updateProject: Project;
};


export type MutationCreateBlogArgs = {
  input: BlogInput;
};


export type MutationCreateLoginArgs = {
  input: CreateLoginInput;
};


export type MutationCreateProjectArgs = {
  input: ProjectInput;
};


export type MutationDeleteBlogArgs = {
  id: Scalars['String'];
};


export type MutationDeleteProjectArgs = {
  id: Scalars['String'];
};


export type MutationLoginArgs = {
  input: LoginInput;
};


export type MutationUpdateBlogArgs = {
  id: Scalars['String'];
  input: BlogInput;
};


export type MutationUpdateProjectArgs = {
  id: Scalars['String'];
  input: ProjectInput;
};

export type Project = {
  __typename?: 'Project';
  author: User;
  authorId: Scalars['String'];
  category?: Maybe<Scalars['String']>;
  content?: Maybe<Array<Maybe<Scalars['String']>>>;
  createdAt: Scalars['String'];
  github?: Maybe<Scalars['String']>;
  id: Scalars['ID'];
  name: Scalars['String'];
  title?: Maybe<Scalars['String']>;
  updatedAt: Scalars['String'];
  website?: Maybe<Scalars['String']>;
};

export type ProjectInput = {
  authorId: Scalars['ID'];
  category?: InputMaybe<Scalars['String']>;
  content?: InputMaybe<Array<InputMaybe<Scalars['String']>>>;
  github?: InputMaybe<Scalars['String']>;
  name: Scalars['String'];
  title?: InputMaybe<Scalars['String']>;
  website?: InputMaybe<Scalars['String']>;
};

export type Query = {
  __typename?: 'Query';
  blog?: Maybe<Blog>;
  blogs?: Maybe<Array<Maybe<Blog>>>;
  project?: Maybe<Project>;
  projects?: Maybe<Array<Maybe<Project>>>;
  session?: Maybe<Session>;
  user?: Maybe<User>;
  users?: Maybe<Array<Maybe<User>>>;
};


export type QueryBlogArgs = {
  id: Scalars['String'];
};


export type QueryProjectArgs = {
  id: Scalars['String'];
};


export type QuerySessionArgs = {
  id: Scalars['String'];
};


export type QueryUserArgs = {
  id: Scalars['String'];
};

export type Session = {
  __typename?: 'Session';
  id: Scalars['ID'];
  token: Scalars['String'];
};

export type User = {
  __typename?: 'User';
  email?: Maybe<Scalars['String']>;
  emailVerified?: Maybe<Scalars['Boolean']>;
  firstName?: Maybe<Scalars['String']>;
  id: Scalars['ID'];
  lastName?: Maybe<Scalars['String']>;
};
