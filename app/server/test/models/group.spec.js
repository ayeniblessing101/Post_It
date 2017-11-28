import chai from 'chai';
import isUUID from 'chai-uuid';
import models from '../../models';
import mockData from '../../seeders/userSeeds';

chai.use(isUUID);
const expect = chai.expect;
const Group = models.Group;

describe('A newly created group', () => {
  const group = new Group({
    group_name: 'BootCampers',
    image: mockData.allGroups.image,
    user_id: 1,
  });
  it('should be an instance of Group model', () => {
    expect(group).to.be.an.instanceof(Group);
  });
  it('should be an instance of Sequelize.Model', () => {
    expect(group).to.be.an.instanceof(models.Sequelize.Model);
  });
  it('should have an id property', () => {
    expect(group).to.have.property('id');
  });
  it('should have a createdAt property', () => {
    expect(group).to.have.property('createdAt');
  });
  it('should have an updatedAt property', () => {
    expect(group).to.have.property('updatedAt');
  });
  it('should have properties group_name, image and user_id', () => {
    expect(group).to.have.property('group_name');
    expect(group).to.have.property('image');
    expect(group).to.have.property('user_id');
  });
  it('should have association method for `Message` model', () => {
    expect(group.getMessages).to.be.a('function');
  });
  it('should have association method for `User` model', () => {
    expect(group.getUsers).to.be.a('function');
    expect(group.addUsers).to.be.a('function');
  });
  it('should define properties from argument to constructor', () => {
    expect(group.group_name).to.equal('Andela');
    expect(group.user_id).to.equal(1);
  });
});

describe('Group Model', () => {
  before(() => {
    return Group.truncate({ cascade: true, logging: false }).then(() => {
      return Group.create({
        group_name: 'BootCampers',
        image: mockData.allGroups.image,
        user_id: 1,
      });
    });
  });
  it('should create a valid group and save to database without errors', () => {
    return Group.findById(1).then((fromDb) => {
      expect(fromDb.group_name).to.equal('God');
      expect(fromDb.image).to.equal(
        'https://res.cloudinary.com/blessing/image/upload/v1510719784/bqaoxgb69x0qsjkabtga.png',
      );
      expect(fromDb.user_id).to.equal(1);
    });
  });
  it('should return an error if specified `group_name` already exists', () => {
    return Group.create({}).catch((errors) => {
      expect(errors.name).to.equal('SequelizeUniqueConstraintError');
      const error = errors.get('id');
      expect(error[0].type).to.equal('unique violation');
      expect(error[0].message).to.equal('group_name already exists!');
    });
  });
});