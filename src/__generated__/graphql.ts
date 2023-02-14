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
  content?: Maybe<Scalars['String']>;
  createdAt: Scalars['String'];
  id: Scalars['ID'];
  subtitle?: Maybe<Scalars['String']>;
  title?: Maybe<Scalars['String']>;
  updatedAt: Scalars['String'];
};

export type BlogInput = {
  authorId: Scalars['ID'];
  category: Scalars['String'];
  content: Scalars['String'];
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

export type CreateProjectInput = {
  authorId: Scalars['ID'];
  category?: InputMaybe<Scalars['String']>;
  content?: InputMaybe<Scalars['String']>;
  github?: InputMaybe<Scalars['String']>;
  name: Scalars['String'];
  title?: InputMaybe<Scalars['String']>;
  website?: InputMaybe<Scalars['String']>;
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

export type LogoutInput = {
  sessionId: Scalars['String'];
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
  input: CreateProjectInput;
};


export type MutationDeleteBlogArgs = {
  title: Scalars['String'];
};


export type MutationDeleteProjectArgs = {
  id: Scalars['ID'];
};


export type MutationLoginArgs = {
  input: LoginInput;
};


export type MutationLogoutArgs = {
  input: LogoutInput;
};


export type MutationUpdateBlogArgs = {
  input: BlogInput;
};


export type MutationUpdateProjectArgs = {
  input: UpdateProjectInput;
};

export type Project = {
  __typename?: 'Project';
  author: User;
  authorId: Scalars['String'];
  category?: Maybe<Scalars['String']>;
  content?: Maybe<Scalars['String']>;
  createdAt: Scalars['String'];
  github?: Maybe<Scalars['String']>;
  id: Scalars['ID'];
  name: Scalars['String'];
  title?: Maybe<Scalars['String']>;
  updatedAt: Scalars['String'];
  website?: Maybe<Scalars['String']>;
};

export type Query = {
  __typename?: 'Query';
  blog?: Maybe<Blog>;
  blogs?: Maybe<Array<Maybe<Blog>>>;
  project?: Maybe<Project>;
  projects?: Maybe<Array<Maybe<Project>>>;
  user?: Maybe<User>;
  users?: Maybe<Array<Maybe<User>>>;
};


export type QueryBlogArgs = {
  title: Scalars['String'];
};


export type QueryProjectArgs = {
  name: Scalars['String'];
};


export type QueryUserArgs = {
  id: Scalars['String'];
};

export type Session = {
  __typename?: 'Session';
  id: Scalars['ID'];
  token: Scalars['String'];
};

export type UpdateProjectInput = {
  authorId: Scalars['ID'];
  category?: InputMaybe<Scalars['String']>;
  content?: InputMaybe<Scalars['String']>;
  github?: InputMaybe<Scalars['String']>;
  id: Scalars['ID'];
  name: Scalars['String'];
  title?: InputMaybe<Scalars['String']>;
  website?: InputMaybe<Scalars['String']>;
};

export type User = {
  __typename?: 'User';
  email?: Maybe<Scalars['String']>;
  emailVerified?: Maybe<Scalars['Boolean']>;
  firstName?: Maybe<Scalars['String']>;
  id: Scalars['ID'];
  lastName?: Maybe<Scalars['String']>;
};
