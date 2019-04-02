import mongoose from 'mongoose';
import ENV from '../config/environment';

/**
 * Primary control surface for starting/stopping a database connection.
 */
export default class DatabaseService {

  // =instance methods

  /**
   * Connects mongoose to a MongoDB at `ENV.MONGODB_URI`.
   */
  static async connect() {
    await mongoose.connect(ENV.MONGODB_URI);
    console.log(`Connected to MongoDB.`);
    const connection = mongoose.connection;
    connection.on('error', console.error.bind(console, 'connection error:'));
  }

  /**
   * Disconnects mongoose.
   */
  static async disconnect() {
    await mongoose.disconnect();
  }
}
