/* tslint:disable */
/* eslint-disable */
// this is an auto generated file. This will be overwritten

import * as APITypes from "../API";
type GeneratedQuery<InputType, OutputType> = string & {
  __generatedQueryInput: InputType;
  __generatedQueryOutput: OutputType;
};

export const getKitty = /* GraphQL */ `query GetKitty($id: ID!) {
  getKitty(id: $id) {
    id
    name
    color
    type
    createdAt
    updatedAt
    __typename
  }
}
` as GeneratedQuery<APITypes.GetKittyQueryVariables, APITypes.GetKittyQuery>;
export const listKitties = /* GraphQL */ `query ListKitties(
  $filter: ModelKittyFilterInput
  $limit: Int
  $nextToken: String
) {
  listKitties(filter: $filter, limit: $limit, nextToken: $nextToken) {
    items {
      id
      name
      color
      type
      createdAt
      updatedAt
      __typename
    }
    nextToken
    __typename
  }
}
` as GeneratedQuery<
  APITypes.ListKittiesQueryVariables,
  APITypes.ListKittiesQuery
>;
export const getGameData = /* GraphQL */ `query GetGameData($id: ID!) {
  getGameData(id: $id) {
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
` as GeneratedQuery<
  APITypes.GetGameDataQueryVariables,
  APITypes.GetGameDataQuery
>;
export const listGameData = /* GraphQL */ `query ListGameData(
  $filter: ModelGameDataFilterInput
  $limit: Int
  $nextToken: String
) {
  listGameData(filter: $filter, limit: $limit, nextToken: $nextToken) {
    items {
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
    nextToken
    __typename
  }
}
` as GeneratedQuery<
  APITypes.ListGameDataQueryVariables,
  APITypes.ListGameDataQuery
>;
export const gameDataByRoomID = /* GraphQL */ `query GameDataByRoomID(
  $roomID: ID!
  $sortDirection: ModelSortDirection
  $filter: ModelGameDataFilterInput
  $limit: Int
  $nextToken: String
) {
  gameDataByRoomID(
    roomID: $roomID
    sortDirection: $sortDirection
    filter: $filter
    limit: $limit
    nextToken: $nextToken
  ) {
    items {
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
    nextToken
    __typename
  }
}
` as GeneratedQuery<
  APITypes.GameDataByRoomIDQueryVariables,
  APITypes.GameDataByRoomIDQuery
>;
export const getUser = /* GraphQL */ `query GetUser($id: ID!) {
  getUser(id: $id) {
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
` as GeneratedQuery<APITypes.GetUserQueryVariables, APITypes.GetUserQuery>;
export const listUsers = /* GraphQL */ `query ListUsers(
  $filter: ModelUserFilterInput
  $limit: Int
  $nextToken: String
) {
  listUsers(filter: $filter, limit: $limit, nextToken: $nextToken) {
    items {
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
    nextToken
    __typename
  }
}
` as GeneratedQuery<APITypes.ListUsersQueryVariables, APITypes.ListUsersQuery>;
export const usersByOwner = /* GraphQL */ `query UsersByOwner(
  $owner: String!
  $sortDirection: ModelSortDirection
  $filter: ModelUserFilterInput
  $limit: Int
  $nextToken: String
) {
  usersByOwner(
    owner: $owner
    sortDirection: $sortDirection
    filter: $filter
    limit: $limit
    nextToken: $nextToken
  ) {
    items {
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
    nextToken
    __typename
  }
}
` as GeneratedQuery<
  APITypes.UsersByOwnerQueryVariables,
  APITypes.UsersByOwnerQuery
>;
export const getRoom = /* GraphQL */ `query GetRoom($id: ID!) {
  getRoom(id: $id) {
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
` as GeneratedQuery<APITypes.GetRoomQueryVariables, APITypes.GetRoomQuery>;
export const listRooms = /* GraphQL */ `query ListRooms(
  $filter: ModelRoomFilterInput
  $limit: Int
  $nextToken: String
) {
  listRooms(filter: $filter, limit: $limit, nextToken: $nextToken) {
    items {
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
    nextToken
    __typename
  }
}
` as GeneratedQuery<APITypes.ListRoomsQueryVariables, APITypes.ListRoomsQuery>;
export const roomsByPublicAndCreatedAt = /* GraphQL */ `query RoomsByPublicAndCreatedAt(
  $public: String!
  $createdAt: ModelStringKeyConditionInput
  $sortDirection: ModelSortDirection
  $filter: ModelRoomFilterInput
  $limit: Int
  $nextToken: String
) {
  roomsByPublicAndCreatedAt(
    public: $public
    createdAt: $createdAt
    sortDirection: $sortDirection
    filter: $filter
    limit: $limit
    nextToken: $nextToken
  ) {
    items {
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
    nextToken
    __typename
  }
}
` as GeneratedQuery<
  APITypes.RoomsByPublicAndCreatedAtQueryVariables,
  APITypes.RoomsByPublicAndCreatedAtQuery
>;
export const roomsByMode = /* GraphQL */ `query RoomsByMode(
  $mode: String!
  $sortDirection: ModelSortDirection
  $filter: ModelRoomFilterInput
  $limit: Int
  $nextToken: String
) {
  roomsByMode(
    mode: $mode
    sortDirection: $sortDirection
    filter: $filter
    limit: $limit
    nextToken: $nextToken
  ) {
    items {
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
    nextToken
    __typename
  }
}
` as GeneratedQuery<
  APITypes.RoomsByModeQueryVariables,
  APITypes.RoomsByModeQuery
