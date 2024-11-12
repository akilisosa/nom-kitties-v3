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
export const getUser = /* GraphQL */ `query GetUser($id: ID!) {
  getUser(id: $id) {
    id
    name
    color
    type
    createdAt
    updatedAt
    owner
    __typename
  }
}
` as GeneratedQuery<APITypes.GetUserQueryVariables, APITypes.GetUserQuery>;
export const listUsers = /* GraphQL */ `query ListUsers(
  $filter: ModelUserFilterInput
  $limit: Int
  $nextToken: String
) {
  listUsers(filter: $filter, limit: $limit, nextToken: $nextToken) {
    items {
      id
      name
      color
      type
      createdAt
      updatedAt
      owner
      __typename
    }
    nextToken
    __typename
  }
}
` as GeneratedQuery<APITypes.ListUsersQueryVariables, APITypes.ListUsersQuery>;
export const getRoom = /* GraphQL */ `query GetRoom($id: ID!) {
  getRoom(id: $id) {
    id
    name
    mode
    rounds
    timeLimit
    roomLimit
    users {
      id
      name
      color
      type
      createdAt
      updatedAt
      owner
      __typename
    }
    simpleCode
    createdAt
    updatedAt
    owner
    __typename
  }
}
` as GeneratedQuery<APITypes.GetRoomQueryVariables, APITypes.GetRoomQuery>;
export const listRooms = /* GraphQL */ `query ListRooms(
  $filter: ModelRoomFilterInput
  $limit: Int
  $nextToken: String
) {
  listRooms(filter: $filter, limit: $limit, nextToken: $nextToken) {
    items {
      id
      name
      mode
      rounds
      timeLimit
      roomLimit
      simpleCode
      createdAt
      updatedAt
      owner
      __typename
    }
    nextToken
    __typename
  }
}
` as GeneratedQuery<APITypes.ListRoomsQueryVariables, APITypes.ListRoomsQuery>;
export const roomsBySimpleCode = /* GraphQL */ `query RoomsBySimpleCode(
  $simpleCode: String!
  $sortDirection: ModelSortDirection
  $filter: ModelRoomFilterInput
  $limit: Int
  $nextToken: String
) {
  roomsBySimpleCode(
    simpleCode: $simpleCode
    sortDirection: $sortDirection
    filter: $filter
    limit: $limit
    nextToken: $nextToken
  ) {
    items {
      id
      name
      mode
      rounds
      timeLimit
      roomLimit
      simpleCode
      createdAt
      updatedAt
      owner
      __typename
    }
    nextToken
    __typename
  }
}
` as GeneratedQuery<
  APITypes.RoomsBySimpleCodeQueryVariables,
  APITypes.RoomsBySimpleCodeQuery
>;
