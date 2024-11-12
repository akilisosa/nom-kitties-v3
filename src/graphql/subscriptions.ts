/* tslint:disable */
/* eslint-disable */
// this is an auto generated file. This will be overwritten

import * as APITypes from "../API";
type GeneratedSubscription<InputType, OutputType> = string & {
  __generatedSubscriptionInput: InputType;
  __generatedSubscriptionOutput: OutputType;
};

export const onCreateKitty = /* GraphQL */ `subscription OnCreateKitty($filter: ModelSubscriptionKittyFilterInput) {
  onCreateKitty(filter: $filter) {
    id
    name
    color
    type
    createdAt
    updatedAt
    __typename
  }
}
` as GeneratedSubscription<
  APITypes.OnCreateKittySubscriptionVariables,
  APITypes.OnCreateKittySubscription
>;
export const onUpdateKitty = /* GraphQL */ `subscription OnUpdateKitty($filter: ModelSubscriptionKittyFilterInput) {
  onUpdateKitty(filter: $filter) {
    id
    name
    color
    type
    createdAt
    updatedAt
    __typename
  }
}
` as GeneratedSubscription<
  APITypes.OnUpdateKittySubscriptionVariables,
  APITypes.OnUpdateKittySubscription
>;
export const onDeleteKitty = /* GraphQL */ `subscription OnDeleteKitty($filter: ModelSubscriptionKittyFilterInput) {
  onDeleteKitty(filter: $filter) {
    id
    name
    color
    type
    createdAt
    updatedAt
    __typename
  }
}
` as GeneratedSubscription<
  APITypes.OnDeleteKittySubscriptionVariables,
  APITypes.OnDeleteKittySubscription
>;
export const onCreateUser = /* GraphQL */ `subscription OnCreateUser(
  $filter: ModelSubscriptionUserFilterInput
  $owner: String
) {
  onCreateUser(filter: $filter, owner: $owner) {
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
` as GeneratedSubscription<
  APITypes.OnCreateUserSubscriptionVariables,
  APITypes.OnCreateUserSubscription
>;
export const onUpdateUser = /* GraphQL */ `subscription OnUpdateUser(
  $filter: ModelSubscriptionUserFilterInput
  $owner: String
) {
  onUpdateUser(filter: $filter, owner: $owner) {
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
` as GeneratedSubscription<
  APITypes.OnUpdateUserSubscriptionVariables,
  APITypes.OnUpdateUserSubscription
>;
export const onDeleteUser = /* GraphQL */ `subscription OnDeleteUser(
  $filter: ModelSubscriptionUserFilterInput
  $owner: String
) {
  onDeleteUser(filter: $filter, owner: $owner) {
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
` as GeneratedSubscription<
  APITypes.OnDeleteUserSubscriptionVariables,
  APITypes.OnDeleteUserSubscription
>;
export const onCreateRoom = /* GraphQL */ `subscription OnCreateRoom(
  $filter: ModelSubscriptionRoomFilterInput
  $owner: String
) {
  onCreateRoom(filter: $filter, owner: $owner) {
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
` as GeneratedSubscription<
  APITypes.OnCreateRoomSubscriptionVariables,
  APITypes.OnCreateRoomSubscription
>;
export const onUpdateRoom = /* GraphQL */ `subscription OnUpdateRoom(
  $filter: ModelSubscriptionRoomFilterInput
  $owner: String
) {
  onUpdateRoom(filter: $filter, owner: $owner) {
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
` as GeneratedSubscription<
  APITypes.OnUpdateRoomSubscriptionVariables,
  APITypes.OnUpdateRoomSubscription
>;
export const onDeleteRoom = /* GraphQL */ `subscription OnDeleteRoom(
  $filter: ModelSubscriptionRoomFilterInput
  $owner: String
) {
  onDeleteRoom(filter: $filter, owner: $owner) {
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
` as GeneratedSubscription<
  APITypes.OnDeleteRoomSubscriptionVariables,
  APITypes.OnDeleteRoomSubscription
>;
