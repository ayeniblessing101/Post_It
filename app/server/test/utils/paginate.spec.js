import chai from 'chai';
import paginate from '../../utils/paginate';

const expect = chai.expect;

describe('Pagination', () => {
  it('should be a function', () => {
    expect(paginate).to.be.a('function');
  });
  it(
    'should return an object with property page, ' +
      'pageCount, pageSize, totalCount',
    () => {
      expect(paginate).to.have.property('page');
      expect(paginate).to.have.property('pageCount');
      expect(paginate).to.have.property('pageSize');
      expect(paginate).to.have.property('totalCount');
    },
  );
});
