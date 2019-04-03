/**
 * Central logging facility handles output to stdout.  This prevents
 * `process.stdout.write` from being litered through the project, and enables
 * additional logging functionality to be added in the future.
 */
class Logger {
  /**
   * Log a message to stdout.
   * @param {String} message
   */
  static log(message) {
    this.write(message);
  }
}

Logger.prototype.write = process.stdout.write;

export default Logger;
