/* eslint-env mocha */
/* eslint-disable func-names, prefer-arrow-callback */

import { Meteor } from 'meteor/meteor';
import { assert } from 'meteor/practicalmeteor:chai';
import { resetDatabase } from 'meteor/xolvio:cleaner';
import { Factory } from 'meteor/dburles:factory';
import Grinders from './grinders.js';
import { upsertGrinder, removeGrinder } from './methods.js';

describe('Grinders methods', function () {
  beforeEach(function () {
    if (Meteor.isServer) {
      resetDatabase();
    }
  });

  it('inserts a grinder into the Grinders collection', function () {
    upsertGrinder.call({
      title: 'You can\'t arrest me, I\'m the Cake Boss!',
      body: 'They went nuts!',
    });

    const getGrinder = Grinders.findOne({ title: 'You can\'t arrest me, I\'m the Cake Boss!' });
    assert.equal(getGrinder.body, 'They went nuts!');
  });

  it('updates a grinder in the Grinders collection', function () {
    const { _id } = Factory.create('grinder');

    upsertGrinder.call({
      _id,
      title: 'You can\'t arrest me, I\'m the Cake Boss!',
      body: 'They went nuts!',
    });

    const getGrinder = Grinders.findOne(_id);
    assert.equal(getGrinder.title, 'You can\'t arrest me, I\'m the Cake Boss!');
  });

  it('removes a grinder from the Grinders collection', function () {
    const { _id } = Factory.create('grinder');
    removeGrinder.call({ _id });
    const getGrinder = Grinders.findOne(_id);
    assert.equal(getGrinder, undefined);
  });
});
