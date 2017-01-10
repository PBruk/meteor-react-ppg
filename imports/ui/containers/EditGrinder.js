import { Meteor } from 'meteor/meteor';
import { composeWithTracker } from 'react-komposer';
import Grinders from '../../api/grinders/grinders.js';
import EditGrinder from '../pages/EditGrinder.js';
import { Loading } from '../components/Loading.js';

const composer = ({ doc }, onData) => {
  const subscription = Meteor.subscribe('grinders.edit', doc._id);

  if (subscription.ready()) {
    const currentDoc = Grinders.findOne();
    onData(null, { doc: currentDoc });
  }
};

export default composeWithTracker(composer, Loading)(EditGrinder);
