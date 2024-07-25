/* eslint-disable */
import { TypedDocumentNode as DocumentNode } from '@graphql-typed-document-node/core';
export type Maybe<T> = T | null;
export type InputMaybe<T> = Maybe<T>;
export type Exact<T extends { [key: string]: unknown }> = { [K in keyof T]: T[K] };
export type MakeOptional<T, K extends keyof T> = Omit<T, K> & { [SubKey in K]?: Maybe<T[SubKey]> };
export type MakeMaybe<T, K extends keyof T> = Omit<T, K> & { [SubKey in K]: Maybe<T[SubKey]> };
export type MakeEmpty<T extends { [key: string]: unknown }, K extends keyof T> = { [_ in K]?: never };
export type Incremental<T> = T | { [P in keyof T]?: P extends ' $fragmentName' | '__typename' ? T[P] : never };
/** All built-in and custom scalars, mapped to their actual values */
export type Scalars = {
  ID: { input: string; output: string; }
  String: { input: string; output: string; }
  Boolean: { input: boolean; output: boolean; }
  Int: { input: number; output: number; }
  Float: { input: number; output: number; }
  /** `Date` type as integer. Type represents date and time as number of milliseconds from start of UNIX epoch. */
  Timestamp: { input: any; output: any; }
};

/** A data model representing a celebrity */
export type CelebrityModel = {
  __typename?: 'CelebrityModel';
  /** The date the celebrity profile was created. */
  createdAt: Scalars['Timestamp']['output'];
  /** The discipline of the celebrity. */
  discipline: Scalars['String']['output'];
  /** The fee paid for a biggle is to support a cause */
  hasBeneficiary: Scalars['Boolean']['output'];
  /** The ID of the celebrity. */
  id: Scalars['Int']['output'];
  /** The name of the celebrity. */
  name: Scalars['String']['output'];
  /** The number of followers of the celebrity for the selected platform */
  numOfFollowers: Scalars['Int']['output'];
  /** The photo of the celebrity. */
  photo: Scalars['String']['output'];
  /** The platform of the celebrity. */
  platform: Scalars['String']['output'];
  /** The fee to request a biggle from a celebrity */
  price: Scalars['Float']['output'];
  /** The time taken for a celrity to accept a biggle request */
  repliesIn?: Maybe<Scalars['Int']['output']>;
  /** The date the celebrity profile was updated. */
  updatedAt: Scalars['Timestamp']['output'];
  /** The username of the celebrity. */
  username: Scalars['String']['output'];
};

/** Model for paginated memberships reponse */
export type PagedCelebritiesModel = {
  __typename?: 'PagedCelebritiesModel';
  /** The total number of items. */
  count: Scalars['Int']['output'];
  /** The list of celebrities returned */
  data: Array<CelebrityModel>;
  /** The maximum number of items to return */
  limit: Scalars['Int']['output'];
  /** The index of the first item to return. */
  offset: Scalars['Int']['output'];
};

export type Query = {
  __typename?: 'Query';
  /** Fetch celebrities by a category name */
  getCelebritriesByCategory: PagedCelebritiesModel;
};


export type QueryGetCelebritriesByCategoryArgs = {
  category: Scalars['String']['input'];
  limit?: Scalars['Int']['input'];
  offset?: Scalars['Int']['input'];
};

export type GetCelebritriesBlockByCategoryQueryVariables = Exact<{
  category: Scalars['String']['input'];
  limit: Scalars['Int']['input'];
  offset: Scalars['Int']['input'];
}>;


export type GetCelebritriesBlockByCategoryQuery = { __typename?: 'Query', getCelebritriesByCategory: { __typename?: 'PagedCelebritiesModel', count: number, limit: number, offset: number, data: Array<{ __typename?: 'CelebrityModel', id: number, username: string, name: string, discipline: string, photo: string, platform: string, numOfFollowers: number, price: number, hasBeneficiary: boolean, repliesIn?: number | null, createdAt: any, updatedAt: any }> } };

export type GetCelebritriesByCategoryQueryVariables = Exact<{
  category: Scalars['String']['input'];
}>;


export type GetCelebritriesByCategoryQuery = { __typename?: 'Query', getCelebritriesByCategory: { __typename?: 'PagedCelebritiesModel', count: number, limit: number, offset: number, data: Array<{ __typename?: 'CelebrityModel', id: number, username: string, name: string, discipline: string, photo: string, platform: string, numOfFollowers: number, price: number, hasBeneficiary: boolean, repliesIn?: number | null, createdAt: any, updatedAt: any }> } };


