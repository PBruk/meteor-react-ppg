import React from 'react';
import GrinderEditor from '../components/GrinderEditor.js';

const EditGrinder = props => (
  <div className="EditDocument">
    <h4 className="page-header">Editing "{ props.doc.title }"</h4>
    <GrinderEditor { ...props } />
  </div>
);

EditGrinder.propTypes = {
  doc: React.PropTypes.object,
};

export default EditGrinder;
