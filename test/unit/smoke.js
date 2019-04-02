import { assert } from 'chai';
import server from '../../app/server';

describe ('Unit: smoke test', () => {
  it('should execute tests with an imported ES module', () => {
    server();
    assert.ok(true, 'Tests should execute and this assertion should pass.');
  });

  it('should execute async tests', async () => {
    const value = await Promise.resolve(3);
    assert.equal(value, 3, 'Value was set with await.');
  });
});