export const GetCelebritriesBlockByCategoryDocument = {"kind":"Document","definitions":[{"kind":"OperationDefinition","operation":"query","name":{"kind":"Name","value":"GetCelebritriesBlockByCategory"},"variableDefinitions":[{"kind":"VariableDefinition","variable":{"kind":"Variable","name":{"kind":"Name","value":"category"}},"type":{"kind":"NonNullType","type":{"kind":"NamedType","name":{"kind":"Name","value":"String"}}}},{"kind":"VariableDefinition","variable":{"kind":"Variable","name":{"kind":"Name","value":"limit"}},"type":{"kind":"NonNullType","type":{"kind":"NamedType","name":{"kind":"Name","value":"Int"}}}},{"kind":"VariableDefinition","variable":{"kind":"Variable","name":{"kind":"Name","value":"offset"}},"type":{"kind":"NonNullType","type":{"kind":"NamedType","name":{"kind":"Name","value":"Int"}}}}],"selectionSet":{"kind":"SelectionSet","selections":[{"kind":"Field","name":{"kind":"Name","value":"getCelebritriesByCategory"},"arguments":[{"kind":"Argument","name":{"kind":"Name","value":"category"},"value":{"kind":"Variable","name":{"kind":"Name","value":"category"}}},{"kind":"Argument","name":{"kind":"Name","value":"limit"},"value":{"kind":"Variable","name":{"kind":"Name","value":"limit"}}},{"kind":"Argument","name":{"kind":"Name","value":"offset"},"value":{"kind":"Variable","name":{"kind":"Name","value":"offset"}}}],"selectionSet":{"kind":"SelectionSet","selections":[{"kind":"Field","name":{"kind":"Name","value":"count"}},{"kind":"Field","name":{"kind":"Name","value":"data"},"selectionSet":{"kind":"SelectionSet","selections":[{"kind":"Field","name":{"kind":"Name","value":"id"}},{"kind":"Field","name":{"kind":"Name","value":"username"}},{"kind":"Field","name":{"kind":"Name","value":"name"}},{"kind":"Field","name":{"kind":"Name","value":"discipline"}},{"kind":"Field","name":{"kind":"Name","value":"photo"}},{"kind":"Field","name":{"kind":"Name","value":"platform"}},{"kind":"Field","name":{"kind":"Name","value":"numOfFollowers"}},{"kind":"Field","name":{"kind":"Name","value":"price"}},{"kind":"Field","name":{"kind":"Name","value":"hasBeneficiary"}},{"kind":"Field","name":{"kind":"Name","value":"repliesIn"}},{"kind":"Field","name":{"kind":"Name","value":"createdAt"}},{"kind":"Field","name":{"kind":"Name","value":"updatedAt"}}]}},{"kind":"Field","name":{"kind":"Name","value":"limit"}},{"kind":"Field","name":{"kind":"Name","value":"offset"}}]}}]}}]} as unknown as DocumentNode<GetCelebritriesBlockByCategoryQuery, GetCelebritriesBlockByCategoryQueryVariables>;
export const GetCelebritriesByCategoryDocument = {"kind":"Document","definitions":[{"kind":"OperationDefinition","operation":"query","name":{"kind":"Name","value":"GetCelebritriesByCategory"},"variableDefinitions":[{"kind":"VariableDefinition","variable":{"kind":"Variable","name":{"kind":"Name","value":"category"}},"type":{"kind":"NonNullType","type":{"kind":"NamedType","name":{"kind":"Name","value":"String"}}}}],"selectionSet":{"kind":"SelectionSet","selections":[{"kind":"Field","name":{"kind":"Name","value":"getCelebritriesByCategory"},"arguments":[{"kind":"Argument","name":{"kind":"Name","value":"category"},"value":{"kind":"Variable","name":{"kind":"Name","value":"category"}}}],"selectionSet":{"kind":"SelectionSet","selections":[{"kind":"Field","name":{"kind":"Name","value":"count"}},{"kind":"Field","name":{"kind":"Name","value":"data"},"selectionSet":{"kind":"SelectionSet","selections":[{"kind":"Field","name":{"kind":"Name","value":"id"}},{"kind":"Field","name":{"kind":"Name","value":"username"}},{"kind":"Field","name":{"kind":"Name","value":"name"}},{"kind":"Field","name":{"kind":"Name","value":"discipline"}},{"kind":"Field","name":{"kind":"Name","value":"photo"}},{"kind":"Field","name":{"kind":"Name","value":"platform"}},{"kind":"Field","name":{"kind":"Name","value":"numOfFollowers"}},{"kind":"Field","name":{"kind":"Name","value":"price"}},{"kind":"Field","name":{"kind":"Name","value":"hasBeneficiary"}},{"kind":"Field","name":{"kind":"Name","value":"repliesIn"}},{"kind":"Field","name":{"kind":"Name","value":"createdAt"}},{"kind":"Field","name":{"kind":"Name","value":"updatedAt"}}]}},{"kind":"Field","name":{"kind":"Name","value":"limit"}},{"kind":"Field","name":{"kind":"Name","value":"offset"}}]}}]}}]} as unknown as DocumentNode<GetCelebritriesByCategoryQuery, GetCelebritriesByCategoryQueryVariables>;