import { Meteor } from 'meteor/meteor';
import { composeWithTracker } from 'react-komposer';
import Grinders from '../../api/grinders/grinders.js';
import ViewGrinder from '../pages/ViewGrinder.js';
import { Loading } from '../components/Loading.js';

const composer = ({ doc }, onData) => {
  const subscription = Meteor.subscribe('grinders.view', doc._id);

  if (subscription.ready()) {
    const currentDoc = grinders.findOne();
    onData(null, { doc: currentDoc });
  }
};

export default composeWithTracker(composer, Loading)(ViewGrinder);
