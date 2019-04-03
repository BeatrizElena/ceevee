import mongoose from 'mongoose';
import Logger from './helpers/logger';
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
    Logger.log('Connected to MongoDB.\n');
    const connection = mongoose.connection;
    connection.on('error', (err) => Logger.log(`Database error: ${err}\n`));
  }

  /**
   * Disconnects mongoose.
   */
  static async disconnect() {
    await mongoose.disconnect();
  }
}
