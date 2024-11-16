/* tslint:disable */
/* eslint-disable */
// this is an auto generated file. This will be overwritten

import * as APITypes from "../API";
type GeneratedSubscription<InputType, OutputType> = string & {
  __generatedSubscriptionInput: InputType;
  __generatedSubscriptionOutput: OutputType;
};

export const onCreateMessageByRoomID = /* GraphQL */ `subscription OnCreateMessageByRoomID($roomID: ID!) {
  onCreateMessageByRoomID(roomID: $roomID) {
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
` as GeneratedSubscription<
  APITypes.OnCreateMessageByRoomIDSubscriptionVariables,
  APITypes.OnCreateMessageByRoomIDSubscription
>;
export const onMessageReceived = /* GraphQL */ `subscription OnMessageReceived($roomID: ID!) {
  onMessageReceived(roomID: $roomID) {
    roomID
    message
    sender
    color
    timestamp
    __typename
  }
}
` as GeneratedSubscription<
  APITypes.OnMessageReceivedSubscriptionVariables,
  APITypes.OnMessageReceivedSubscription
>;
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
` as GeneratedSubscription<
  APITypes.OnDeleteRoomSubscriptionVariables,
  APITypes.OnDeleteRoomSubscription
>;
export const onCreateGameData = /* GraphQL */ `subscription OnCreateGameData(
  $filter: ModelSubscriptionGameDataFilterInput
  $owner: String
) {
  onCreateGameData(filter: $filter, owner: $owner) {
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
` as GeneratedSubscription<
  APITypes.OnCreateGameDataSubscriptionVariables,
  APITypes.OnCreateGameDataSubscription
>;
export const onUpdateGameData = /* GraphQL */ `subscription OnUpdateGameData(
  $filter: ModelSubscriptionGameDataFilterInput
  $owner: String
) {
  onUpdateGameData(filter: $filter, owner: $owner) {
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
` as GeneratedSubscription<
  APITypes.OnUpdateGameDataSubscriptionVariables,
  APITypes.OnUpdateGameDataSubscription
>;
export const onDeleteGameData = /* GraphQL */ `subscription OnDeleteGameData(
  $filter: ModelSubscriptionGameDataFilterInput
  $owner: String
) {
  onDeleteGameData(filter: $filter, owner: $owner) {
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
` as GeneratedSubscription<
  APITypes.OnDeleteGameDataSubscriptionVariables,
  APITypes.OnDeleteGameDataSubscription
>;
export const onCreateTempPlayer = /* GraphQL */ `subscription OnCreateTempPlayer(
  $filter: ModelSubscriptionTempPlayerFilterInput
) {
  onCreateTempPlayer(filter: $filter) {
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
` as GeneratedSubscription<
  APITypes.OnCreateTempPlayerSubscriptionVariables,
  APITypes.OnCreateTempPlayerSubscription
>;
export const onUpdateTempPlayer = /* GraphQL */ `subscription OnUpdateTempPlayer(
  $filter: ModelSubscriptionTempPlayerFilterInput
) {
  onUpdateTempPlayer(filter: $filter) {
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
` as GeneratedSubscription<
  APITypes.OnUpdateTempPlayerSubscriptionVariables,
  APITypes.OnUpdateTempPlayerSubscription
>;
export const onDeleteTempPlayer = /* GraphQL */ `subscription OnDeleteTempPlayer(
  $filter: ModelSubscriptionTempPlayerFilterInput
) {
  onDeleteTempPlayer(filter: $filter) {
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
` as GeneratedSubscription<
  APITypes.OnDeleteTempPlayerSubscriptionVariables,
  APITypes.OnDeleteTempPlayerSubscription
>;
export const onCreateMessage = /* GraphQL */ `subscription OnCreateMessage(
  $filter: ModelSubscriptionMessageFilterInput
  $owner: String
) {
  onCreateMessage(filter: $filter, owner: $owner) {
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
` as GeneratedSubscription<
  APITypes.OnCreateMessageSubscriptionVariables,
  APITypes.OnCreateMessageSubscription
>;
export const onUpdateMessage = /* GraphQL */ `subscription OnUpdateMessage(
  $filter: ModelSubscriptionMessageFilterInput
  $owner: String
) {
  onUpdateMessage(filter: $filter, owner: $owner) {
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
` as GeneratedSubscription<
  APITypes.OnUpdateMessageSubscriptionVariables,
  APITypes.OnUpdateMessageSubscription
>;
export const onDeleteMessage = /* GraphQL */ `subscription OnDeleteMessage(
  $filter: ModelSubscriptionMessageFilterInput
  $owner: String
) {
  onDeleteMessage(filter: $filter, owner: $owner) {
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
` as GeneratedSubscription<
  APITypes.OnDeleteMessageSubscriptionVariables,
  APITypes.OnDeleteMessageSubscription
>;
