export interface IMessage {
  userId: number,
  otherUserId: number,
  text: string
}

export interface ILike {
  userId: number,
  otherUserId: number
}