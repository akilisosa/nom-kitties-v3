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
