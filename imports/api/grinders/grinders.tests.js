/* eslint-env mocha */
/* eslint-disable func-names, prefer-arrow-callback */

import { assert } from 'meteor/practicalmeteor:chai';
import Grinders from './grinders.js';

describe('Grinders collection', function () {
  it('registers the collection with Mongo properly', function () {
    assert.equal(typeof Grinders, 'object');
  });
});
