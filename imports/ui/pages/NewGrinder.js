import React from 'react';
import GrinderEditor from '../components/GrinderEditor.js';

const NewGrinder = props => (
  <div className="NewGrinder">
    <h4 className="page-header">New Grinder</h4>
    <GrinderEditor { ...props } />
  </div>
);

export default NewGrinder;
