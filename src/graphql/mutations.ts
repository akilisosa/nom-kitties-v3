/* tslint:disable */
/* eslint-disable */
// this is an auto generated file. This will be overwritten

import * as APITypes from "../API";
type GeneratedMutation<InputType, OutputType> = string & {
  __generatedMutationInput: InputType;
  __generatedMutationOutput: OutputType;
};

export const createKitty = /* GraphQL */ `mutation CreateKitty(
  $input: CreateKittyInput!
  $condition: ModelKittyConditionInput
) {
  createKitty(input: $input, condition: $condition) {
    id
    name
    color
    type
    createdAt
    updatedAt
    __typename
  }
}
` as GeneratedMutation<
  APITypes.CreateKittyMutationVariables,
  APITypes.CreateKittyMutation
>;
export const updateKitty = /* GraphQL */ `mutation UpdateKitty(
  $input: UpdateKittyInput!
  $condition: ModelKittyConditionInput
) {
  updateKitty(input: $input, condition: $condition) {
    id
    name
    color
    type
    createdAt
    updatedAt
    __typename
  }
}
` as GeneratedMutation<
  APITypes.UpdateKittyMutationVariables,
  APITypes.UpdateKittyMutation
>;
export const deleteKitty = /* GraphQL */ `mutation DeleteKitty(
  $input: DeleteKittyInput!
  $condition: ModelKittyConditionInput
) {
  deleteKitty(input: $input, condition: $condition) {
    id
    name
    color
    type
    createdAt
    updatedAt
    __typename
  }
}
` as GeneratedMutation<
  APITypes.DeleteKittyMutationVariables,
  APITypes.DeleteKittyMutation
>;
export const createUser = /* GraphQL */ `mutation CreateUser(
  $input: CreateUserInput!
  $condition: ModelUserConditionInput
) {
  createUser(input: $input, condition: $condition) {
    id
    name
    color
    type
    owner
    createdAt
    updatedAt
    __typename
  }
}
` as GeneratedMutation<
  APITypes.CreateUserMutationVariables,
  APITypes.CreateUserMutation
>;
export const updateUser = /* GraphQL */ `mutation UpdateUser(
  $input: UpdateUserInput!
  $condition: ModelUserConditionInput
) {
  updateUser(input: $input, condition: $condition) {
    id
    name
    color
    type
    owner
    createdAt
    updatedAt
    __typename
  }
}
` as GeneratedMutation<
  APITypes.UpdateUserMutationVariables,
  APITypes.UpdateUserMutation
>;
export const deleteUser = /* GraphQL */ `mutation DeleteUser(
  $input: DeleteUserInput!
  $condition: ModelUserConditionInput
) {
  deleteUser(input: $input, condition: $condition) {
    id
    name
    color
    type
    owner
    createdAt
    updatedAt
    __typename
  }
}
` as GeneratedMutation<
  APITypes.DeleteUserMutationVariables,
  APITypes.DeleteUserMutation
>;
export const createRoom = /* GraphQL */ `mutation CreateRoom(
  $input: CreateRoomInput!
  $condition: ModelRoomConditionInput
) {
  createRoom(input: $input, condition: $condition) {
    id
    public
    mode
    rounds
    timeLimit
    players
    roomLimit
    createdAt
    users {
      id
      name
      color
      type
      owner
      createdAt
      updatedAt
      __typename
    }
    simpleCode
    updatedAt
    owner
    __typename
  }
}
` as GeneratedMutation<
  APITypes.CreateRoomMutationVariables,
  APITypes.CreateRoomMutation
>;
export const updateRoom = /* GraphQL */ `mutation UpdateRoom(
  $input: UpdateRoomInput!
  $condition: ModelRoomConditionInput
) {
  updateRoom(input: $input, condition: $condition) {
    id
    public
    mode
    rounds
    timeLimit
    players
    roomLimit
    createdAt
    users {
      id
      name
      color
      type
      owner
      createdAt
      updatedAt
      __typename
    }
    simpleCode
    updatedAt
    owner
    __typename
  }
}
` as GeneratedMutation<
  APITypes.UpdateRoomMutationVariables,
  APITypes.UpdateRoomMutation
>;
export const deleteRoom = /* GraphQL */ `mutation DeleteRoom(
  $input: DeleteRoomInput!
  $condition: ModelRoomConditionInput
) {
  deleteRoom(input: $input, condition: $condition) {
    id
    public
    mode
    rounds
    timeLimit
    players
    roomLimit
    createdAt
    users {
      id
      name
      color
      type
      owner
      createdAt
      updatedAt
      __typename
    }
    simpleCode
    updatedAt
    owner
    __typename
  }
}
` as GeneratedMutation<
  APITypes.DeleteRoomMutationVariables,
  APITypes.DeleteRoomMutation
>;
