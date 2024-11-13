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

export type CreateUserInput = {
  id?: string | null,
  name: string,
  color?: string | null,
  type?: string | null,
  owner: string,
};

export type ModelUserConditionInput = {
  name?: ModelStringInput | null,
  color?: ModelStringInput | null,
  type?: ModelStringInput | null,
  owner?: ModelStringInput | null,
  and?: Array< ModelUserConditionInput | null > | null,
  or?: Array< ModelUserConditionInput | null > | null,
  not?: ModelUserConditionInput | null,
  createdAt?: ModelStringInput | null,
  updatedAt?: ModelStringInput | null,
};

export type User = {
  __typename: "User",
  id: string,
  name: string,
  color?: string | null,
  type?: string | null,
  owner: string,
  createdAt: string,
  updatedAt: string,
};

export type UpdateUserInput = {
  id: string,
  name?: string | null,
  color?: string | null,
  type?: string | null,
  owner?: string | null,
};

export type DeleteUserInput = {
  id: string,
};

export type CreateRoomInput = {
  id?: string | null,
  public?: string | null,
  mode?: string | null,
  rounds?: number | null,
  timeLimit?: number | null,
  players?: number | null,
  roomLimit?: number | null,
  createdAt?: string | null,
  simpleCode?: string | null,
};

export type ModelRoomConditionInput = {
  public?: ModelStringInput | null,
  mode?: ModelStringInput | null,
  rounds?: ModelIntInput | null,
  timeLimit?: ModelIntInput | null,
  players?: ModelIntInput | null,
  roomLimit?: ModelIntInput | null,
  createdAt?: ModelStringInput | null,
  simpleCode?: ModelStringInput | null,
  and?: Array< ModelRoomConditionInput | null > | null,
  or?: Array< ModelRoomConditionInput | null > | null,
  not?: ModelRoomConditionInput | null,
  updatedAt?: ModelStringInput | null,
  owner?: ModelStringInput | null,
};

export type ModelIntInput = {
  ne?: number | null,
  eq?: number | null,
  le?: number | null,
  lt?: number | null,
  ge?: number | null,
  gt?: number | null,
  between?: Array< number | null > | null,
  attributeExists?: boolean | null,
  attributeType?: ModelAttributeTypes | null,
};

export type Room = {
  __typename: "Room",
  id: string,
  public?: string | null,
  mode?: string | null,
  rounds?: number | null,
  timeLimit?: number | null,
  players?: number | null,
  roomLimit?: number | null,
  createdAt?: string | null,
  users?:  Array<User | null > | null,
  simpleCode?: string | null,
  updatedAt: string,
  owner?: string | null,
};

export type UpdateRoomInput = {
  id: string,
  public?: string | null,
  mode?: string | null,
  rounds?: number | null,
  timeLimit?: number | null,
  players?: number | null,
  roomLimit?: number | null,
  createdAt?: string | null,
  simpleCode?: string | null,
};

