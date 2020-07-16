import React from 'react';

const ErrorIndicator = ({ message = 'Something went extremely wrong' }) => (
  <div className="alert alert-danger text-center" role="alert">
    <i className="fa fa-frown-o" aria-hidden="true"></i>
    MG... {message}...
  </div>
);

export default ErrorIndicator;