>;
export const roomsByStatus = /* GraphQL */ `query RoomsByStatus(
  $status: RoomStatus!
  $sortDirection: ModelSortDirection
  $filter: ModelRoomFilterInput
  $limit: Int
  $nextToken: String
) {
  roomsByStatus(
    status: $status
    sortDirection: $sortDirection
    filter: $filter
    limit: $limit
    nextToken: $nextToken
  ) {
    items {
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
    nextToken
    __typename
  }
}
` as GeneratedQuery<
  APITypes.RoomsByStatusQueryVariables,
  APITypes.RoomsByStatusQuery
>;
export const roomsBySimpleCode = /* GraphQL */ `query RoomsBySimpleCode(
  $simpleCode: String!
  $sortDirection: ModelSortDirection
  $filter: ModelRoomFilterInput
  $limit: Int
  $nextToken: String
) {
  roomsBySimpleCode(
    simpleCode: $simpleCode
    sortDirection: $sortDirection
    filter: $filter
    limit: $limit
    nextToken: $nextToken
  ) {
    items {
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
    nextToken
    __typename
  }
}
` as GeneratedQuery<
  APITypes.RoomsBySimpleCodeQueryVariables,
  APITypes.RoomsBySimpleCodeQuery
>;
export const roomsByHostID = /* GraphQL */ `query RoomsByHostID(
  $hostID: ID!
  $sortDirection: ModelSortDirection
  $filter: ModelRoomFilterInput
  $limit: Int
  $nextToken: String
) {
  roomsByHostID(
    hostID: $hostID
    sortDirection: $sortDirection
    filter: $filter
    limit: $limit
    nextToken: $nextToken
  ) {
    items {
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
    nextToken
    __typename
  }
}
` as GeneratedQuery<
  APITypes.RoomsByHostIDQueryVariables,
  APITypes.RoomsByHostIDQuery
>;
export const getTempPlayer = /* GraphQL */ `query GetTempPlayer($id: ID!) {
  getTempPlayer(id: $id) {
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
` as GeneratedQuery<
  APITypes.GetTempPlayerQueryVariables,
  APITypes.GetTempPlayerQuery
>;
export const listTempPlayers = /* GraphQL */ `query ListTempPlayers(
  $filter: ModelTempPlayerFilterInput
  $limit: Int
  $nextToken: String
) {
  listTempPlayers(filter: $filter, limit: $limit, nextToken: $nextToken) {
    items {
      id
      playerID
      playerName
      color
      type
      createdAt
      updatedAt
      __typename
    }
    nextToken
    __typename
  }
}
` as GeneratedQuery<
  APITypes.ListTempPlayersQueryVariables,
  APITypes.ListTempPlayersQuery
>;
export const getPlayerPosition = /* GraphQL */ `query GetPlayerPosition($id: ID!) {
  getPlayerPosition(id: $id) {
    id
    roomID
    playerID
    x
    y
    timestamp
    createdAt
    updatedAt
    owner
    __typename
  }
}
` as GeneratedQuery<
  APITypes.GetPlayerPositionQueryVariables,
  APITypes.GetPlayerPositionQuery
>;
export const listPlayerPositions = /* GraphQL */ `query ListPlayerPositions(
  $filter: ModelPlayerPositionFilterInput
  $limit: Int
  $nextToken: String
) {
  listPlayerPositions(filter: $filter, limit: $limit, nextToken: $nextToken) {
    items {
      id
      roomID
      playerID
      x
      y
      timestamp
      createdAt
      updatedAt
      owner
      __typename
    }
    nextToken
    __typename
  }
}
` as GeneratedQuery<
  APITypes.ListPlayerPositionsQueryVariables,
  APITypes.ListPlayerPositionsQuery
>;
export const playerPositionsByRoomID = /* GraphQL */ `query PlayerPositionsByRoomID(
  $roomID: ID!
  $sortDirection: ModelSortDirection
  $filter: ModelPlayerPositionFilterInput
  $limit: Int
  $nextToken: String
) {
  playerPositionsByRoomID(
    roomID: $roomID
    sortDirection: $sortDirection
    filter: $filter
    limit: $limit
    nextToken: $nextToken
  ) {
    items {
      id
      roomID
      playerID
      x
      y
      timestamp
      createdAt
      updatedAt
      owner
      __typename
    }
    nextToken
    __typename
  }
}
` as GeneratedQuery<
  APITypes.PlayerPositionsByRoomIDQueryVariables,
  APITypes.PlayerPositionsByRoomIDQuery
>;
export const getMessage = /* GraphQL */ `query GetMessage($id: ID!) {
  getMessage(id: $id) {
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
` as GeneratedQuery<
  APITypes.GetMessageQueryVariables,
  APITypes.GetMessageQuery
>;
export const listMessages = /* GraphQL */ `query ListMessages(
  $filter: ModelMessageFilterInput
  $limit: Int
  $nextToken: String
) {
  listMessages(filter: $filter, limit: $limit, nextToken: $nextToken) {
    items {
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
    nextToken
    __typename
  }
}
` as GeneratedQuery<
  APITypes.ListMessagesQueryVariables,
  APITypes.ListMessagesQuery
>;
export const messagesByRoomIDAndCreatedAt = /* GraphQL */ `query MessagesByRoomIDAndCreatedAt(
  $roomID: ID!
  $createdAt: ModelStringKeyConditionInput
  $sortDirection: ModelSortDirection
  $filter: ModelMessageFilterInput
  $limit: Int
  $nextToken: String
) {
  messagesByRoomIDAndCreatedAt(
    roomID: $roomID
    createdAt: $createdAt
    sortDirection: $sortDirection
    filter: $filter
    limit: $limit
    nextToken: $nextToken
  ) {
    items {
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
    nextToken
    __typename
  }
}
` as GeneratedQuery<
  APITypes.MessagesByRoomIDAndCreatedAtQueryVariables,
  APITypes.MessagesByRoomIDAndCreatedAtQuery
>;
