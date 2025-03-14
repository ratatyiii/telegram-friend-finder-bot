export interface IUser {
  telegramId: number;
  username?: string;
  name: string;
  age: number;
  gender: string;
  partnerGender: string;
  favoriteGames: string[];
  bio?: string;
  photo: string;
  likes: number[];
  matches: number[];
  pendingLikes: number[];
  isAdmin: boolean;

  createdAt: Date;
  updatedAt: Date;
}

export type UserCreateData = Omit<
  IUser,
  'likes' | 'matches' | 'pendingLikes' | 'isAdmin' | 'createdAt' | 'updatedAt'
>;
export type UserUpdateData =
  | Partial<IUser>
  | { $set: Partial<IUser> }
  | { $push: { [key in keyof IUser]?: IUser[key] } };
