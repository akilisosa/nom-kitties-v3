/* tslint:disable */
/* eslint-disable */
//  This file was automatically generated and should not be edited.

export type Room = {
  __typename: "Room",
  id: string,
  public?: string | null,
  mode?: string | null,
  rounds?: number | null,
  timeLimit?: number | null,
  currentPlayers?: number | null,
  roomLimit?: number | null,
  inGame?: boolean | null,
  status: RoomStatus,
  full?: boolean | null,
  createdAt?: string | null,
  playing?: Array< string | null > | null,
  players?: Array< string | null > | null,
  tempPlayers?: Array< string | null > | null,
  simpleCode?: string | null,
  host?: User | null,
  hostID: string,
  currentRound?: number | null,
  updatedAt?: string | null,
  gameData?: GameData | null,
  roomGameDataId?: string | null,
  owner?: string | null,
};

export enum RoomStatus {
  WAITING = "WAITING",
  PLAYING = "PLAYING",
  FINISHED = "FINISHED",
  CANCELLED = "CANCELLED",
}


export type User = {
  __typename: "User",
  id: string,
  name: string,
  color?: string | null,
  type?: string | null,
  room?: Room | null,
  owner: string,
  createdAt: string,
  updatedAt: string,
  userRoomId?: string | null,
};

export type GameData = {
  __typename: "GameData",
  id: string,
  roomID: string,
  activePlayers: Array< string | null >,
  scores?: string | null,
  currentRound?: number | null,
  roundData?: string | null,
  lastUpdated?: string | null,
  gameStarted?: string | null,
  room?: Room | null,
  createdAt: string,
  updatedAt: string,
  owner?: string | null,
};

export type GameStateInput = {
  currentRound?: number | null,
  status?: RoomStatus | null,
  gameData?: string | null,
};

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
  userRoomId?: string | null,
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
  userRoomId?: ModelIDInput | null,
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

export type UpdateUserInput = {
  id: string,
  name?: string | null,
  color?: string | null,
  type?: string | null,
  owner?: string | null,
  userRoomId?: string | null,
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
  currentPlayers?: number | null,
  roomLimit?: number | null,
  inGame?: boolean | null,
  status: RoomStatus,
  full?: boolean | null,
  createdAt?: string | null,
  playing?: Array< string | null > | null,
  players?: Array< string | null > | null,
  tempPlayers?: Array< string | null > | null,
  simpleCode?: string | null,
  hostID: string,
  currentRound?: number | null,
  updatedAt?: string | null,
  roomGameDataId?: string | null,
};

