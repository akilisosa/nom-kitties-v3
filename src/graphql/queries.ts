/* tslint:disable */
/* eslint-disable */
// this is an auto generated file. This will be overwritten

import * as APITypes from "../API";
type GeneratedQuery<InputType, OutputType> = string & {
  __generatedQueryInput: InputType;
  __generatedQueryOutput: OutputType;
};

export const getKitty = /* GraphQL */ `query GetKitty($id: ID!) {
  getKitty(id: $id) {
    id
    name
    color
    type
    createdAt
    updatedAt
    __typename
  }
}
` as GeneratedQuery<APITypes.GetKittyQueryVariables, APITypes.GetKittyQuery>;
export const listKitties = /* GraphQL */ `query ListKitties(
  $filter: ModelKittyFilterInput
  $limit: Int
  $nextToken: String
) {
  listKitties(filter: $filter, limit: $limit, nextToken: $nextToken) {
    items {
      id
      name
      color
      type
      createdAt
      updatedAt
      __typename
    }
    nextToken
    __typename
  }
}
` as GeneratedQuery<
  APITypes.ListKittiesQueryVariables,
  APITypes.ListKittiesQuery
>;