export type DeleteRoomInput = {
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

export type ModelUserFilterInput = {
  id?: ModelIDInput | null,
  name?: ModelStringInput | null,
  color?: ModelStringInput | null,
  type?: ModelStringInput | null,
  owner?: ModelStringInput | null,
  createdAt?: ModelStringInput | null,
  updatedAt?: ModelStringInput | null,
  and?: Array< ModelUserFilterInput | null > | null,
  or?: Array< ModelUserFilterInput | null > | null,
  not?: ModelUserFilterInput | null,
};

export type ModelUserConnection = {
  __typename: "ModelUserConnection",
  items:  Array<User | null >,
  nextToken?: string | null,
};

export enum ModelSortDirection {
  ASC = "ASC",
  DESC = "DESC",
}


export type ModelRoomFilterInput = {
  id?: ModelIDInput | null,
  public?: ModelStringInput | null,
  mode?: ModelStringInput | null,
  rounds?: ModelIntInput | null,
  timeLimit?: ModelIntInput | null,
  players?: ModelIntInput | null,
  roomLimit?: ModelIntInput | null,
  createdAt?: ModelStringInput | null,
  simpleCode?: ModelStringInput | null,
  updatedAt?: ModelStringInput | null,
  and?: Array< ModelRoomFilterInput | null > | null,
  or?: Array< ModelRoomFilterInput | null > | null,
  not?: ModelRoomFilterInput | null,
  owner?: ModelStringInput | null,
};

export type ModelRoomConnection = {
  __typename: "ModelRoomConnection",
  items:  Array<Room | null >,
  nextToken?: string | null,
};

export type ModelStringKeyConditionInput = {
  eq?: string | null,
  le?: string | null,
  lt?: string | null,
  ge?: string | null,
  gt?: string | null,
  between?: Array< string | null > | null,
  beginsWith?: string | null,
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

export type ModelSubscriptionUserFilterInput = {
  id?: ModelSubscriptionIDInput | null,
  name?: ModelSubscriptionStringInput | null,
  color?: ModelSubscriptionStringInput | null,
  type?: ModelSubscriptionStringInput | null,
  createdAt?: ModelSubscriptionStringInput | null,
  updatedAt?: ModelSubscriptionStringInput | null,
  and?: Array< ModelSubscriptionUserFilterInput | null > | null,
  or?: Array< ModelSubscriptionUserFilterInput | null > | null,
  owner?: ModelStringInput | null,
};

export type ModelSubscriptionRoomFilterInput = {
  id?: ModelSubscriptionIDInput | null,
  public?: ModelSubscriptionStringInput | null,
  mode?: ModelSubscriptionStringInput | null,
  rounds?: ModelSubscriptionIntInput | null,
  timeLimit?: ModelSubscriptionIntInput | null,
  players?: ModelSubscriptionIntInput | null,
  roomLimit?: ModelSubscriptionIntInput | null,
  createdAt?: ModelSubscriptionStringInput | null,
  simpleCode?: ModelSubscriptionStringInput | null,
  updatedAt?: ModelSubscriptionStringInput | null,
  and?: Array< ModelSubscriptionRoomFilterInput | null > | null,
  or?: Array< ModelSubscriptionRoomFilterInput | null > | null,
  owner?: ModelStringInput | null,
};

export type ModelSubscriptionIntInput = {
  ne?: number | null,
  eq?: number | null,
  le?: number | null,
  lt?: number | null,
  ge?: number | null,
  gt?: number | null,
  between?: Array< number | null > | null,
  in?: Array< number | null > | null,
  notIn?: Array< number | null > | null,
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

export type CreateUserMutationVariables = {
  input: CreateUserInput,
  condition?: ModelUserConditionInput | null,
};

export type CreateUserMutation = {
  createUser?:  {
    __typename: "User",
    id: string,
    name: string,
    color?: string | null,
    type?: string | null,
    owner: string,
    createdAt: string,
    updatedAt: string,
  } | null,
};

export type UpdateUserMutationVariables = {
  input: UpdateUserInput,
  condition?: ModelUserConditionInput | null,
};

export type UpdateUserMutation = {
  updateUser?:  {
    __typename: "User",
    id: string,
    name: string,
    color?: string | null,
    type?: string | null,
    owner: string,
    createdAt: string,
    updatedAt: string,
  } | null,
};

export type DeleteUserMutationVariables = {
  input: DeleteUserInput,
  condition?: ModelUserConditionInput | null,
};

export type DeleteUserMutation = {
  deleteUser?:  {
    __typename: "User",
    id: string,
    name: string,
    color?: string | null,
    type?: string | null,
    owner: string,
    createdAt: string,
    updatedAt: string,
  } | null,
};

export type CreateRoomMutationVariables = {
  input: CreateRoomInput,
  condition?: ModelRoomConditionInput | null,
};

export type CreateRoomMutation = {
  createRoom?:  {
    __typename: "Room",
    id: string,
    public?: string | null,
    mode?: string | null,
    rounds?: number | null,
    timeLimit?: number | null,
    players?: number | null,
    roomLimit?: number | null,
    createdAt?: string | null,
    users?:  Array< {
      __typename: "User",
      id: string,
      name: string,
      color?: string | null,
      type?: string | null,
      owner: string,
      createdAt: string,
      updatedAt: string,
    } | null > | null,
    simpleCode?: string | null,
    updatedAt: string,
    owner?: string | null,
  } | null,
};

export type UpdateRoomMutationVariables = {
  input: UpdateRoomInput,
  condition?: ModelRoomConditionInput | null,
};

export type UpdateRoomMutation = {
  updateRoom?:  {
    __typename: "Room",
    id: string,
    public?: string | null,
    mode?: string | null,
    rounds?: number | null,
    timeLimit?: number | null,
    players?: number | null,
    roomLimit?: number | null,
    createdAt?: string | null,
    users?:  Array< {
      __typename: "User",
      id: string,
      name: string,
      color?: string | null,
      type?: string | null,
      owner: string,
      createdAt: string,
      updatedAt: string,
    } | null > | null,
    simpleCode?: string | null,
    updatedAt: string,
    owner?: string | null,
  } | null,
};

export type DeleteRoomMutationVariables = {
  input: DeleteRoomInput,
  condition?: ModelRoomConditionInput | null,
};

export type DeleteRoomMutation = {
  deleteRoom?:  {
    __typename: "Room",
    id: string,
    public?: string | null,
    mode?: string | null,
    rounds?: number | null,
    timeLimit?: number | null,
    players?: number | null,
    roomLimit?: number | null,
    createdAt?: string | null,
    users?:  Array< {
      __typename: "User",
      id: string,
      name: string,
      color?: string | null,
      type?: string | null,
      owner: string,
      createdAt: string,
      updatedAt: string,
    } | null > | null,
    simpleCode?: string | null,
    updatedAt: string,
    owner?: string | null,
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

export type GetUserQueryVariables = {
  id: string,
};

export type GetUserQuery = {
  getUser?:  {
    __typename: "User",
    id: string,
    name: string,
    color?: string | null,
    type?: string | null,
    owner: string,
    createdAt: string,
    updatedAt: string,
  } | null,
};

export type ListUsersQueryVariables = {
  filter?: ModelUserFilterInput | null,
  limit?: number | null,
  nextToken?: string | null,
};

export type ListUsersQuery = {
  listUsers?:  {
    __typename: "ModelUserConnection",
    items:  Array< {
      __typename: "User",
      id: string,
      name: string,
      color?: string | null,
      type?: string | null,
      owner: string,
      createdAt: string,
      updatedAt: string,
    } | null >,
    nextToken?: string | null,
  } | null,
};

export type UsersByOwnerQueryVariables = {
  owner: string,
  sortDirection?: ModelSortDirection | null,
  filter?: ModelUserFilterInput | null,
  limit?: number | null,
  nextToken?: string | null,
};

export type UsersByOwnerQuery = {
  usersByOwner?:  {
    __typename: "ModelUserConnection",
    items:  Array< {
      __typename: "User",
      id: string,
      name: string,
      color?: string | null,
      type?: string | null,
      owner: string,
      createdAt: string,
      updatedAt: string,
    } | null >,
    nextToken?: string | null,
  } | null,
};

export type GetRoomQueryVariables = {
  id: string,
};

export type GetRoomQuery = {
  getRoom?:  {
    __typename: "Room",
    id: string,
    public?: string | null,
    mode?: string | null,
    rounds?: number | null,
    timeLimit?: number | null,
    players?: number | null,
    roomLimit?: number | null,
    createdAt?: string | null,
    users?:  Array< {
      __typename: "User",
      id: string,
      name: string,
      color?: string | null,
      type?: string | null,
      owner: string,
      createdAt: string,
      updatedAt: string,
    } | null > | null,
    simpleCode?: string | null,
    updatedAt: string,
    owner?: string | null,
  } | null,
};

export type ListRoomsQueryVariables = {
  filter?: ModelRoomFilterInput | null,
  limit?: number | null,
  nextToken?: string | null,
};

export type ListRoomsQuery = {
  listRooms?:  {
    __typename: "ModelRoomConnection",
    items:  Array< {
      __typename: "Room",
      id: string,
      public?: string | null,
      mode?: string | null,
      rounds?: number | null,
      timeLimit?: number | null,
      players?: number | null,
      roomLimit?: number | null,
      createdAt?: string | null,
      simpleCode?: string | null,
      updatedAt: string,
      owner?: string | null,
    } | null >,
    nextToken?: string | null,
  } | null,
};

export type RoomsByPublicAndCreatedAtQueryVariables = {
  public: string,
  createdAt?: ModelStringKeyConditionInput | null,
  sortDirection?: ModelSortDirection | null,
  filter?: ModelRoomFilterInput | null,
  limit?: number | null,
  nextToken?: string | null,
};

export type RoomsByPublicAndCreatedAtQuery = {
  roomsByPublicAndCreatedAt?:  {
    __typename: "ModelRoomConnection",
    items:  Array< {
      __typename: "Room",
      id: string,
      public?: string | null,
      mode?: string | null,
      rounds?: number | null,
      timeLimit?: number | null,
      players?: number | null,
      roomLimit?: number | null,
      createdAt?: string | null,
      simpleCode?: string | null,
      updatedAt: string,
      owner?: string | null,
    } | null >,
    nextToken?: string | null,
  } | null,
};

export type RoomsBySimpleCodeQueryVariables = {
  simpleCode: string,
  sortDirection?: ModelSortDirection | null,
  filter?: ModelRoomFilterInput | null,
  limit?: number | null,
  nextToken?: string | null,
};

export type RoomsBySimpleCodeQuery = {
  roomsBySimpleCode?:  {
    __typename: "ModelRoomConnection",
    items:  Array< {
      __typename: "Room",
      id: string,
      public?: string | null,
      mode?: string | null,
      rounds?: number | null,
      timeLimit?: number | null,
      players?: number | null,
      roomLimit?: number | null,
      createdAt?: string | null,
      simpleCode?: string | null,
      updatedAt: string,
      owner?: string | null,
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

export type OnCreateUserSubscriptionVariables = {
  filter?: ModelSubscriptionUserFilterInput | null,
  owner?: string | null,
};

export type OnCreateUserSubscription = {
  onCreateUser?:  {
    __typename: "User",
    id: string,
    name: string,
    color?: string | null,
    type?: string | null,
    owner: string,
    createdAt: string,
    updatedAt: string,
  } | null,
};

export type OnUpdateUserSubscriptionVariables = {
  filter?: ModelSubscriptionUserFilterInput | null,
  owner?: string | null,
};

export type OnUpdateUserSubscription = {
  onUpdateUser?:  {
    __typename: "User",
    id: string,
    name: string,
    color?: string | null,
    type?: string | null,
    owner: string,
    createdAt: string,
    updatedAt: string,
  } | null,
};

export type OnDeleteUserSubscriptionVariables = {
  filter?: ModelSubscriptionUserFilterInput | null,
  owner?: string | null,
};

export type OnDeleteUserSubscription = {
  onDeleteUser?:  {
    __typename: "User",
    id: string,
    name: string,
    color?: string | null,
    type?: string | null,
    owner: string,
    createdAt: string,
    updatedAt: string,
  } | null,
};

export type OnCreateRoomSubscriptionVariables = {
  filter?: ModelSubscriptionRoomFilterInput | null,
  owner?: string | null,
};

export type OnCreateRoomSubscription = {
  onCreateRoom?:  {
    __typename: "Room",
    id: string,
    public?: string | null,
    mode?: string | null,
    rounds?: number | null,
    timeLimit?: number | null,
    players?: number | null,
    roomLimit?: number | null,
    createdAt?: string | null,
    users?:  Array< {
      __typename: "User",
      id: string,
      name: string,
      color?: string | null,
      type?: string | null,
      owner: string,
      createdAt: string,
      updatedAt: string,
    } | null > | null,
    simpleCode?: string | null,
    updatedAt: string,
    owner?: string | null,
  } | null,
};

export type OnUpdateRoomSubscriptionVariables = {
  filter?: ModelSubscriptionRoomFilterInput | null,
  owner?: string | null,
};

export type OnUpdateRoomSubscription = {
  onUpdateRoom?:  {
    __typename: "Room",
    id: string,
    public?: string | null,
    mode?: string | null,
    rounds?: number | null,
    timeLimit?: number | null,
    players?: number | null,
    roomLimit?: number | null,
    createdAt?: string | null,
    users?:  Array< {
      __typename: "User",
      id: string,
      name: string,
      color?: string | null,
      type?: string | null,
      owner: string,
      createdAt: string,
      updatedAt: string,
    } | null > | null,
    simpleCode?: string | null,
    updatedAt: string,
    owner?: string | null,
  } | null,
};

export type OnDeleteRoomSubscriptionVariables = {
  filter?: ModelSubscriptionRoomFilterInput | null,
  owner?: string | null,
};

export type OnDeleteRoomSubscription = {
  onDeleteRoom?:  {
    __typename: "Room",
    id: string,
    public?: string | null,
    mode?: string | null,
    rounds?: number | null,
    timeLimit?: number | null,
    players?: number | null,
    roomLimit?: number | null,
    createdAt?: string | null,
    users?:  Array< {
      __typename: "User",
      id: string,
      name: string,
      color?: string | null,
      type?: string | null,
      owner: string,
      createdAt: string,
      updatedAt: string,
    } | null > | null,
    simpleCode?: string | null,
    updatedAt: string,
    owner?: string | null,
  } | null,
};
