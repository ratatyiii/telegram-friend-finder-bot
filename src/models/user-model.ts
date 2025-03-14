import mongoose, { Schema } from 'mongoose';
import {
  IUser,
  UserCreateData,
  UserUpdateData,
} from '../interfaces/user-interface';

const userSchema = new Schema<IUser>(
  {
    telegramId: {
      type: Number,
      required: true,
      unique: true,
    },
    username: {
      type: String,
      required: false,
    },
    name: {
      type: String,
      required: true,
    },
    age: {
      type: Number,
      required: true,
      min: 12,
      max: 100,
    },
    gender: {
      type: String,
      required: true,
    },
    partnerGender: {
      type: String,
      required: true,
    },
    favoriteGames: {
      type: [String],
      required: true,
    },
    bio: {
      type: String,
      required: false,
    },
    photo: {
      type: String,
      required: true,
    },
    likes: {
      type: [Number],
      default: [],
    },
    matches: {
      type: [Number],
      default: [],
    },
    pendingLikes: {
      type: [Number],
      default: [],
    },
    isAdmin: {
      type: Boolean,
      default: false,
    },
  },
  { timestamps: true }
);

const User = mongoose.model<IUser>('User', userSchema);

export default User;

export async function createUser(data: UserCreateData): Promise<IUser> {
  return await new User(data).save();
}

export async function findUserById(
  telegramId: number | undefined
): Promise<IUser | null> {
  if (telegramId === undefined) {
    return null;
  }

  return User.findOne({ telegramId });
}

export async function updateUserById(
  telegramId: number | undefined,
  data: UserUpdateData
): Promise<IUser | null> {
  if (telegramId === undefined) {
    return null;
  }

  const updatedUser: IUser | null = await User.findOneAndUpdate(
    { telegramId },
    data,
    {
      new: true,
      runValidators: true,
    }
  );

  if (!updatedUser) {
    throw new Error(`User with id ${telegramId} does not exist`);
  }

  return updatedUser;
}
