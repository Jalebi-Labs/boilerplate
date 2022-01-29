import { GraphQLResolveInfo } from 'graphql';
import gql from 'graphql-tag';
import { GraphQLClient } from 'graphql-request';
import { RequestInit } from 'graphql-request/dist/types.dom';
import { useQuery, UseQueryOptions, useMutation, UseMutationOptions } from 'react-query';
export type Maybe<T> = T | null;
export type InputMaybe<T> = Maybe<T>;
export type Exact<T extends { [key: string]: unknown }> = { [K in keyof T]: T[K] };
export type MakeOptional<T, K extends keyof T> = Omit<T, K> & { [SubKey in K]?: Maybe<T[SubKey]> };
export type MakeMaybe<T, K extends keyof T> = Omit<T, K> & { [SubKey in K]: Maybe<T[SubKey]> };
export type RequireFields<T, K extends keyof T> = { [X in Exclude<keyof T, K>]?: T[X] } & { [P in K]-?: NonNullable<T[P]> };

function fetcher<TData, TVariables>(client: GraphQLClient, query: string, variables?: TVariables, headers?: RequestInit['headers']) {
  return async (): Promise<TData> => client.request<TData, TVariables>(query, variables, headers);
}
/** All built-in and custom scalars, mapped to their actual values */
export type Scalars = {
  ID: string;
  String: string;
  Boolean: boolean;
  Int: number;
  Float: number;
};

export type Mutation = {
  __typename?: 'Mutation';
  signInUser?: Maybe<SignInUserPayload>;
  signUpUser?: Maybe<SignUpUserPayload>;
};


export type MutationSignInUserArgs = {
  input?: InputMaybe<SignInUserInput>;
};


export type MutationSignUpUserArgs = {
  input?: InputMaybe<SignUpUserInput>;
};

export type Query = {
  __typename?: 'Query';
  viewer?: Maybe<Scalars['String']>;
};

export type SignInUserInput = {
  email: Scalars['String'];
  password: Scalars['String'];
};

export type SignInUserPayload = {
  __typename?: 'SignInUserPayload';
  hello?: Maybe<Scalars['String']>;
};

export type SignUpUserInput = {
  email: Scalars['String'];
  password: Scalars['String'];
};

export type SignUpUserPayload = {
  __typename?: 'SignUpUserPayload';
  hello?: Maybe<Scalars['String']>;
};

export type ExampleQueryQueryVariables = Exact<{ [key: string]: never; }>;


export type ExampleQueryQuery = { __typename?: 'Query', viewer?: string | null | undefined };

export type SignInUserMutationMutationVariables = Exact<{
  input: SignInUserInput;
}>;


export type SignInUserMutationMutation = { __typename?: 'Mutation', signInUser?: { __typename?: 'SignInUserPayload', hello?: string | null | undefined } | null | undefined };



export type ResolverTypeWrapper<T> = Promise<T> | T;


export type ResolverWithResolve<TResult, TParent, TContext, TArgs> = {
  resolve: ResolverFn<TResult, TParent, TContext, TArgs>;
};
export type Resolver<TResult, TParent = {}, TContext = {}, TArgs = {}> = ResolverFn<TResult, TParent, TContext, TArgs> | ResolverWithResolve<TResult, TParent, TContext, TArgs>;

export type ResolverFn<TResult, TParent, TContext, TArgs> = (
  parent: TParent,
  args: TArgs,
  context: TContext,
  info: GraphQLResolveInfo
) => Promise<TResult> | TResult;

export type SubscriptionSubscribeFn<TResult, TParent, TContext, TArgs> = (
  parent: TParent,
  args: TArgs,
  context: TContext,
  info: GraphQLResolveInfo
) => AsyncIterable<TResult> | Promise<AsyncIterable<TResult>>;

export type SubscriptionResolveFn<TResult, TParent, TContext, TArgs> = (
  parent: TParent,
  args: TArgs,
  context: TContext,
  info: GraphQLResolveInfo
) => TResult | Promise<TResult>;

export interface SubscriptionSubscriberObject<TResult, TKey extends string, TParent, TContext, TArgs> {
  subscribe: SubscriptionSubscribeFn<{ [key in TKey]: TResult }, TParent, TContext, TArgs>;
  resolve?: SubscriptionResolveFn<TResult, { [key in TKey]: TResult }, TContext, TArgs>;
}

export interface SubscriptionResolverObject<TResult, TParent, TContext, TArgs> {
  subscribe: SubscriptionSubscribeFn<any, TParent, TContext, TArgs>;
  resolve: SubscriptionResolveFn<TResult, any, TContext, TArgs>;
}

export type SubscriptionObject<TResult, TKey extends string, TParent, TContext, TArgs> =
  | SubscriptionSubscriberObject<TResult, TKey, TParent, TContext, TArgs>
  | SubscriptionResolverObject<TResult, TParent, TContext, TArgs>;

export type SubscriptionResolver<TResult, TKey extends string, TParent = {}, TContext = {}, TArgs = {}> =
  | ((...args: any[]) => SubscriptionObject<TResult, TKey, TParent, TContext, TArgs>)
  | SubscriptionObject<TResult, TKey, TParent, TContext, TArgs>;

export type TypeResolveFn<TTypes, TParent = {}, TContext = {}> = (
  parent: TParent,
  context: TContext,
  info: GraphQLResolveInfo
) => Maybe<TTypes> | Promise<Maybe<TTypes>>;

