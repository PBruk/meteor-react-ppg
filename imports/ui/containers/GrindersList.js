import { composeWithTracker } from 'react-komposer';
import { Meteor } from 'meteor/meteor';
import Grinders from '../../api/grinders/grinders.js';
import GrindersList from '../components/GrindersList.js';
import Loading from '../components/Loading.js';

const composer = (params, onData) => {
  const subscription = Meteor.subscribe('grinders.list');
  if (subscription.ready()) {
    const grinders = Grinders.find().fetch();
    onData(null, { grinders });
  }
};

export default composeWithTracker(composer, Loading)(GrindersList);
