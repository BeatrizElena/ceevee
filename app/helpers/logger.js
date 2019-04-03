/**
 * Central logging facility handles output to stdout.  This prevents
 * `process.stdout.write` from being litered through the project, and enables
 * additional logging functionality to be added in the future.
 */
class Logger {
  /**
   * Log a message.
   * @param {String} message
   */
  static log(message) {
    const timestamp = new Date().toISOString();
    this.write(`[${timestamp}] ${message}`);
  }

  /**
   * Writes a message to stdout.
   * @param {String} message
   */
  static write(message) {
    process.stdout.write(`${message}\n`);
  }
}

export default Logger;