export type IsTypeOfResolverFn<T = {}, TContext = {}> = (obj: T, context: TContext, info: GraphQLResolveInfo) => boolean | Promise<boolean>;

export type NextResolverFn<T> = () => Promise<T>;

export type DirectiveResolverFn<TResult = {}, TParent = {}, TContext = {}, TArgs = {}> = (
  next: NextResolverFn<TResult>,
  parent: TParent,
  args: TArgs,
  context: TContext,
  info: GraphQLResolveInfo
) => TResult | Promise<TResult>;

/** Mapping between all available schema types and the resolvers types */
export type ResolversTypes = {
  Boolean: ResolverTypeWrapper<Scalars['Boolean']>;
  Mutation: ResolverTypeWrapper<{}>;
  Query: ResolverTypeWrapper<{}>;
  SignInUserInput: SignInUserInput;
  SignInUserPayload: ResolverTypeWrapper<SignInUserPayload>;
  SignUpUserInput: SignUpUserInput;
  SignUpUserPayload: ResolverTypeWrapper<SignUpUserPayload>;
  String: ResolverTypeWrapper<Scalars['String']>;
};

/** Mapping between all available schema types and the resolvers parents */
export type ResolversParentTypes = {
  Boolean: Scalars['Boolean'];
  Mutation: {};
  Query: {};
  SignInUserInput: SignInUserInput;
  SignInUserPayload: SignInUserPayload;
  SignUpUserInput: SignUpUserInput;
  SignUpUserPayload: SignUpUserPayload;
  String: Scalars['String'];
};

export type MutationResolvers<ContextType = any, ParentType extends ResolversParentTypes['Mutation'] = ResolversParentTypes['Mutation']> = {
  signInUser?: Resolver<Maybe<ResolversTypes['SignInUserPayload']>, ParentType, ContextType, RequireFields<MutationSignInUserArgs, never>>;
  signUpUser?: Resolver<Maybe<ResolversTypes['SignUpUserPayload']>, ParentType, ContextType, RequireFields<MutationSignUpUserArgs, never>>;
};

export type QueryResolvers<ContextType = any, ParentType extends ResolversParentTypes['Query'] = ResolversParentTypes['Query']> = {
  viewer?: Resolver<Maybe<ResolversTypes['String']>, ParentType, ContextType>;
};

export type SignInUserPayloadResolvers<ContextType = any, ParentType extends ResolversParentTypes['SignInUserPayload'] = ResolversParentTypes['SignInUserPayload']> = {
  hello?: Resolver<Maybe<ResolversTypes['String']>, ParentType, ContextType>;
  __isTypeOf?: IsTypeOfResolverFn<ParentType, ContextType>;
};

export type SignUpUserPayloadResolvers<ContextType = any, ParentType extends ResolversParentTypes['SignUpUserPayload'] = ResolversParentTypes['SignUpUserPayload']> = {
  hello?: Resolver<Maybe<ResolversTypes['String']>, ParentType, ContextType>;
  __isTypeOf?: IsTypeOfResolverFn<ParentType, ContextType>;
};

export type Resolvers<ContextType = any> = {
  Mutation?: MutationResolvers<ContextType>;
  Query?: QueryResolvers<ContextType>;
  SignInUserPayload?: SignInUserPayloadResolvers<ContextType>;
  SignUpUserPayload?: SignUpUserPayloadResolvers<ContextType>;
};



export const ExampleQuery = gql`
    query exampleQuery {
  viewer
}
    `;
export const SignInUserMutation = gql`
    mutation SignInUserMutation($input: SignInUserInput!) {
  signInUser(input: $input) {
    hello
  }
}
    `;

export const ExampleQueryDocument = `
    query exampleQuery {
  viewer
}
    `;
export const useExampleQueryQuery = <
      TData = ExampleQueryQuery,
      TError = unknown
    >(
      client: GraphQLClient,
      variables?: ExampleQueryQueryVariables,
      options?: UseQueryOptions<ExampleQueryQuery, TError, TData>,
      headers?: RequestInit['headers']
    ) =>
    useQuery<ExampleQueryQuery, TError, TData>(
      variables === undefined ? ['exampleQuery'] : ['exampleQuery', variables],
      fetcher<ExampleQueryQuery, ExampleQueryQueryVariables>(client, ExampleQueryDocument, variables, headers),
      options
    );

useExampleQueryQuery.getKey = (variables?: ExampleQueryQueryVariables) => variables === undefined ? ['exampleQuery'] : ['exampleQuery', variables];
;

export const SignInUserMutationDocument = `
    mutation SignInUserMutation($input: SignInUserInput!) {
  signInUser(input: $input) {
    hello
  }
}
    `;
export const useSignInUserMutationMutation = <
      TError = unknown,
      TContext = unknown
    >(
      client: GraphQLClient,
      options?: UseMutationOptions<SignInUserMutationMutation, TError, SignInUserMutationMutationVariables, TContext>,
      headers?: RequestInit['headers']
    ) =>
    useMutation<SignInUserMutationMutation, TError, SignInUserMutationMutationVariables, TContext>(
      'SignInUserMutation',
      (variables?: SignInUserMutationMutationVariables) => fetcher<SignInUserMutationMutation, SignInUserMutationMutationVariables>(client, SignInUserMutationDocument, variables, headers)(),
      options
    );
useSignInUserMutationMutation.getKey = () => 'SignInUserMutation';
