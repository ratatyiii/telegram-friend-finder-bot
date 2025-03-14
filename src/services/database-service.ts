import mongoose from 'mongoose';

export default class DatabaseService {
  async connect(connectionString: string): Promise<void> {
    await mongoose.connect(connectionString);
  }
}
