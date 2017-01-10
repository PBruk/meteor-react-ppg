import React from 'react';
import { ButtonToolbar, ButtonGroup, Button } from 'react-bootstrap';
import { Bert } from 'meteor/themeteorchef:bert';
import { removeGrinder } from '../../api/grinders/methods.js';

const handleRemove = (_id, setCurrentPage) => {
  if (confirm('Are you sure? This is permanent!')) {
    removeGrinder.call({ _id }, (error) => {
      if (error) {
        Bert.alert(error.reason, 'danger');
      } else {
        Bert.alert('Grinder deleted!', 'success');
        setCurrentPage(null, { page: 'grinders' });
      }
    });
  }
};

const ViewGrinder = ({ doc, setCurrentPage }) => (
  <div className="ViewDocument">
    <div className="page-header clearfix">
      <h4 className="pull-left">{ doc && doc.title }</h4>
      <ButtonToolbar className="pull-right">
        <ButtonGroup bsSize="small">
          <Button
            onClick={(event) => {
              setCurrentPage(event, { page: 'editGrinder', props: { doc } });
            }}
          >Edit</Button>
          <Button
            onClick={ () => handleRemove(doc._id, setCurrentPage) }
            className="text-danger">Delete</Button>
        </ButtonGroup>
      </ButtonToolbar>
    </div>
    { doc && doc.body }
  </div>
);

ViewGrinder.propTypes = {
  doc: React.PropTypes.object,
  setCurrentPage: React.PropTypes.func,
};

export default ViewGrinder;
