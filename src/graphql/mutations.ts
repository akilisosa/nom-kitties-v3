/* tslint:disable */
/* eslint-disable */
// this is an auto generated file. This will be overwritten

import * as APITypes from "../API";
type GeneratedMutation<InputType, OutputType> = string & {
  __generatedMutationInput: InputType;
  __generatedMutationOutput: OutputType;
};

export const joinRoom = /* GraphQL */ `mutation JoinRoom($roomID: ID!) {
  joinRoom(roomID: $roomID) {
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
    playing
    players
    tempPlayers
    simpleCode
    host {
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
    hostID
    currentRound
    updatedAt
    gameData {
      id
      roomID
      activePlayers
      scores
      currentRound
      roundData
      lastUpdated
      gameStarted
      createdAt
      updatedAt
      owner
      __typename
    }
    roomGameDataId
    owner
    __typename
  }
}
` as GeneratedMutation<
  APITypes.JoinRoomMutationVariables,
  APITypes.JoinRoomMutation
>;
export const leaveRoom = /* GraphQL */ `mutation LeaveRoom($roomID: ID!) {
  leaveRoom(roomID: $roomID) {
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
    playing
    players
    tempPlayers
    simpleCode
    host {
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
    hostID
    currentRound
    updatedAt
    gameData {
      id
      roomID
      activePlayers
      scores
      currentRound
      roundData
      lastUpdated
      gameStarted
      createdAt
      updatedAt
      owner
      __typename
    }
    roomGameDataId
    owner
    __typename
  }
}
` as GeneratedMutation<
  APITypes.LeaveRoomMutationVariables,
  APITypes.LeaveRoomMutation
>;
export const updateGameState = /* GraphQL */ `mutation UpdateGameState($roomID: ID!, $gameData: GameStateInput!) {
  updateGameState(roomID: $roomID, gameData: $gameData) {
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
    playing
    players
    tempPlayers
    simpleCode
    host {
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
    hostID
    currentRound
    updatedAt
    gameData {
      id
      roomID
      activePlayers
      scores
      currentRound
      roundData
      lastUpdated
      gameStarted
      createdAt
      updatedAt
      owner
      __typename
    }
    roomGameDataId
    owner
    __typename
  }
}
` as GeneratedMutation<
  APITypes.UpdateGameStateMutationVariables,
  APITypes.UpdateGameStateMutation
>;
export const sendChatMessage = /* GraphQL */ `mutation SendChatMessage(
  $roomID: ID!
  $message: String!
  $sender: String!
  $color: String!
) {
  sendChatMessage(
    roomID: $roomID
    message: $message
    sender: $sender
    color: $color
  ) {
    roomID
    message
    sender
    color
    timestamp
    __typename
  }
}
` as GeneratedMutation<
  APITypes.SendChatMessageMutationVariables,
  APITypes.SendChatMessageMutation
