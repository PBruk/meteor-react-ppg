import $ from 'jquery';
import 'jquery-validation';
import { Bert } from 'meteor/themeteorchef:bert';
import { upsertGrinder } from '../api/grinders/methods.js';

let component;

const handleUpsert = () => {
  const { doc } = component.props;
  const confirmation = doc && doc._id ? 'Grinder updated!' : 'Grinder added!';
  const upsert = {
    title: document.querySelector('[name="title"]').value.trim(),
    body: document.querySelector('[name="body"]').value.trim(),
  };

  if (doc && doc._id) upsert._id = doc._id;

  upsertGrinder.call(upsert, (error, { insertedId }) => {
    if (error) {
      Bert.alert(error.reason, 'danger');
    } else {
      component.form.reset();
      Bert.alert(confirmation, 'success');
      upsert._id = doc && doc._id ? doc._id : insertedId;
      component.props.setCurrentPage(null, {
        page: 'viewGrinder', props: { doc: upsert }
      });
    }
  });
};

const validate = () => {
  $(component.form).validate({
    rules: {
      title: {
        required: true,
      },
      body: {
        required: true,
      },
    },
    messages: {
      title: {
        required: 'Need a title in here, Seuss.',
      },
      body: {
        required: 'This thneeds a body, please.',
      },
    },
    submitHandler() { handleUpsert(); },
  });
};

export default function handleLogin(options) {
  component = options.component;
  validate();
}
