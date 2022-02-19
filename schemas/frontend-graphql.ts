import { GraphQLResolveInfo } from 'graphql';
import gql from 'graphql-tag';
import { GraphQLClient } from 'graphql-request';
import { RequestInit } from 'graphql-request/dist/types.dom';
import { useQuery, UseQueryOptions } from 'react-query';
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
  updateUser?: Maybe<UpdateUserPayload>;
};


export type MutationUpdateUserArgs = {
  input?: InputMaybe<UpdateUserInput>;
};

export type Query = {
  __typename?: 'Query';
  viewer?: Maybe<Viewer>;
};

export type UpdateUserInput = {
  name?: InputMaybe<Scalars['String']>;
};

export type UpdateUserPayload = {
  __typename?: 'UpdateUserPayload';
  hello?: Maybe<Scalars['String']>;
};

export type User = {
  __typename?: 'User';
  name: Scalars['String'];
};

export type Viewer = {
  __typename?: 'Viewer';
  user: User;
};

export type ExampleQueryQueryVariables = Exact<{ [key: string]: never; }>;


export type ExampleQueryQuery = { __typename?: 'Query', viewer?: { __typename?: 'Viewer', user: { __typename?: 'User', name: string } } | null | undefined };

export type CurrentUserQueryQueryVariables = Exact<{ [key: string]: never; }>;


export type CurrentUserQueryQuery = { __typename?: 'Query', viewer?: { __typename?: 'Viewer', user: { __typename?: 'User', name: string } } | null | undefined };



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
  String: ResolverTypeWrapper<Scalars['String']>;
  UpdateUserInput: UpdateUserInput;
  UpdateUserPayload: ResolverTypeWrapper<UpdateUserPayload>;
  User: ResolverTypeWrapper<User>;
  Viewer: ResolverTypeWrapper<Viewer>;
};

/** Mapping between all available schema types and the resolvers parents */
export type ResolversParentTypes = {
  Boolean: Scalars['Boolean'];
  Mutation: {};
  Query: {};
  String: Scalars['String'];
  UpdateUserInput: UpdateUserInput;
  UpdateUserPayload: UpdateUserPayload;
  User: User;
  Viewer: Viewer;
};

export type MutationResolvers<ContextType = any, ParentType extends ResolversParentTypes['Mutation'] = ResolversParentTypes['Mutation']> = {
  updateUser?: Resolver<Maybe<ResolversTypes['UpdateUserPayload']>, ParentType, ContextType, RequireFields<MutationUpdateUserArgs, never>>;
};

export type QueryResolvers<ContextType = any, ParentType extends ResolversParentTypes['Query'] = ResolversParentTypes['Query']> = {
  viewer?: Resolver<Maybe<ResolversTypes['Viewer']>, ParentType, ContextType>;
};

export type UpdateUserPayloadResolvers<ContextType = any, ParentType extends ResolversParentTypes['UpdateUserPayload'] = ResolversParentTypes['UpdateUserPayload']> = {
  hello?: Resolver<Maybe<ResolversTypes['String']>, ParentType, ContextType>;
  __isTypeOf?: IsTypeOfResolverFn<ParentType, ContextType>;
};

export type UserResolvers<ContextType = any, ParentType extends ResolversParentTypes['User'] = ResolversParentTypes['User']> = {
  name?: Resolver<ResolversTypes['String'], ParentType, ContextType>;
  __isTypeOf?: IsTypeOfResolverFn<ParentType, ContextType>;
};

export type ViewerResolvers<ContextType = any, ParentType extends ResolversParentTypes['Viewer'] = ResolversParentTypes['Viewer']> = {
  user?: Resolver<ResolversTypes['User'], ParentType, ContextType>;
  __isTypeOf?: IsTypeOfResolverFn<ParentType, ContextType>;
};

export type Resolvers<ContextType = any> = {
  Mutation?: MutationResolvers<ContextType>;
  Query?: QueryResolvers<ContextType>;
  UpdateUserPayload?: UpdateUserPayloadResolvers<ContextType>;
  User?: UserResolvers<ContextType>;
  Viewer?: ViewerResolvers<ContextType>;
};



export const ExampleQuery = gql`
    query exampleQuery {
  viewer {
    user {
      name
    }
  }
}
    `;
export const CurrentUserQuery = gql`
    query currentUserQuery {
  viewer {
    user {
      name
    }
  }
}
    `;

export const ExampleQueryDocument = `
    query exampleQuery {
  viewer {
    user {
      name
    }
  }
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

export const CurrentUserQueryDocument = `
    query currentUserQuery {
  viewer {
    user {
      name
    }
  }
}
    `;
export const useCurrentUserQueryQuery = <
      TData = CurrentUserQueryQuery,
      TError = unknown
    >(
      client: GraphQLClient,
      variables?: CurrentUserQueryQueryVariables,
      options?: UseQueryOptions<CurrentUserQueryQuery, TError, TData>,
      headers?: RequestInit['headers']
    ) =>
    useQuery<CurrentUserQueryQuery, TError, TData>(
      variables === undefined ? ['currentUserQuery'] : ['currentUserQuery', variables],
      fetcher<CurrentUserQueryQuery, CurrentUserQueryQueryVariables>(client, CurrentUserQueryDocument, variables, headers),
      options
    );

useCurrentUserQueryQuery.getKey = (variables?: CurrentUserQueryQueryVariables) => variables === undefined ? ['currentUserQuery'] : ['currentUserQuery', variables];
;
