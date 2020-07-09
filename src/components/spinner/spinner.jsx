import React from 'react';

import { withBookstoreService } from '../hoc';

const Spinner = ({ getData }) => (
  <div className="spinner-border text-warning" role="status">
    <span className="sr-only">Loading...</span>
    {getData.toString()}
  </div>
);

const mapBookMethodsToProps = ({ getBooks }) => ({
  getData: getBooks,
})

export default withBookstoreService(mapBookMethodsToProps)(Spinner);
