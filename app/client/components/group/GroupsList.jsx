import React from 'react';
import PropTypes from 'prop-types';
import ReactPaginate from 'react-paginate';
import GroupCard from './GroupCard';

const isEmpty = require('lodash/isEmpty');

/**
 * Renders GroupsList component
 * @param {any} groups
 *
 * @returns {object} - GroupsList component
 */
const GroupsList = ({ groups, totalCount, pageCount, handlePageClick }) => {
  const emptyMessage = (
    <div>
      <h3 className="emptyMessage">No Groups</h3>
    </div>
  );
  const groupsList = (
    <div>
      <div className="col s12 m1 l1" />
      <div id="groupsList" className="col s12 m11 l11 col-md-10 no-float">
        <div className="mycontainer">
          <div className="row ">
            <h4 className="groupsTitle">All Groups</h4>
            <div className="mycontainer">
              <div className="row ">
                {
                  groups.map((group, i) => {
                    return <GroupCard group={group} key={i} />;
                  })
                }
                <div style={{ clear: 'both' }} />
                <div className="row">
                  <div className="dashboard-paginate">
                    {
                      totalCount > 6 &&
                      <ReactPaginate
                      previousLabel={'previous'}
                      nextLabel={'next'}
                      breakLabel={<a href="">...</a>}
                      breakClassName={'break-me'}
                      pageCount={pageCount}
                      marginPagesDisplayed={2}
                      pageRangeDisplayed={5}
                      onPageChange={handlePageClick}
                      containerClassName={'pagination'}
                      subContainerClassName={'pages pagination'}
                      activeClassName={'active'}
                      />
                    }
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );

  return (
      isEmpty(groups) ? emptyMessage : groupsList
  );
};

GroupsList.propTypes = {
  groups: PropTypes.array.isRequired,
};

export default GroupsList;
