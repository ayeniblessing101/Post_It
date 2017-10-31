import React from 'react';
import Header from './common/Header';


/**
 * Renders Not found Page Component
 * @class NotFoundPage
 * @extends {React.Component}
 */
const NotFoundPage = () => {
  return (
    <div>
      <Header />
      <div className="mycontainer">
        <div className="row">
          <div className="col s12 m4 l2" />
          <div className="col s12 m4 l8 notFound">
            <h2>404</h2>
            <h3 className="errorTitle1">
              ERROR !
            </h3>
            <h4 className="errorTitle2">
              PAGE NOT FOUND
            </h4>
            <h5 className="errorDescription">
              For Some Reason The Page You Requested
              Could Not Be Found On Our Server
            </h5>
          </div>
          <div className="col s12 m4 l2" />
        </div>
      </div>
    </div>
  );
};

export default NotFoundPage;
