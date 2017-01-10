import { Mongo } from 'meteor/mongo';
import { SimpleSchema } from 'meteor/aldeed:simple-schema';
import { Factory } from 'meteor/dburles:factory';

const Grinders = new Mongo.Collection('Grinders');
export default Grinders;

Grinders.allow({
  insert: () => false,
  update: () => false,
  remove: () => false,
});

Grinders.deny({
  insert: () => true,
  update: () => true,
  remove: () => true,
});

Grinders.schema = new SimpleSchema({
  title: {
    type: String,
    label: 'The title of the document.',
  },
  body: {
    type: String,
    label: 'The body of the document.',
  },
});

Grinders.attachSchema(Grinders.schema);

Factory.define('grinder', Grinders, {
  title: () => 'Factory Title',
  body: () => 'Factory Body',
});