>;
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
    room {
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
      playing
      players
      tempPlayers
      simpleCode
      hostID
      currentRound
      updatedAt
      roomGameDataId
      owner
      __typename
    }
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
export const updateUser = /* GraphQL */ `mutation UpdateUser(
  $input: UpdateUserInput!
  $condition: ModelUserConditionInput
) {
  updateUser(input: $input, condition: $condition) {
    id
    name
    color
    type
    room {
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
      playing
      players
      tempPlayers
      simpleCode
      hostID
      currentRound
      updatedAt
      roomGameDataId
      owner
      __typename
    }
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
export const deleteUser = /* GraphQL */ `mutation DeleteUser(
  $input: DeleteUserInput!
  $condition: ModelUserConditionInput
) {
  deleteUser(input: $input, condition: $condition) {
    id
    name
    color
    type
    room {
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
      playing
      players
      tempPlayers
      simpleCode
      hostID
      currentRound
      updatedAt
      roomGameDataId
      owner
      __typename
    }
    owner
    createdAt
    updatedAt
    userRoomId
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
    currentPlayers
    roomLimit
    inGame
    status
    full
    createdAt
    playing
    players
    tempPlayers
    simpleCode
    host {
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
    hostID
    currentRound
    updatedAt
    gameData {
      id
      roomID
      activePlayers
      scores
      currentRound
      roundData
      lastUpdated
      gameStarted
      createdAt
      updatedAt
      owner
      __typename
    }
    roomGameDataId
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
    currentPlayers
    roomLimit
    inGame
    status
    full
    createdAt
    playing
    players
    tempPlayers
    simpleCode
    host {
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
    hostID
    currentRound
    updatedAt
    gameData {
      id
      roomID
      activePlayers
      scores
      currentRound
      roundData
      lastUpdated
      gameStarted
      createdAt
      updatedAt
      owner
      __typename
    }
    roomGameDataId
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
    currentPlayers
    roomLimit
    inGame
    status
    full
    createdAt
    playing
    players
    tempPlayers
    simpleCode
    host {
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
    hostID
    currentRound
    updatedAt
    gameData {
      id
      roomID
      activePlayers
      scores
      currentRound
      roundData
      lastUpdated
      gameStarted
      createdAt
      updatedAt
      owner
      __typename
    }
    roomGameDataId
    owner
    __typename
  }
}
` as GeneratedMutation<
  APITypes.DeleteRoomMutationVariables,
  APITypes.DeleteRoomMutation
>;
export const createGameData = /* GraphQL */ `mutation CreateGameData(
  $input: CreateGameDataInput!
  $condition: ModelGameDataConditionInput
) {
  createGameData(input: $input, condition: $condition) {
    id
    roomID
    activePlayers
    scores
    currentRound
    roundData
    lastUpdated
    gameStarted
    room {
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
      playing
      players
      tempPlayers
      simpleCode
      hostID
      currentRound
      updatedAt
      roomGameDataId
      owner
      __typename
    }
    createdAt
    updatedAt
    owner
    __typename
  }
}
` as GeneratedMutation<
  APITypes.CreateGameDataMutationVariables,
  APITypes.CreateGameDataMutation
>;
export const updateGameData = /* GraphQL */ `mutation UpdateGameData(
  $input: UpdateGameDataInput!
  $condition: ModelGameDataConditionInput
) {
  updateGameData(input: $input, condition: $condition) {
    id
    roomID
    activePlayers
    scores
    currentRound
    roundData
    lastUpdated
    gameStarted
    room {
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
      playing
      players
      tempPlayers
      simpleCode
      hostID
      currentRound
      updatedAt
      roomGameDataId
      owner
      __typename
    }
    createdAt
    updatedAt
    owner
    __typename
  }
}
` as GeneratedMutation<
  APITypes.UpdateGameDataMutationVariables,
  APITypes.UpdateGameDataMutation
>;
export const deleteGameData = /* GraphQL */ `mutation DeleteGameData(
  $input: DeleteGameDataInput!
  $condition: ModelGameDataConditionInput
) {
  deleteGameData(input: $input, condition: $condition) {
    id
    roomID
    activePlayers
    scores
    currentRound
    roundData
    lastUpdated
    gameStarted
    room {
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
      playing
      players
      tempPlayers
      simpleCode
      hostID
      currentRound
      updatedAt
      roomGameDataId
      owner
      __typename
    }
    createdAt
    updatedAt
    owner
    __typename
  }
}
` as GeneratedMutation<
  APITypes.DeleteGameDataMutationVariables,
  APITypes.DeleteGameDataMutation
>;
export const createMessage = /* GraphQL */ `mutation CreateMessage(
  $input: CreateMessageInput!
  $condition: ModelMessageConditionInput
) {
  createMessage(input: $input, condition: $condition) {
    id
    roomID
    content
    playerID
    playerName
    createdAt
    type
    updatedAt
    owner
    __typename
  }
}
` as GeneratedMutation<
  APITypes.CreateMessageMutationVariables,
  APITypes.CreateMessageMutation
>;
export const updateMessage = /* GraphQL */ `mutation UpdateMessage(
  $input: UpdateMessageInput!
  $condition: ModelMessageConditionInput
) {
  updateMessage(input: $input, condition: $condition) {
    id
    roomID
    content
    playerID
    playerName
    createdAt
    type
    updatedAt
    owner
    __typename
  }
}
` as GeneratedMutation<
  APITypes.UpdateMessageMutationVariables,
  APITypes.UpdateMessageMutation
>;
export const deleteMessage = /* GraphQL */ `mutation DeleteMessage(
  $input: DeleteMessageInput!
  $condition: ModelMessageConditionInput
) {
  deleteMessage(input: $input, condition: $condition) {
    id
    roomID
    content
    playerID
    playerName
    createdAt
    type
    updatedAt
    owner
    __typename
  }
}
` as GeneratedMutation<
  APITypes.DeleteMessageMutationVariables,
  APITypes.DeleteMessageMutation
>;
export const createTempPlayer = /* GraphQL */ `mutation CreateTempPlayer(
  $input: CreateTempPlayerInput!
  $condition: ModelTempPlayerConditionInput
) {
  createTempPlayer(input: $input, condition: $condition) {
    id
    playerID
    playerName
    color
    type
    createdAt
    updatedAt
    __typename
  }
}
` as GeneratedMutation<
  APITypes.CreateTempPlayerMutationVariables,
  APITypes.CreateTempPlayerMutation
>;
export const updateTempPlayer = /* GraphQL */ `mutation UpdateTempPlayer(
  $input: UpdateTempPlayerInput!
  $condition: ModelTempPlayerConditionInput
) {
  updateTempPlayer(input: $input, condition: $condition) {
    id
    playerID
    playerName
    color
    type
    createdAt
    updatedAt
    __typename
  }
}
` as GeneratedMutation<
  APITypes.UpdateTempPlayerMutationVariables,
  APITypes.UpdateTempPlayerMutation
>;
export const deleteTempPlayer = /* GraphQL */ `mutation DeleteTempPlayer(
  $input: DeleteTempPlayerInput!
  $condition: ModelTempPlayerConditionInput
) {
  deleteTempPlayer(input: $input, condition: $condition) {
    id
    playerID
    playerName
    color
    type
    createdAt
    updatedAt
    __typename
  }
}
` as GeneratedMutation<
  APITypes.DeleteTempPlayerMutationVariables,
  APITypes.DeleteTempPlayerMutation
>;
