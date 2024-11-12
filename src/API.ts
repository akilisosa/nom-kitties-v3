/* tslint:disable */
/* eslint-disable */
//  This file was automatically generated and should not be edited.

export type CreateKittyInput = {
  id?: string | null,
  name: string,
  color?: string | null,
  type?: string | null,
};

export type ModelKittyConditionInput = {
  name?: ModelStringInput | null,
  color?: ModelStringInput | null,
  type?: ModelStringInput | null,
  and?: Array< ModelKittyConditionInput | null > | null,
  or?: Array< ModelKittyConditionInput | null > | null,
  not?: ModelKittyConditionInput | null,
  createdAt?: ModelStringInput | null,
  updatedAt?: ModelStringInput | null,
};

export type ModelStringInput = {
  ne?: string | null,
  eq?: string | null,
  le?: string | null,
  lt?: string | null,
  ge?: string | null,
  gt?: string | null,
  contains?: string | null,
  notContains?: string | null,
  between?: Array< string | null > | null,
  beginsWith?: string | null,
  attributeExists?: boolean | null,
  attributeType?: ModelAttributeTypes | null,
  size?: ModelSizeInput | null,
};

export enum ModelAttributeTypes {
  binary = "binary",
  binarySet = "binarySet",
  bool = "bool",
  list = "list",
  map = "map",
  number = "number",
  numberSet = "numberSet",
  string = "string",
  stringSet = "stringSet",
  _null = "_null",
}


export type ModelSizeInput = {
  ne?: number | null,
  eq?: number | null,
  le?: number | null,
  lt?: number | null,
  ge?: number | null,
  gt?: number | null,
  between?: Array< number | null > | null,
};

export type Kitty = {
  __typename: "Kitty",
  id: string,
  name: string,
  color?: string | null,
  type?: string | null,
  createdAt: string,
  updatedAt: string,
};

export type UpdateKittyInput = {
  id: string,
  name?: string | null,
  color?: string | null,
  type?: string | null,
};

export type DeleteKittyInput = {
  id: string,
};

export type ModelKittyFilterInput = {
  id?: ModelIDInput | null,
  name?: ModelStringInput | null,
  color?: ModelStringInput | null,
  type?: ModelStringInput | null,
  createdAt?: ModelStringInput | null,
  updatedAt?: ModelStringInput | null,
  and?: Array< ModelKittyFilterInput | null > | null,
  or?: Array< ModelKittyFilterInput | null > | null,
  not?: ModelKittyFilterInput | null,
};

export type ModelIDInput = {
  ne?: string | null,
  eq?: string | null,
  le?: string | null,
  lt?: string | null,
  ge?: string | null,
  gt?: string | null,
  contains?: string | null,
  notContains?: string | null,
  between?: Array< string | null > | null,
  beginsWith?: string | null,
  attributeExists?: boolean | null,
  attributeType?: ModelAttributeTypes | null,
  size?: ModelSizeInput | null,
};

export type ModelKittyConnection = {
  __typename: "ModelKittyConnection",
  items:  Array<Kitty | null >,
  nextToken?: string | null,
};

export type ModelSubscriptionKittyFilterInput = {
  id?: ModelSubscriptionIDInput | null,
  name?: ModelSubscriptionStringInput | null,
  color?: ModelSubscriptionStringInput | null,
  type?: ModelSubscriptionStringInput | null,
  createdAt?: ModelSubscriptionStringInput | null,
  updatedAt?: ModelSubscriptionStringInput | null,
  and?: Array< ModelSubscriptionKittyFilterInput | null > | null,
  or?: Array< ModelSubscriptionKittyFilterInput | null > | null,
};

export type ModelSubscriptionIDInput = {
  ne?: string | null,
  eq?: string | null,
  le?: string | null,
  lt?: string | null,
  ge?: string | null,
  gt?: string | null,
  contains?: string | null,
  notContains?: string | null,
  between?: Array< string | null > | null,
  beginsWith?: string | null,
  in?: Array< string | null > | null,
  notIn?: Array< string | null > | null,
};

export type ModelSubscriptionStringInput = {
  ne?: string | null,
  eq?: string | null,
  le?: string | null,
  lt?: string | null,
  ge?: string | null,
  gt?: string | null,
  contains?: string | null,
  notContains?: string | null,
  between?: Array< string | null > | null,
  beginsWith?: string | null,
  in?: Array< string | null > | null,
  notIn?: Array< string | null > | null,
};

export type CreateKittyMutationVariables = {
  input: CreateKittyInput,
  condition?: ModelKittyConditionInput | null,
};

export type CreateKittyMutation = {
  createKitty?:  {
    __typename: "Kitty",
    id: string,
    name: string,
    color?: string | null,
    type?: string | null,
    createdAt: string,
    updatedAt: string,
  } | null,
};

export type UpdateKittyMutationVariables = {
  input: UpdateKittyInput,
  condition?: ModelKittyConditionInput | null,
};

export type UpdateKittyMutation = {
  updateKitty?:  {
    __typename: "Kitty",
    id: string,
    name: string,
    color?: string | null,
    type?: string | null,
    createdAt: string,
    updatedAt: string,
  } | null,
};

export type DeleteKittyMutationVariables = {
  input: DeleteKittyInput,
  condition?: ModelKittyConditionInput | null,
};

export type DeleteKittyMutation = {
  deleteKitty?:  {
    __typename: "Kitty",
    id: string,
    name: string,
    color?: string | null,
    type?: string | null,
    createdAt: string,
    updatedAt: string,
  } | null,
};

export type GetKittyQueryVariables = {
  id: string,
};

export type GetKittyQuery = {
  getKitty?:  {
    __typename: "Kitty",
    id: string,
    name: string,
    color?: string | null,
    type?: string | null,
    createdAt: string,
    updatedAt: string,
  } | null,
};

export type ListKittiesQueryVariables = {
  filter?: ModelKittyFilterInput | null,
  limit?: number | null,
  nextToken?: string | null,
};

export type ListKittiesQuery = {
  listKitties?:  {
    __typename: "ModelKittyConnection",
    items:  Array< {
      __typename: "Kitty",
      id: string,
      name: string,
      color?: string | null,
      type?: string | null,
      createdAt: string,
      updatedAt: string,
    } | null >,
    nextToken?: string | null,
  } | null,
};

export type OnCreateKittySubscriptionVariables = {
  filter?: ModelSubscriptionKittyFilterInput | null,
};

export type OnCreateKittySubscription = {
  onCreateKitty?:  {
    __typename: "Kitty",
    id: string,
    name: string,
    color?: string | null,
    type?: string | null,
    createdAt: string,
    updatedAt: string,
  } | null,
};

export type OnUpdateKittySubscriptionVariables = {
  filter?: ModelSubscriptionKittyFilterInput | null,
};

export type OnUpdateKittySubscription = {
  onUpdateKitty?:  {
    __typename: "Kitty",
    id: string,
    name: string,
    color?: string | null,
    type?: string | null,
    createdAt: string,
    updatedAt: string,
  } | null,
};

export type OnDeleteKittySubscriptionVariables = {
  filter?: ModelSubscriptionKittyFilterInput | null,
};

export type OnDeleteKittySubscription = {
  onDeleteKitty?:  {
    __typename: "Kitty",
    id: string,
    name: string,
    color?: string | null,
    type?: string | null,
    createdAt: string,
    updatedAt: string,
  } | null,
};
