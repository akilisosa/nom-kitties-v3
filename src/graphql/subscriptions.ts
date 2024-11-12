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
