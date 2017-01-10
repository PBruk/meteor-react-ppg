import React from 'react';
import { Row, Col, Button } from 'react-bootstrap';
import GrindersList from '../containers/GrindersList.js';

const Grinders = props => (
  <Row>
    <Col xs={ 12 }>
      <div className="page-header clearfix">
        <h4 className="pull-left">Grinders</h4>
        <Button
          bsStyle="success"
          className="pull-right"
          onClick={(event) => { props.setCurrentPage(event, { page: 'newGrinder' }); }}
        >New Grinder</Button>
      </div>
      <GrindersList { ...props } />
    </Col>
  </Row>
);

Grinders.propTypes = {
  setCurrentPage: React.PropTypes.func,
};

export default Grinders;
