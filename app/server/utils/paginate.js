/**
 * A method for Handling Pagination
 * @param {number} limit
 * @param {number} offset
 * @param {object} queryResult
 *
 * @returns {object} pagination metadata
 */
function paginate(limit, offset, queryResult) {
  const pageCount = Math.ceil(queryResult / limit);
  const pageSize = limit;
  const page = Math.ceil(offset / limit + 1) || 1;

  return {
    page,
    pageCount,
    pageSize,
    totalCount: queryResult.count,
  };
}

export default paginate;
