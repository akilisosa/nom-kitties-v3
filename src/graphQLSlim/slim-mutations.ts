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