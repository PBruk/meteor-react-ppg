import { SimpleSchema } from 'meteor/aldeed:simple-schema';
import { ValidatedMethod } from 'meteor/mdg:validated-method';
import Grinders from './grinders';
import { rateLimit } from '../../modules/rate-limit.js';

export const upsertGrinder = new ValidatedMethod({
  name: 'grinders.upsert',
  validate: new SimpleSchema({
    _id: { type: String, optional: true },
    title: { type: String, optional: true },
    body: { type: String, optional: true },
  }).validator(),
  run(document) {
    return Grinders.upsert({ _id: grinder._id }, { $set: grinder });
  },
});

export const removeGrinder = new ValidatedMethod({
  name: 'grinders.remove',
  validate: new SimpleSchema({
    _id: { type: String },
  }).validator(),
  run({ _id }) {
    Grinders.remove(_id);
  },
});

rateLimit({
  methods: [
    upsertGrinder,
    removeGrinder,
  ],
  limit: 5,
  timeRange: 1000,
});
