import { assert } from 'chai';
import server from '../../app/server';

describe ('Unit: smoke test', () => {
  it('should execute tests within a test module that imports an ES module from within the application', () => {
    server();
    assert.ok(true, 'Tests should execute and this assertion should pass.');
  });
});
