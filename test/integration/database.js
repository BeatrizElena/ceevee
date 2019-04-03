import { assert } from 'chai';
import mongoose from 'mongoose';
import DatabaseService from '../../app/database';
import ENV from '../../config/environment';

/* eslint no-undef: "warn" */
describe ('Integration: DatabaseService', () => {

  beforeEach(async() => {
    await DatabaseService.connect();
  });

  afterEach(async() => {
    await DatabaseService.disconnect();
  });

  describe ('connect()', () => {
    it('should connect to the database at ENV.MONGODB_URI by default', () => {
      assert.equal(mongoose.connection.client.s.url, ENV.MONGODB_URI);
    });
  });
});
