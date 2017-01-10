import React from 'react';
import { ListGroup, ListGroupItem, Alert } from 'react-bootstrap';

const GrindersList = ({ grinders, setCurrentPage }) => (
  grinders.length > 0 ? <ListGroup className="GrindersList">
    {grinders.map(doc => (
      <ListGroupItem
        key={ doc._id }
        onClick={(event) => { setCurrentPage(event, { page: 'viewGrinder', props: { doc } }); }}
      >{ doc.title }</ListGroupItem>
    ))}
  </ListGroup> :
  <Alert bsStyle="warning">No grinders yet.</Alert>
);

GrindersList.propTypes = {
  documents: React.PropTypes.array,
  setCurrentPage: React.PropTypes.func,
};

export default GrindersList;
