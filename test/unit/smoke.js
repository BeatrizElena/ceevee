import { assert } from 'chai';
import Application from '../../app/app';

/* eslint no-undef: "warn" */
describe ('Unit: smoke test', () => {
  it('should execute tests with an imported ES module', () => {
    assert.equal(Application.hello, 'it worked!');
    assert.ok(true, 'Tests should execute and this assertion should pass.');
  });

  it('should execute async tests', async () => {
    const value = await Promise.resolve(3);
    assert.equal(value, 3, 'Value was set with await.');
  });
});