export type ModelRoomConditionInput = {
  public?: ModelStringInput | null,
  mode?: ModelStringInput | null,
  rounds?: ModelIntInput | null,
  timeLimit?: ModelIntInput | null,
  currentPlayers?: ModelIntInput | null,
  roomLimit?: ModelIntInput | null,
  inGame?: ModelBooleanInput | null,
  status?: ModelRoomStatusInput | null,
  full?: ModelBooleanInput | null,
  createdAt?: ModelStringInput | null,
  playing?: ModelStringInput | null,
  players?: ModelStringInput | null,
  tempPlayers?: ModelStringInput | null,
  simpleCode?: ModelStringInput | null,
  hostID?: ModelIDInput | null,
  currentRound?: ModelIntInput | null,
  updatedAt?: ModelStringInput | null,
  and?: Array< ModelRoomConditionInput | null > | null,
  or?: Array< ModelRoomConditionInput | null > | null,
  not?: ModelRoomConditionInput | null,
  roomGameDataId?: ModelIDInput | null,
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

export type ModelBooleanInput = {
  ne?: boolean | null,
  eq?: boolean | null,
  attributeExists?: boolean | null,
  attributeType?: ModelAttributeTypes | null,
};

export type ModelRoomStatusInput = {
  eq?: RoomStatus | null,
  ne?: RoomStatus | null,
};

export type UpdateRoomInput = {
  id: string,
  public?: string | null,
  mode?: string | null,
  rounds?: number | null,
  timeLimit?: number | null,
  currentPlayers?: number | null,
  roomLimit?: number | null,
  inGame?: boolean | null,
  status?: RoomStatus | null,
  full?: boolean | null,
  createdAt?: string | null,
  playing?: Array< string | null > | null,
  players?: Array< string | null > | null,
  tempPlayers?: Array< string | null > | null,
  simpleCode?: string | null,
  hostID?: string | null,
  currentRound?: number | null,
  updatedAt?: string | null,
  roomGameDataId?: string | null,
};

export type DeleteRoomInput = {
  id: string,
};

export type CreateGameDataInput = {
  id?: string | null,
  roomID: string,
  activePlayers: Array< string | null >,
  scores?: string | null,
  currentRound?: number | null,
  roundData?: string | null,
  lastUpdated?: string | null,
  gameStarted?: string | null,
};

export type ModelGameDataConditionInput = {
  roomID?: ModelIDInput | null,
  activePlayers?: ModelStringInput | null,
  scores?: ModelStringInput | null,
  currentRound?: ModelIntInput | null,
  roundData?: ModelStringInput | null,
  lastUpdated?: ModelStringInput | null,
  gameStarted?: ModelStringInput | null,
  and?: Array< ModelGameDataConditionInput | null > | null,
  or?: Array< ModelGameDataConditionInput | null > | null,
  not?: ModelGameDataConditionInput | null,
  createdAt?: ModelStringInput | null,
  updatedAt?: ModelStringInput | null,
  owner?: ModelStringInput | null,
};

export type UpdateGameDataInput = {
  id: string,
  roomID?: string | null,
  activePlayers?: Array< string | null > | null,
  scores?: string | null,
  currentRound?: number | null,
  roundData?: string | null,
  lastUpdated?: string | null,
  gameStarted?: string | null,
};

export type DeleteGameDataInput = {
  id: string,
};

export type CreateMessageInput = {
  id?: string | null,
  roomID: string,
  content: string,
  playerID: string,
  playerName?: string | null,
  createdAt?: string | null,
  type?: MessageType | null,
};

export enum MessageType {
  CHAT = "CHAT",
  SYSTEM = "SYSTEM",
  GAME_EVENT = "GAME_EVENT",
}


export type ModelMessageConditionInput = {
  roomID?: ModelIDInput | null,
  content?: ModelStringInput | null,
  playerID?: ModelStringInput | null,
  playerName?: ModelStringInput | null,
  createdAt?: ModelStringInput | null,
  type?: ModelMessageTypeInput | null,
  and?: Array< ModelMessageConditionInput | null > | null,
  or?: Array< ModelMessageConditionInput | null > | null,
  not?: ModelMessageConditionInput | null,
  updatedAt?: ModelStringInput | null,
  owner?: ModelStringInput | null,
};

export type ModelMessageTypeInput = {
  eq?: MessageType | null,
  ne?: MessageType | null,
};

export type Message = {
  __typename: "Message",
  id: string,
  roomID: string,
  content: string,
  playerID: string,
  playerName?: string | null,
  createdAt: string,
  type?: MessageType | null,
  updatedAt: string,
  owner?: string | null,
};

export type UpdateMessageInput = {
  id: string,
  roomID?: string | null,
  content?: string | null,
  playerID?: string | null,
  playerName?: string | null,
  createdAt?: string | null,
  type?: MessageType | null,
};

export type DeleteMessageInput = {
  id: string,
};

export type CreateTempPlayerInput = {
  id?: string | null,
  playerID: string,
  playerName?: string | null,
  color?: string | null,
  type?: string | null,
};

export type ModelTempPlayerConditionInput = {
  playerID?: ModelStringInput | null,
  playerName?: ModelStringInput | null,
  color?: ModelStringInput | null,
  type?: ModelStringInput | null,
  and?: Array< ModelTempPlayerConditionInput | null > | null,
  or?: Array< ModelTempPlayerConditionInput | null > | null,
  not?: ModelTempPlayerConditionInput | null,
  createdAt?: ModelStringInput | null,
  updatedAt?: ModelStringInput | null,
};

export type TempPlayer = {
  __typename: "TempPlayer",
  id: string,
  playerID: string,
  playerName?: string | null,
  color?: string | null,
  type?: string | null,
  createdAt: string,
  updatedAt: string,
};

export type UpdateTempPlayerInput = {
  id: string,
  playerID?: string | null,
  playerName?: string | null,
  color?: string | null,
  type?: string | null,
};

export type DeleteTempPlayerInput = {
  id: string,
};

export type CreatePlayerPositionInput = {
  id?: string | null,
  roomID: string,
  playerID: string,
  x: number,
  y: number,
  timestamp: number,
};

export type ModelPlayerPositionConditionInput = {
  roomID?: ModelIDInput | null,
  playerID?: ModelStringInput | null,
  x?: ModelFloatInput | null,
  y?: ModelFloatInput | null,
  timestamp?: ModelIntInput | null,
  and?: Array< ModelPlayerPositionConditionInput | null > | null,
  or?: Array< ModelPlayerPositionConditionInput | null > | null,
  not?: ModelPlayerPositionConditionInput | null,
  createdAt?: ModelStringInput | null,
  updatedAt?: ModelStringInput | null,
  owner?: ModelStringInput | null,
};

export type ModelFloatInput = {
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

export type PlayerPosition = {
  __typename: "PlayerPosition",
  id: string,
  roomID: string,
  playerID: string,
  x: number,
  y: number,
  timestamp: number,
  createdAt: string,
  updatedAt: string,
  owner?: string | null,
};

export type UpdatePlayerPositionInput = {
  id: string,
  roomID?: string | null,
  playerID?: string | null,
  x?: number | null,
  y?: number | null,
  timestamp?: number | null,
};

export type DeletePlayerPositionInput = {
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

export type ModelKittyConnection = {
  __typename: "ModelKittyConnection",
  items:  Array<Kitty | null >,
  nextToken?: string | null,
};

export type ModelGameDataFilterInput = {
  id?: ModelIDInput | null,
  roomID?: ModelIDInput | null,
  activePlayers?: ModelStringInput | null,
  scores?: ModelStringInput | null,
  currentRound?: ModelIntInput | null,
  roundData?: ModelStringInput | null,
  lastUpdated?: ModelStringInput | null,
  gameStarted?: ModelStringInput | null,
  createdAt?: ModelStringInput | null,
  updatedAt?: ModelStringInput | null,
  and?: Array< ModelGameDataFilterInput | null > | null,
  or?: Array< ModelGameDataFilterInput | null > | null,
  not?: ModelGameDataFilterInput | null,
  owner?: ModelStringInput | null,
};

export type ModelGameDataConnection = {
  __typename: "ModelGameDataConnection",
  items:  Array<GameData | null >,
  nextToken?: string | null,
};

export enum ModelSortDirection {
  ASC = "ASC",
  DESC = "DESC",
}


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
  userRoomId?: ModelIDInput | null,
};

export type ModelUserConnection = {
  __typename: "ModelUserConnection",
  items:  Array<User | null >,
  nextToken?: string | null,
};

export type ModelRoomFilterInput = {
  id?: ModelIDInput | null,
  public?: ModelStringInput | null,
  mode?: ModelStringInput | null,
  rounds?: ModelIntInput | null,
  timeLimit?: ModelIntInput | null,
  currentPlayers?: ModelIntInput | null,
  roomLimit?: ModelIntInput | null,
  inGame?: ModelBooleanInput | null,
  status?: ModelRoomStatusInput | null,
  full?: ModelBooleanInput | null,
  createdAt?: ModelStringInput | null,
  playing?: ModelStringInput | null,
  players?: ModelStringInput | null,
  tempPlayers?: ModelStringInput | null,
  simpleCode?: ModelStringInput | null,
  hostID?: ModelIDInput | null,
  currentRound?: ModelIntInput | null,
  updatedAt?: ModelStringInput | null,
  and?: Array< ModelRoomFilterInput | null > | null,
  or?: Array< ModelRoomFilterInput | null > | null,
  not?: ModelRoomFilterInput | null,
  roomGameDataId?: ModelIDInput | null,
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

export type ModelTempPlayerFilterInput = {
  id?: ModelIDInput | null,
  playerID?: ModelStringInput | null,
  playerName?: ModelStringInput | null,
  color?: ModelStringInput | null,
  type?: ModelStringInput | null,
  createdAt?: ModelStringInput | null,
  updatedAt?: ModelStringInput | null,
  and?: Array< ModelTempPlayerFilterInput | null > | null,
  or?: Array< ModelTempPlayerFilterInput | null > | null,
  not?: ModelTempPlayerFilterInput | null,
};

export type ModelTempPlayerConnection = {
  __typename: "ModelTempPlayerConnection",
  items:  Array<TempPlayer | null >,
  nextToken?: string | null,
};

export type ModelPlayerPositionFilterInput = {
  id?: ModelIDInput | null,
  roomID?: ModelIDInput | null,
  playerID?: ModelStringInput | null,
  x?: ModelFloatInput | null,
  y?: ModelFloatInput | null,
  timestamp?: ModelIntInput | null,
  createdAt?: ModelStringInput | null,
  updatedAt?: ModelStringInput | null,
  and?: Array< ModelPlayerPositionFilterInput | null > | null,
  or?: Array< ModelPlayerPositionFilterInput | null > | null,
  not?: ModelPlayerPositionFilterInput | null,
  owner?: ModelStringInput | null,
};

export type ModelPlayerPositionConnection = {
  __typename: "ModelPlayerPositionConnection",
  items:  Array<PlayerPosition | null >,
  nextToken?: string | null,
};

export type ModelMessageFilterInput = {
  id?: ModelIDInput | null,
  roomID?: ModelIDInput | null,
  content?: ModelStringInput | null,
  playerID?: ModelStringInput | null,
  playerName?: ModelStringInput | null,
  createdAt?: ModelStringInput | null,
  type?: ModelMessageTypeInput | null,
  updatedAt?: ModelStringInput | null,
  and?: Array< ModelMessageFilterInput | null > | null,
  or?: Array< ModelMessageFilterInput | null > | null,
  not?: ModelMessageFilterInput | null,
  owner?: ModelStringInput | null,
};

export type ModelMessageConnection = {
  __typename: "ModelMessageConnection",
  items:  Array<Message | null >,
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

export type ModelSubscriptionGameDataFilterInput = {
  id?: ModelSubscriptionIDInput | null,
  roomID?: ModelSubscriptionIDInput | null,
  activePlayers?: ModelSubscriptionStringInput | null,
  scores?: ModelSubscriptionStringInput | null,
  currentRound?: ModelSubscriptionIntInput | null,
  roundData?: ModelSubscriptionStringInput | null,
  lastUpdated?: ModelSubscriptionStringInput | null,
  gameStarted?: ModelSubscriptionStringInput | null,
  createdAt?: ModelSubscriptionStringInput | null,
  updatedAt?: ModelSubscriptionStringInput | null,
  and?: Array< ModelSubscriptionGameDataFilterInput | null > | null,
  or?: Array< ModelSubscriptionGameDataFilterInput | null > | null,
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

export type ModelSubscriptionUserFilterInput = {
  id?: ModelSubscriptionIDInput | null,
  name?: ModelSubscriptionStringInput | null,
  color?: ModelSubscriptionStringInput | null,
  type?: ModelSubscriptionStringInput | null,
  createdAt?: ModelSubscriptionStringInput | null,
  updatedAt?: ModelSubscriptionStringInput | null,
  and?: Array< ModelSubscriptionUserFilterInput | null > | null,
  or?: Array< ModelSubscriptionUserFilterInput | null > | null,
  userRoomId?: ModelSubscriptionIDInput | null,
  owner?: ModelStringInput | null,
};

export type ModelSubscriptionRoomFilterInput = {
  id?: ModelSubscriptionIDInput | null,
  public?: ModelSubscriptionStringInput | null,
  mode?: ModelSubscriptionStringInput | null,
  rounds?: ModelSubscriptionIntInput | null,
  timeLimit?: ModelSubscriptionIntInput | null,
  currentPlayers?: ModelSubscriptionIntInput | null,
  roomLimit?: ModelSubscriptionIntInput | null,
  inGame?: ModelSubscriptionBooleanInput | null,
  status?: ModelSubscriptionStringInput | null,
  full?: ModelSubscriptionBooleanInput | null,
  createdAt?: ModelSubscriptionStringInput | null,
  playing?: ModelSubscriptionStringInput | null,
  players?: ModelSubscriptionStringInput | null,
  tempPlayers?: ModelSubscriptionStringInput | null,
  simpleCode?: ModelSubscriptionStringInput | null,
  hostID?: ModelSubscriptionIDInput | null,
  currentRound?: ModelSubscriptionIntInput | null,
  updatedAt?: ModelSubscriptionStringInput | null,
  and?: Array< ModelSubscriptionRoomFilterInput | null > | null,
  or?: Array< ModelSubscriptionRoomFilterInput | null > | null,
  roomGameDataId?: ModelSubscriptionIDInput | null,
  owner?: ModelStringInput | null,
};

export type ModelSubscriptionBooleanInput = {
  ne?: boolean | null,
  eq?: boolean | null,
};

export type ModelSubscriptionTempPlayerFilterInput = {
  id?: ModelSubscriptionIDInput | null,
  playerID?: ModelSubscriptionStringInput | null,
  playerName?: ModelSubscriptionStringInput | null,
  color?: ModelSubscriptionStringInput | null,
  type?: ModelSubscriptionStringInput | null,
  createdAt?: ModelSubscriptionStringInput | null,
  updatedAt?: ModelSubscriptionStringInput | null,
  and?: Array< ModelSubscriptionTempPlayerFilterInput | null > | null,
  or?: Array< ModelSubscriptionTempPlayerFilterInput | null > | null,
};

export type ModelSubscriptionPlayerPositionFilterInput = {
  id?: ModelSubscriptionIDInput | null,
  roomID?: ModelSubscriptionIDInput | null,
  playerID?: ModelSubscriptionStringInput | null,
  x?: ModelSubscriptionFloatInput | null,
  y?: ModelSubscriptionFloatInput | null,
  timestamp?: ModelSubscriptionIntInput | null,
  createdAt?: ModelSubscriptionStringInput | null,
  updatedAt?: ModelSubscriptionStringInput | null,
  and?: Array< ModelSubscriptionPlayerPositionFilterInput | null > | null,
  or?: Array< ModelSubscriptionPlayerPositionFilterInput | null > | null,
  owner?: ModelStringInput | null,
};

export type ModelSubscriptionFloatInput = {
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

export type ModelSubscriptionMessageFilterInput = {
  id?: ModelSubscriptionIDInput | null,
  roomID?: ModelSubscriptionIDInput | null,
  content?: ModelSubscriptionStringInput | null,
  playerID?: ModelSubscriptionStringInput | null,
  playerName?: ModelSubscriptionStringInput | null,
  createdAt?: ModelSubscriptionStringInput | null,
  type?: ModelSubscriptionStringInput | null,
  updatedAt?: ModelSubscriptionStringInput | null,
  and?: Array< ModelSubscriptionMessageFilterInput | null > | null,
  or?: Array< ModelSubscriptionMessageFilterInput | null > | null,
  owner?: ModelStringInput | null,
};

export type JoinRoomMutationVariables = {
  roomId: string,
};

export type JoinRoomMutation = {
  joinRoom?:  {
    __typename: "Room",
    id: string,
    public?: string | null,
    mode?: string | null,
    rounds?: number | null,
    timeLimit?: number | null,
    currentPlayers?: number | null,
    roomLimit?: number | null,
    inGame?: boolean | null,
    status: RoomStatus,
    full?: boolean | null,
    createdAt?: string | null,
    playing?: Array< string | null > | null,
    players?: Array< string | null > | null,
    tempPlayers?: Array< string | null > | null,
    simpleCode?: string | null,
    host?:  {
      __typename: "User",
      id: string,
      name: string,
      color?: string | null,
      type?: string | null,
      owner: string,
      createdAt: string,
      updatedAt: string,
      userRoomId?: string | null,
    } | null,
    hostID: string,
    currentRound?: number | null,
    updatedAt?: string | null,
    gameData?:  {
      __typename: "GameData",
      id: string,
      roomID: string,
      activePlayers: Array< string | null >,
      scores?: string | null,
      currentRound?: number | null,
      roundData?: string | null,
      lastUpdated?: string | null,
      gameStarted?: string | null,
      createdAt: string,
      updatedAt: string,
      owner?: string | null,
    } | null,
    roomGameDataId?: string | null,
    owner?: string | null,
  } | null,
};

export type LeaveRoomMutationVariables = {
  roomId: string,
};

export type LeaveRoomMutation = {
  leaveRoom?:  {
    __typename: "Room",
    id: string,
    public?: string | null,
    mode?: string | null,
    rounds?: number | null,
    timeLimit?: number | null,
    currentPlayers?: number | null,
    roomLimit?: number | null,
    inGame?: boolean | null,
    status: RoomStatus,
    full?: boolean | null,
    createdAt?: string | null,
    playing?: Array< string | null > | null,
    players?: Array< string | null > | null,
    tempPlayers?: Array< string | null > | null,
    simpleCode?: string | null,
    host?:  {
      __typename: "User",
      id: string,
      name: string,
      color?: string | null,
      type?: string | null,
      owner: string,
      createdAt: string,
      updatedAt: string,
      userRoomId?: string | null,
    } | null,
    hostID: string,
    currentRound?: number | null,
    updatedAt?: string | null,
    gameData?:  {
      __typename: "GameData",
      id: string,
      roomID: string,
      activePlayers: Array< string | null >,
      scores?: string | null,
      currentRound?: number | null,
      roundData?: string | null,
      lastUpdated?: string | null,
      gameStarted?: string | null,
      createdAt: string,
      updatedAt: string,
      owner?: string | null,
    } | null,
    roomGameDataId?: string | null,
    owner?: string | null,
  } | null,
};

export type UpdateGameStateMutationVariables = {
  roomId: string,
  gameData: GameStateInput,
};

export type UpdateGameStateMutation = {
  updateGameState?:  {
    __typename: "Room",
    id: string,
    public?: string | null,
    mode?: string | null,
    rounds?: number | null,
    timeLimit?: number | null,
    currentPlayers?: number | null,
    roomLimit?: number | null,
    inGame?: boolean | null,
    status: RoomStatus,
    full?: boolean | null,
    createdAt?: string | null,
    playing?: Array< string | null > | null,
    players?: Array< string | null > | null,
    tempPlayers?: Array< string | null > | null,
    simpleCode?: string | null,
    host?:  {
      __typename: "User",
      id: string,
      name: string,
      color?: string | null,
      type?: string | null,
      owner: string,
      createdAt: string,
      updatedAt: string,
      userRoomId?: string | null,
    } | null,
    hostID: string,
    currentRound?: number | null,
    updatedAt?: string | null,
    gameData?:  {
      __typename: "GameData",
      id: string,
      roomID: string,
      activePlayers: Array< string | null >,
      scores?: string | null,
      currentRound?: number | null,
      roundData?: string | null,
      lastUpdated?: string | null,
      gameStarted?: string | null,
      createdAt: string,
      updatedAt: string,
      owner?: string | null,
    } | null,
    roomGameDataId?: string | null,
    owner?: string | null,
  } | null,
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
    room?:  {
      __typename: "Room",
      id: string,
      public?: string | null,
      mode?: string | null,
      rounds?: number | null,
      timeLimit?: number | null,
      currentPlayers?: number | null,
      roomLimit?: number | null,
      inGame?: boolean | null,
      status: RoomStatus,
      full?: boolean | null,
      createdAt?: string | null,
      playing?: Array< string | null > | null,
      players?: Array< string | null > | null,
      tempPlayers?: Array< string | null > | null,
      simpleCode?: string | null,
      hostID: string,
      currentRound?: number | null,
      updatedAt?: string | null,
      roomGameDataId?: string | null,
      owner?: string | null,
    } | null,
    owner: string,
    createdAt: string,
    updatedAt: string,
    userRoomId?: string | null,
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
    room?:  {
      __typename: "Room",
      id: string,
      public?: string | null,
      mode?: string | null,
      rounds?: number | null,
      timeLimit?: number | null,
      currentPlayers?: number | null,
      roomLimit?: number | null,
      inGame?: boolean | null,
      status: RoomStatus,
      full?: boolean | null,
      createdAt?: string | null,
      playing?: Array< string | null > | null,
      players?: Array< string | null > | null,
      tempPlayers?: Array< string | null > | null,
      simpleCode?: string | null,
      hostID: string,
      currentRound?: number | null,
      updatedAt?: string | null,
      roomGameDataId?: string | null,
      owner?: string | null,
    } | null,
    owner: string,
    createdAt: string,
    updatedAt: string,
    userRoomId?: string | null,
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
    room?:  {
      __typename: "Room",
      id: string,
      public?: string | null,
      mode?: string | null,
      rounds?: number | null,
      timeLimit?: number | null,
      currentPlayers?: number | null,
      roomLimit?: number | null,
      inGame?: boolean | null,
      status: RoomStatus,
      full?: boolean | null,
      createdAt?: string | null,
      playing?: Array< string | null > | null,
      players?: Array< string | null > | null,
      tempPlayers?: Array< string | null > | null,
      simpleCode?: string | null,
      hostID: string,
      currentRound?: number | null,
      updatedAt?: string | null,
      roomGameDataId?: string | null,
      owner?: string | null,
    } | null,
    owner: string,
    createdAt: string,
    updatedAt: string,
    userRoomId?: string | null,
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
    currentPlayers?: number | null,
    roomLimit?: number | null,
    inGame?: boolean | null,
    status: RoomStatus,
    full?: boolean | null,
    createdAt?: string | null,
    playing?: Array< string | null > | null,
    players?: Array< string | null > | null,
    tempPlayers?: Array< string | null > | null,
    simpleCode?: string | null,
    host?:  {
      __typename: "User",
      id: string,
      name: string,
      color?: string | null,
      type?: string | null,
      owner: string,
      createdAt: string,
      updatedAt: string,
      userRoomId?: string | null,
    } | null,
    hostID: string,
    currentRound?: number | null,
    updatedAt?: string | null,
    gameData?:  {
      __typename: "GameData",
      id: string,
      roomID: string,
      activePlayers: Array< string | null >,
      scores?: string | null,
      currentRound?: number | null,
      roundData?: string | null,
      lastUpdated?: string | null,
      gameStarted?: string | null,
      createdAt: string,
      updatedAt: string,
      owner?: string | null,
    } | null,
    roomGameDataId?: string | null,
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
    currentPlayers?: number | null,
    roomLimit?: number | null,
    inGame?: boolean | null,
    status: RoomStatus,
    full?: boolean | null,
    createdAt?: string | null,
    playing?: Array< string | null > | null,
    players?: Array< string | null > | null,
    tempPlayers?: Array< string | null > | null,
    simpleCode?: string | null,
    host?:  {
      __typename: "User",
      id: string,
      name: string,
      color?: string | null,
      type?: string | null,
      owner: string,
      createdAt: string,
      updatedAt: string,
      userRoomId?: string | null,
    } | null,
    hostID: string,
    currentRound?: number | null,
    updatedAt?: string | null,
    gameData?:  {
      __typename: "GameData",
      id: string,
      roomID: string,
      activePlayers: Array< string | null >,
      scores?: string | null,
      currentRound?: number | null,
      roundData?: string | null,
      lastUpdated?: string | null,
      gameStarted?: string | null,
      createdAt: string,
      updatedAt: string,
      owner?: string | null,
    } | null,
    roomGameDataId?: string | null,
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
    currentPlayers?: number | null,
    roomLimit?: number | null,
    inGame?: boolean | null,
    status: RoomStatus,
    full?: boolean | null,
    createdAt?: string | null,
    playing?: Array< string | null > | null,
    players?: Array< string | null > | null,
    tempPlayers?: Array< string | null > | null,
    simpleCode?: string | null,
    host?:  {
      __typename: "User",
      id: string,
      name: string,
      color?: string | null,
      type?: string | null,
      owner: string,
      createdAt: string,
      updatedAt: string,
      userRoomId?: string | null,
    } | null,
    hostID: string,
    currentRound?: number | null,
    updatedAt?: string | null,
    gameData?:  {
      __typename: "GameData",
      id: string,
      roomID: string,
      activePlayers: Array< string | null >,
      scores?: string | null,
      currentRound?: number | null,
      roundData?: string | null,
      lastUpdated?: string | null,
      gameStarted?: string | null,
      createdAt: string,
      updatedAt: string,
      owner?: string | null,
    } | null,
    roomGameDataId?: string | null,
    owner?: string | null,
  } | null,
};

export type CreateGameDataMutationVariables = {
  input: CreateGameDataInput,
  condition?: ModelGameDataConditionInput | null,
};

export type CreateGameDataMutation = {
  createGameData?:  {
    __typename: "GameData",
    id: string,
    roomID: string,
    activePlayers: Array< string | null >,
    scores?: string | null,
    currentRound?: number | null,
    roundData?: string | null,
    lastUpdated?: string | null,
    gameStarted?: string | null,
    room?:  {
      __typename: "Room",
      id: string,
      public?: string | null,
      mode?: string | null,
      rounds?: number | null,
      timeLimit?: number | null,
      currentPlayers?: number | null,
      roomLimit?: number | null,
      inGame?: boolean | null,
      status: RoomStatus,
      full?: boolean | null,
      createdAt?: string | null,
      playing?: Array< string | null > | null,
      players?: Array< string | null > | null,
      tempPlayers?: Array< string | null > | null,
      simpleCode?: string | null,
      hostID: string,
      currentRound?: number | null,
      updatedAt?: string | null,
      roomGameDataId?: string | null,
      owner?: string | null,
    } | null,
    createdAt: string,
    updatedAt: string,
    owner?: string | null,
  } | null,
};

export type UpdateGameDataMutationVariables = {
  input: UpdateGameDataInput,
  condition?: ModelGameDataConditionInput | null,
};

export type UpdateGameDataMutation = {
  updateGameData?:  {
    __typename: "GameData",
    id: string,
    roomID: string,
    activePlayers: Array< string | null >,
    scores?: string | null,
    currentRound?: number | null,
    roundData?: string | null,
    lastUpdated?: string | null,
    gameStarted?: string | null,
    room?:  {
      __typename: "Room",
      id: string,
      public?: string | null,
      mode?: string | null,
      rounds?: number | null,
      timeLimit?: number | null,
      currentPlayers?: number | null,
      roomLimit?: number | null,
      inGame?: boolean | null,
      status: RoomStatus,
      full?: boolean | null,
      createdAt?: string | null,
      playing?: Array< string | null > | null,
      players?: Array< string | null > | null,
      tempPlayers?: Array< string | null > | null,
      simpleCode?: string | null,
      hostID: string,
      currentRound?: number | null,
      updatedAt?: string | null,
      roomGameDataId?: string | null,
      owner?: string | null,
    } | null,
    createdAt: string,
    updatedAt: string,
    owner?: string | null,
  } | null,
};

export type DeleteGameDataMutationVariables = {
  input: DeleteGameDataInput,
  condition?: ModelGameDataConditionInput | null,
};

export type DeleteGameDataMutation = {
  deleteGameData?:  {
    __typename: "GameData",
    id: string,
    roomID: string,
    activePlayers: Array< string | null >,
    scores?: string | null,
    currentRound?: number | null,
    roundData?: string | null,
    lastUpdated?: string | null,
    gameStarted?: string | null,
    room?:  {
      __typename: "Room",
      id: string,
      public?: string | null,
      mode?: string | null,
      rounds?: number | null,
      timeLimit?: number | null,
      currentPlayers?: number | null,
      roomLimit?: number | null,
      inGame?: boolean | null,
      status: RoomStatus,
      full?: boolean | null,
      createdAt?: string | null,
      playing?: Array< string | null > | null,
      players?: Array< string | null > | null,
      tempPlayers?: Array< string | null > | null,
      simpleCode?: string | null,
      hostID: string,
      currentRound?: number | null,
      updatedAt?: string | null,
      roomGameDataId?: string | null,
      owner?: string | null,
    } | null,
    createdAt: string,
    updatedAt: string,
    owner?: string | null,
  } | null,
};

export type CreateMessageMutationVariables = {
  input: CreateMessageInput,
  condition?: ModelMessageConditionInput | null,
};

export type CreateMessageMutation = {
  createMessage?:  {
    __typename: "Message",
    id: string,
    roomID: string,
    content: string,
    playerID: string,
    playerName?: string | null,
    createdAt: string,
    type?: MessageType | null,
    updatedAt: string,
    owner?: string | null,
  } | null,
};

export type UpdateMessageMutationVariables = {
  input: UpdateMessageInput,
  condition?: ModelMessageConditionInput | null,
};

export type UpdateMessageMutation = {
  updateMessage?:  {
    __typename: "Message",
    id: string,
    roomID: string,
    content: string,
    playerID: string,
    playerName?: string | null,
    createdAt: string,
    type?: MessageType | null,
    updatedAt: string,
    owner?: string | null,
  } | null,
};

export type DeleteMessageMutationVariables = {
  input: DeleteMessageInput,
  condition?: ModelMessageConditionInput | null,
};

export type DeleteMessageMutation = {
  deleteMessage?:  {
    __typename: "Message",
    id: string,
    roomID: string,
    content: string,
    playerID: string,
    playerName?: string | null,
    createdAt: string,
    type?: MessageType | null,
    updatedAt: string,
    owner?: string | null,
  } | null,
};

export type CreateTempPlayerMutationVariables = {
  input: CreateTempPlayerInput,
  condition?: ModelTempPlayerConditionInput | null,
};

export type CreateTempPlayerMutation = {
  createTempPlayer?:  {
    __typename: "TempPlayer",
    id: string,
    playerID: string,
    playerName?: string | null,
    color?: string | null,
    type?: string | null,
    createdAt: string,
    updatedAt: string,
  } | null,
};

export type UpdateTempPlayerMutationVariables = {
  input: UpdateTempPlayerInput,
  condition?: ModelTempPlayerConditionInput | null,
};

export type UpdateTempPlayerMutation = {
  updateTempPlayer?:  {
    __typename: "TempPlayer",
    id: string,
    playerID: string,
    playerName?: string | null,
    color?: string | null,
    type?: string | null,
    createdAt: string,
    updatedAt: string,
  } | null,
};

export type DeleteTempPlayerMutationVariables = {
  input: DeleteTempPlayerInput,
  condition?: ModelTempPlayerConditionInput | null,
};

export type DeleteTempPlayerMutation = {
  deleteTempPlayer?:  {
    __typename: "TempPlayer",
    id: string,
    playerID: string,
    playerName?: string | null,
    color?: string | null,
    type?: string | null,
    createdAt: string,
    updatedAt: string,
  } | null,
};

export type CreatePlayerPositionMutationVariables = {
  input: CreatePlayerPositionInput,
  condition?: ModelPlayerPositionConditionInput | null,
};

export type CreatePlayerPositionMutation = {
  createPlayerPosition?:  {
    __typename: "PlayerPosition",
    id: string,
    roomID: string,
    playerID: string,
    x: number,
    y: number,
    timestamp: number,
    createdAt: string,
    updatedAt: string,
    owner?: string | null,
  } | null,
};

export type UpdatePlayerPositionMutationVariables = {
  input: UpdatePlayerPositionInput,
  condition?: ModelPlayerPositionConditionInput | null,
};

export type UpdatePlayerPositionMutation = {
  updatePlayerPosition?:  {
    __typename: "PlayerPosition",
    id: string,
    roomID: string,
    playerID: string,
    x: number,
    y: number,
    timestamp: number,
    createdAt: string,
    updatedAt: string,
    owner?: string | null,
  } | null,
};

export type DeletePlayerPositionMutationVariables = {
  input: DeletePlayerPositionInput,
  condition?: ModelPlayerPositionConditionInput | null,
};

export type DeletePlayerPositionMutation = {
  deletePlayerPosition?:  {
    __typename: "PlayerPosition",
    id: string,
    roomID: string,
    playerID: string,
    x: number,
    y: number,
    timestamp: number,
    createdAt: string,
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

export type GetGameDataQueryVariables = {
  id: string,
};

export type GetGameDataQuery = {
  getGameData?:  {
    __typename: "GameData",
    id: string,
    roomID: string,
    activePlayers: Array< string | null >,
    scores?: string | null,
    currentRound?: number | null,
    roundData?: string | null,
    lastUpdated?: string | null,
    gameStarted?: string | null,
    room?:  {
      __typename: "Room",
      id: string,
      public?: string | null,
      mode?: string | null,
      rounds?: number | null,
      timeLimit?: number | null,
      currentPlayers?: number | null,
      roomLimit?: number | null,
      inGame?: boolean | null,
      status: RoomStatus,
      full?: boolean | null,
      createdAt?: string | null,
      playing?: Array< string | null > | null,
      players?: Array< string | null > | null,
      tempPlayers?: Array< string | null > | null,
      simpleCode?: string | null,
      hostID: string,
      currentRound?: number | null,
      updatedAt?: string | null,
      roomGameDataId?: string | null,
      owner?: string | null,
    } | null,
    createdAt: string,
    updatedAt: string,
    owner?: string | null,
  } | null,
};

export type ListGameDataQueryVariables = {
  filter?: ModelGameDataFilterInput | null,
  limit?: number | null,
  nextToken?: string | null,
};

export type ListGameDataQuery = {
  listGameData?:  {
    __typename: "ModelGameDataConnection",
    items:  Array< {
      __typename: "GameData",
      id: string,
      roomID: string,
      activePlayers: Array< string | null >,
      scores?: string | null,
      currentRound?: number | null,
      roundData?: string | null,
      lastUpdated?: string | null,
      gameStarted?: string | null,
      createdAt: string,
      updatedAt: string,
      owner?: string | null,
    } | null >,
    nextToken?: string | null,
  } | null,
};

export type GameDataByRoomIDQueryVariables = {
  roomID: string,
  sortDirection?: ModelSortDirection | null,
  filter?: ModelGameDataFilterInput | null,
  limit?: number | null,
  nextToken?: string | null,
};

export type GameDataByRoomIDQuery = {
  gameDataByRoomID?:  {
    __typename: "ModelGameDataConnection",
    items:  Array< {
      __typename: "GameData",
      id: string,
      roomID: string,
      activePlayers: Array< string | null >,
      scores?: string | null,
      currentRound?: number | null,
      roundData?: string | null,
      lastUpdated?: string | null,
      gameStarted?: string | null,
      createdAt: string,
      updatedAt: string,
      owner?: string | null,
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
    room?:  {
      __typename: "Room",
      id: string,
      public?: string | null,
      mode?: string | null,
      rounds?: number | null,
      timeLimit?: number | null,
      currentPlayers?: number | null,
      roomLimit?: number | null,
      inGame?: boolean | null,
      status: RoomStatus,
      full?: boolean | null,
      createdAt?: string | null,
      playing?: Array< string | null > | null,
      players?: Array< string | null > | null,
      tempPlayers?: Array< string | null > | null,
      simpleCode?: string | null,
      hostID: string,
      currentRound?: number | null,
      updatedAt?: string | null,
      roomGameDataId?: string | null,
      owner?: string | null,
    } | null,
    owner: string,
    createdAt: string,
    updatedAt: string,
    userRoomId?: string | null,
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
      userRoomId?: string | null,
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
      userRoomId?: string | null,
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
    currentPlayers?: number | null,
    roomLimit?: number | null,
    inGame?: boolean | null,
    status: RoomStatus,
    full?: boolean | null,
    createdAt?: string | null,
    playing?: Array< string | null > | null,
    players?: Array< string | null > | null,
    tempPlayers?: Array< string | null > | null,
    simpleCode?: string | null,
    host?:  {
      __typename: "User",
      id: string,
      name: string,
      color?: string | null,
      type?: string | null,
      owner: string,
      createdAt: string,
      updatedAt: string,
      userRoomId?: string | null,
    } | null,
    hostID: string,
    currentRound?: number | null,
    updatedAt?: string | null,
    gameData?:  {
      __typename: "GameData",
      id: string,
      roomID: string,
      activePlayers: Array< string | null >,
      scores?: string | null,
      currentRound?: number | null,
      roundData?: string | null,
      lastUpdated?: string | null,
      gameStarted?: string | null,
      createdAt: string,
      updatedAt: string,
      owner?: string | null,
    } | null,
    roomGameDataId?: string | null,
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
      currentPlayers?: number | null,
      roomLimit?: number | null,
      inGame?: boolean | null,
      status: RoomStatus,
      full?: boolean | null,
      createdAt?: string | null,
      playing?: Array< string | null > | null,
      players?: Array< string | null > | null,
      tempPlayers?: Array< string | null > | null,
      simpleCode?: string | null,
      hostID: string,
      currentRound?: number | null,
      updatedAt?: string | null,
      roomGameDataId?: string | null,
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
      currentPlayers?: number | null,
      roomLimit?: number | null,
      inGame?: boolean | null,
      status: RoomStatus,
      full?: boolean | null,
      createdAt?: string | null,
      playing?: Array< string | null > | null,
      players?: Array< string | null > | null,
      tempPlayers?: Array< string | null > | null,
      simpleCode?: string | null,
      hostID: string,
      currentRound?: number | null,
      updatedAt?: string | null,
      roomGameDataId?: string | null,
      owner?: string | null,
    } | null >,
    nextToken?: string | null,
  } | null,
};

export type RoomsByModeQueryVariables = {
  mode: string,
  sortDirection?: ModelSortDirection | null,
  filter?: ModelRoomFilterInput | null,
  limit?: number | null,
  nextToken?: string | null,
};

export type RoomsByModeQuery = {
  roomsByMode?:  {
    __typename: "ModelRoomConnection",
    items:  Array< {
      __typename: "Room",
      id: string,
      public?: string | null,
      mode?: string | null,
      rounds?: number | null,
      timeLimit?: number | null,
      currentPlayers?: number | null,
      roomLimit?: number | null,
      inGame?: boolean | null,
      status: RoomStatus,
      full?: boolean | null,
      createdAt?: string | null,
      playing?: Array< string | null > | null,
      players?: Array< string | null > | null,
      tempPlayers?: Array< string | null > | null,
      simpleCode?: string | null,
      hostID: string,
      currentRound?: number | null,
      updatedAt?: string | null,
      roomGameDataId?: string | null,
      owner?: string | null,
    } | null >,
    nextToken?: string | null,
  } | null,
};

export type RoomsByStatusQueryVariables = {
  status: RoomStatus,
  sortDirection?: ModelSortDirection | null,
  filter?: ModelRoomFilterInput | null,
  limit?: number | null,
  nextToken?: string | null,
};

export type RoomsByStatusQuery = {
  roomsByStatus?:  {
    __typename: "ModelRoomConnection",
    items:  Array< {
      __typename: "Room",
      id: string,
      public?: string | null,
      mode?: string | null,
      rounds?: number | null,
      timeLimit?: number | null,
      currentPlayers?: number | null,
      roomLimit?: number | null,
      inGame?: boolean | null,
      status: RoomStatus,
      full?: boolean | null,
      createdAt?: string | null,
      playing?: Array< string | null > | null,
      players?: Array< string | null > | null,
      tempPlayers?: Array< string | null > | null,
      simpleCode?: string | null,
      hostID: string,
      currentRound?: number | null,
      updatedAt?: string | null,
      roomGameDataId?: string | null,
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
      currentPlayers?: number | null,
      roomLimit?: number | null,
      inGame?: boolean | null,
      status: RoomStatus,
      full?: boolean | null,
      createdAt?: string | null,
      playing?: Array< string | null > | null,
      players?: Array< string | null > | null,
      tempPlayers?: Array< string | null > | null,
      simpleCode?: string | null,
      hostID: string,
      currentRound?: number | null,
      updatedAt?: string | null,
      roomGameDataId?: string | null,
      owner?: string | null,
    } | null >,
    nextToken?: string | null,
  } | null,
};

export type RoomsByHostIDQueryVariables = {
  hostID: string,
  sortDirection?: ModelSortDirection | null,
  filter?: ModelRoomFilterInput | null,
  limit?: number | null,
  nextToken?: string | null,
};

export type RoomsByHostIDQuery = {
  roomsByHostID?:  {
    __typename: "ModelRoomConnection",
    items:  Array< {
      __typename: "Room",
      id: string,
      public?: string | null,
      mode?: string | null,
      rounds?: number | null,
      timeLimit?: number | null,
      currentPlayers?: number | null,
      roomLimit?: number | null,
      inGame?: boolean | null,
      status: RoomStatus,
      full?: boolean | null,
      createdAt?: string | null,
      playing?: Array< string | null > | null,
      players?: Array< string | null > | null,
      tempPlayers?: Array< string | null > | null,
      simpleCode?: string | null,
      hostID: string,
      currentRound?: number | null,
      updatedAt?: string | null,
      roomGameDataId?: string | null,
      owner?: string | null,
    } | null >,
    nextToken?: string | null,
  } | null,
};

export type GetTempPlayerQueryVariables = {
  id: string,
};

export type GetTempPlayerQuery = {
  getTempPlayer?:  {
    __typename: "TempPlayer",
    id: string,
    playerID: string,
    playerName?: string | null,
    color?: string | null,
    type?: string | null,
    createdAt: string,
    updatedAt: string,
  } | null,
};

export type ListTempPlayersQueryVariables = {
  filter?: ModelTempPlayerFilterInput | null,
  limit?: number | null,
  nextToken?: string | null,
};

export type ListTempPlayersQuery = {
  listTempPlayers?:  {
    __typename: "ModelTempPlayerConnection",
    items:  Array< {
      __typename: "TempPlayer",
      id: string,
      playerID: string,
      playerName?: string | null,
      color?: string | null,
      type?: string | null,
      createdAt: string,
      updatedAt: string,
    } | null >,
    nextToken?: string | null,
  } | null,
};

export type GetPlayerPositionQueryVariables = {
  id: string,
};

export type GetPlayerPositionQuery = {
  getPlayerPosition?:  {
    __typename: "PlayerPosition",
    id: string,
    roomID: string,
    playerID: string,
    x: number,
    y: number,
    timestamp: number,
    createdAt: string,
    updatedAt: string,
    owner?: string | null,
  } | null,
};

export type ListPlayerPositionsQueryVariables = {
  filter?: ModelPlayerPositionFilterInput | null,
  limit?: number | null,
  nextToken?: string | null,
};

export type ListPlayerPositionsQuery = {
  listPlayerPositions?:  {
    __typename: "ModelPlayerPositionConnection",
    items:  Array< {
      __typename: "PlayerPosition",
      id: string,
      roomID: string,
      playerID: string,
      x: number,
      y: number,
      timestamp: number,
      createdAt: string,
      updatedAt: string,
      owner?: string | null,
    } | null >,
    nextToken?: string | null,
  } | null,
};

export type PlayerPositionsByRoomIDQueryVariables = {
  roomID: string,
  sortDirection?: ModelSortDirection | null,
  filter?: ModelPlayerPositionFilterInput | null,
  limit?: number | null,
  nextToken?: string | null,
};

export type PlayerPositionsByRoomIDQuery = {
  playerPositionsByRoomID?:  {
    __typename: "ModelPlayerPositionConnection",
    items:  Array< {
      __typename: "PlayerPosition",
      id: string,
      roomID: string,
      playerID: string,
      x: number,
      y: number,
      timestamp: number,
      createdAt: string,
      updatedAt: string,
      owner?: string | null,
    } | null >,
    nextToken?: string | null,
  } | null,
};

export type GetMessageQueryVariables = {
  id: string,
};

export type GetMessageQuery = {
  getMessage?:  {
    __typename: "Message",
    id: string,
    roomID: string,
    content: string,
    playerID: string,
    playerName?: string | null,
    createdAt: string,
    type?: MessageType | null,
    updatedAt: string,
    owner?: string | null,
  } | null,
};

export type ListMessagesQueryVariables = {
  filter?: ModelMessageFilterInput | null,
  limit?: number | null,
  nextToken?: string | null,
};

export type ListMessagesQuery = {
  listMessages?:  {
    __typename: "ModelMessageConnection",
    items:  Array< {
      __typename: "Message",
      id: string,
      roomID: string,
      content: string,
      playerID: string,
      playerName?: string | null,
      createdAt: string,
      type?: MessageType | null,
      updatedAt: string,
      owner?: string | null,
    } | null >,
    nextToken?: string | null,
  } | null,
};

export type MessagesByRoomIDQueryVariables = {
  roomID: string,
  sortDirection?: ModelSortDirection | null,
  filter?: ModelMessageFilterInput | null,
  limit?: number | null,
  nextToken?: string | null,
};

export type MessagesByRoomIDQuery = {
  messagesByRoomID?:  {
    __typename: "ModelMessageConnection",
    items:  Array< {
      __typename: "Message",
      id: string,
      roomID: string,
      content: string,
      playerID: string,
      playerName?: string | null,
      createdAt: string,
      type?: MessageType | null,
      updatedAt: string,
      owner?: string | null,
    } | null >,
    nextToken?: string | null,
  } | null,
};

export type OnCreateMessageByRoomIdSubscriptionVariables = {
  roomID: string,
};

export type OnCreateMessageByRoomIdSubscription = {
  onCreateMessageByRoomId?:  {
    __typename: "Message",
    id: string,
    roomID: string,
    content: string,
    playerID: string,
    playerName?: string | null,
    createdAt: string,
    type?: MessageType | null,
    updatedAt: string,
    owner?: string | null,
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

export type OnCreateGameDataSubscriptionVariables = {
  filter?: ModelSubscriptionGameDataFilterInput | null,
  owner?: string | null,
};

export type OnCreateGameDataSubscription = {
  onCreateGameData?:  {
    __typename: "GameData",
    id: string,
    roomID: string,
    activePlayers: Array< string | null >,
    scores?: string | null,
    currentRound?: number | null,
    roundData?: string | null,
    lastUpdated?: string | null,
    gameStarted?: string | null,
    room?:  {
      __typename: "Room",
      id: string,
      public?: string | null,
      mode?: string | null,
      rounds?: number | null,
      timeLimit?: number | null,
      currentPlayers?: number | null,
      roomLimit?: number | null,
      inGame?: boolean | null,
      status: RoomStatus,
      full?: boolean | null,
      createdAt?: string | null,
      playing?: Array< string | null > | null,
      players?: Array< string | null > | null,
      tempPlayers?: Array< string | null > | null,
      simpleCode?: string | null,
      hostID: string,
      currentRound?: number | null,
      updatedAt?: string | null,
      roomGameDataId?: string | null,
      owner?: string | null,
    } | null,
    createdAt: string,
    updatedAt: string,
    owner?: string | null,
  } | null,
};

export type OnUpdateGameDataSubscriptionVariables = {
  filter?: ModelSubscriptionGameDataFilterInput | null,
  owner?: string | null,
};

export type OnUpdateGameDataSubscription = {
  onUpdateGameData?:  {
    __typename: "GameData",
    id: string,
    roomID: string,
    activePlayers: Array< string | null >,
    scores?: string | null,
    currentRound?: number | null,
    roundData?: string | null,
    lastUpdated?: string | null,
    gameStarted?: string | null,
    room?:  {
      __typename: "Room",
      id: string,
      public?: string | null,
      mode?: string | null,
      rounds?: number | null,
      timeLimit?: number | null,
      currentPlayers?: number | null,
      roomLimit?: number | null,
      inGame?: boolean | null,
      status: RoomStatus,
      full?: boolean | null,
      createdAt?: string | null,
      playing?: Array< string | null > | null,
      players?: Array< string | null > | null,
      tempPlayers?: Array< string | null > | null,
      simpleCode?: string | null,
      hostID: string,
      currentRound?: number | null,
      updatedAt?: string | null,
      roomGameDataId?: string | null,
      owner?: string | null,
    } | null,
    createdAt: string,
    updatedAt: string,
    owner?: string | null,
  } | null,
};

export type OnDeleteGameDataSubscriptionVariables = {
  filter?: ModelSubscriptionGameDataFilterInput | null,
  owner?: string | null,
};

export type OnDeleteGameDataSubscription = {
  onDeleteGameData?:  {
    __typename: "GameData",
    id: string,
    roomID: string,
    activePlayers: Array< string | null >,
    scores?: string | null,
    currentRound?: number | null,
    roundData?: string | null,
    lastUpdated?: string | null,
    gameStarted?: string | null,
    room?:  {
      __typename: "Room",
      id: string,
      public?: string | null,
      mode?: string | null,
      rounds?: number | null,
      timeLimit?: number | null,
      currentPlayers?: number | null,
      roomLimit?: number | null,
      inGame?: boolean | null,
      status: RoomStatus,
      full?: boolean | null,
      createdAt?: string | null,
      playing?: Array< string | null > | null,
      players?: Array< string | null > | null,
      tempPlayers?: Array< string | null > | null,
      simpleCode?: string | null,
      hostID: string,
      currentRound?: number | null,
      updatedAt?: string | null,
      roomGameDataId?: string | null,
      owner?: string | null,
    } | null,
    createdAt: string,
    updatedAt: string,
    owner?: string | null,
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
    room?:  {
      __typename: "Room",
      id: string,
      public?: string | null,
      mode?: string | null,
      rounds?: number | null,
      timeLimit?: number | null,
      currentPlayers?: number | null,
      roomLimit?: number | null,
      inGame?: boolean | null,
      status: RoomStatus,
      full?: boolean | null,
      createdAt?: string | null,
      playing?: Array< string | null > | null,
      players?: Array< string | null > | null,
      tempPlayers?: Array< string | null > | null,
      simpleCode?: string | null,
      hostID: string,
      currentRound?: number | null,
      updatedAt?: string | null,
      roomGameDataId?: string | null,
      owner?: string | null,
    } | null,
    owner: string,
    createdAt: string,
    updatedAt: string,
    userRoomId?: string | null,
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
    room?:  {
      __typename: "Room",
      id: string,
      public?: string | null,
      mode?: string | null,
      rounds?: number | null,
      timeLimit?: number | null,
      currentPlayers?: number | null,
      roomLimit?: number | null,
      inGame?: boolean | null,
      status: RoomStatus,
      full?: boolean | null,
      createdAt?: string | null,
      playing?: Array< string | null > | null,
      players?: Array< string | null > | null,
      tempPlayers?: Array< string | null > | null,
      simpleCode?: string | null,
      hostID: string,
      currentRound?: number | null,
      updatedAt?: string | null,
      roomGameDataId?: string | null,
      owner?: string | null,
    } | null,
    owner: string,
    createdAt: string,
    updatedAt: string,
    userRoomId?: string | null,
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
    room?:  {
      __typename: "Room",
      id: string,
      public?: string | null,
      mode?: string | null,
      rounds?: number | null,
      timeLimit?: number | null,
      currentPlayers?: number | null,
      roomLimit?: number | null,
      inGame?: boolean | null,
      status: RoomStatus,
      full?: boolean | null,
      createdAt?: string | null,
      playing?: Array< string | null > | null,
      players?: Array< string | null > | null,
      tempPlayers?: Array< string | null > | null,
      simpleCode?: string | null,
      hostID: string,
      currentRound?: number | null,
      updatedAt?: string | null,
      roomGameDataId?: string | null,
      owner?: string | null,
    } | null,
    owner: string,
    createdAt: string,
    updatedAt: string,
    userRoomId?: string | null,
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
    currentPlayers?: number | null,
    roomLimit?: number | null,
    inGame?: boolean | null,
    status: RoomStatus,
    full?: boolean | null,
    createdAt?: string | null,
    playing?: Array< string | null > | null,
    players?: Array< string | null > | null,
    tempPlayers?: Array< string | null > | null,
    simpleCode?: string | null,
    host?:  {
      __typename: "User",
      id: string,
      name: string,
      color?: string | null,
      type?: string | null,
      owner: string,
      createdAt: string,
      updatedAt: string,
      userRoomId?: string | null,
    } | null,
    hostID: string,
    currentRound?: number | null,
    updatedAt?: string | null,
    gameData?:  {
      __typename: "GameData",
      id: string,
      roomID: string,
      activePlayers: Array< string | null >,
      scores?: string | null,
      currentRound?: number | null,
      roundData?: string | null,
      lastUpdated?: string | null,
      gameStarted?: string | null,
      createdAt: string,
      updatedAt: string,
      owner?: string | null,
    } | null,
    roomGameDataId?: string | null,
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
    currentPlayers?: number | null,
    roomLimit?: number | null,
    inGame?: boolean | null,
    status: RoomStatus,
    full?: boolean | null,
    createdAt?: string | null,
    playing?: Array< string | null > | null,
    players?: Array< string | null > | null,
    tempPlayers?: Array< string | null > | null,
    simpleCode?: string | null,
    host?:  {
      __typename: "User",
      id: string,
      name: string,
      color?: string | null,
      type?: string | null,
      owner: string,
      createdAt: string,
      updatedAt: string,
      userRoomId?: string | null,
    } | null,
    hostID: string,
    currentRound?: number | null,
    updatedAt?: string | null,
    gameData?:  {
      __typename: "GameData",
      id: string,
      roomID: string,
      activePlayers: Array< string | null >,
      scores?: string | null,
      currentRound?: number | null,
      roundData?: string | null,
      lastUpdated?: string | null,
      gameStarted?: string | null,
      createdAt: string,
      updatedAt: string,
      owner?: string | null,
    } | null,
    roomGameDataId?: string | null,
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
    currentPlayers?: number | null,
    roomLimit?: number | null,
    inGame?: boolean | null,
    status: RoomStatus,
    full?: boolean | null,
    createdAt?: string | null,
    playing?: Array< string | null > | null,
    players?: Array< string | null > | null,
    tempPlayers?: Array< string | null > | null,
    simpleCode?: string | null,
    host?:  {
      __typename: "User",
      id: string,
      name: string,
      color?: string | null,
      type?: string | null,
      owner: string,
      createdAt: string,
      updatedAt: string,
      userRoomId?: string | null,
    } | null,
    hostID: string,
    currentRound?: number | null,
    updatedAt?: string | null,
    gameData?:  {
      __typename: "GameData",
      id: string,
      roomID: string,
      activePlayers: Array< string | null >,
      scores?: string | null,
      currentRound?: number | null,
      roundData?: string | null,
      lastUpdated?: string | null,
      gameStarted?: string | null,
      createdAt: string,
      updatedAt: string,
      owner?: string | null,
    } | null,
    roomGameDataId?: string | null,
    owner?: string | null,
  } | null,
};

export type OnCreateTempPlayerSubscriptionVariables = {
  filter?: ModelSubscriptionTempPlayerFilterInput | null,
};

export type OnCreateTempPlayerSubscription = {
  onCreateTempPlayer?:  {
    __typename: "TempPlayer",
    id: string,
    playerID: string,
    playerName?: string | null,
    color?: string | null,
    type?: string | null,
    createdAt: string,
    updatedAt: string,
  } | null,
};

export type OnUpdateTempPlayerSubscriptionVariables = {
  filter?: ModelSubscriptionTempPlayerFilterInput | null,
};

export type OnUpdateTempPlayerSubscription = {
  onUpdateTempPlayer?:  {
    __typename: "TempPlayer",
    id: string,
    playerID: string,
    playerName?: string | null,
    color?: string | null,
    type?: string | null,
    createdAt: string,
    updatedAt: string,
  } | null,
};

export type OnDeleteTempPlayerSubscriptionVariables = {
  filter?: ModelSubscriptionTempPlayerFilterInput | null,
};

export type OnDeleteTempPlayerSubscription = {
  onDeleteTempPlayer?:  {
    __typename: "TempPlayer",
    id: string,
    playerID: string,
    playerName?: string | null,
    color?: string | null,
    type?: string | null,
    createdAt: string,
    updatedAt: string,
  } | null,
};

export type OnCreatePlayerPositionSubscriptionVariables = {
  filter?: ModelSubscriptionPlayerPositionFilterInput | null,
  owner?: string | null,
};

export type OnCreatePlayerPositionSubscription = {
  onCreatePlayerPosition?:  {
    __typename: "PlayerPosition",
    id: string,
    roomID: string,
    playerID: string,
    x: number,
    y: number,
    timestamp: number,
    createdAt: string,
    updatedAt: string,
    owner?: string | null,
  } | null,
};

export type OnUpdatePlayerPositionSubscriptionVariables = {
  filter?: ModelSubscriptionPlayerPositionFilterInput | null,
  owner?: string | null,
};

export type OnUpdatePlayerPositionSubscription = {
  onUpdatePlayerPosition?:  {
    __typename: "PlayerPosition",
    id: string,
    roomID: string,
    playerID: string,
    x: number,
    y: number,
    timestamp: number,
    createdAt: string,
    updatedAt: string,
    owner?: string | null,
  } | null,
};

export type OnDeletePlayerPositionSubscriptionVariables = {
  filter?: ModelSubscriptionPlayerPositionFilterInput | null,
  owner?: string | null,
};

export type OnDeletePlayerPositionSubscription = {
  onDeletePlayerPosition?:  {
    __typename: "PlayerPosition",
    id: string,
    roomID: string,
    playerID: string,
    x: number,
    y: number,
    timestamp: number,
    createdAt: string,
    updatedAt: string,
    owner?: string | null,
  } | null,
};

export type OnCreateMessageSubscriptionVariables = {
  filter?: ModelSubscriptionMessageFilterInput | null,
  owner?: string | null,
};

export type OnCreateMessageSubscription = {
  onCreateMessage?:  {
    __typename: "Message",
    id: string,
    roomID: string,
    content: string,
    playerID: string,
    playerName?: string | null,
    createdAt: string,
    type?: MessageType | null,
    updatedAt: string,
    owner?: string | null,
  } | null,
};

export type OnUpdateMessageSubscriptionVariables = {
  filter?: ModelSubscriptionMessageFilterInput | null,
  owner?: string | null,
};

export type OnUpdateMessageSubscription = {
  onUpdateMessage?:  {
    __typename: "Message",
    id: string,
    roomID: string,
    content: string,
    playerID: string,
    playerName?: string | null,
    createdAt: string,
    type?: MessageType | null,
    updatedAt: string,
    owner?: string | null,
  } | null,
};

export type OnDeleteMessageSubscriptionVariables = {
  filter?: ModelSubscriptionMessageFilterInput | null,
  owner?: string | null,
};

export type OnDeleteMessageSubscription = {
  onDeleteMessage?:  {
    __typename: "Message",
    id: string,
    roomID: string,
    content: string,
    playerID: string,
    playerName?: string | null,
    createdAt: string,
    type?: MessageType | null,
    updatedAt: string,
    owner?: string | null,
  } | null,
};
