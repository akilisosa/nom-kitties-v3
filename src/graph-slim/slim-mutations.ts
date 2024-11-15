import * as APITypes from "../API";
type GeneratedMutation<InputType, OutputType> = string & {
  __generatedMutationInput: InputType;
  __generatedMutationOutput: OutputType;
};

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
      currentPlayers
      roomLimit
      inGame
      status
      full
      createdAt
      players
      tempPlayers
      simpleCode
      hostID
      currentRound
      updatedAt
      owner
      __typename
    }
  }
  ` as GeneratedMutation<
    APITypes.CreateRoomMutationVariables,
    APITypes.CreateRoomMutation
  >;

  export const createUserSlim = /* GraphQL */ `mutation CreateUser(
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
      userRoomId
      __typename
    }
  }
  ` as GeneratedMutation<
    APITypes.CreateUserMutationVariables,
    APITypes.CreateUserMutation
  >;

  export const updateUserSlim = /* GraphQL */ `mutation UpdateUser(
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
      userRoomId
      __typename
    }
  }
  ` as GeneratedMutation<
    APITypes.UpdateUserMutationVariables,
    APITypes.UpdateUserMutation
  >;