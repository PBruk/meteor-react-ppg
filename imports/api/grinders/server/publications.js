import { Meteor } from 'meteor/meteor';
import { check } from 'meteor/check';
import Grinders from '../grinders';

Meteor.publish('grinders.list', () => Grinders.find());

Meteor.publish('grinders.view', (_id) => {
  check(_id, String);
  return Grinders.find(_id);
});

Meteor.publish('grinders.edit', (_id) => {
  check(_id, String);
  return Grinders.find(_id);
});
