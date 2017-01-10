import React from 'react';
import { FormGroup, FormControl } from 'react-bootstrap';
import { Bert } from 'meteor/themeteorchef:bert';
import { insertGrinder } from '../../api/grinders/methods.js';

const handleInsertGrinder = (event) => {
  const target = event.target;
  const title = target.value.trim();

  if (title !== '' && event.keyCode === 13) {
    insertGrinder.call({
      title,
    }, (error) => {
      if (error) {
        Bert.alert(error.reason, 'danger');
      } else {
        target.value = '';
        Bert.alert('Grinder added!', 'success');
      }
    });
  }
};

const AddGrinder = () => (
  <FormGroup>
    <FormControl
      type="text"
      onKeyUp={ handleInsertGrinder }
      placeholder="Type a grinder title and press enter..."
    />
  </FormGroup>
);

export default AddGrinder;
