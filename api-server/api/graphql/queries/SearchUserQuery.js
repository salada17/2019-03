const { GraphQLString, GraphQLList } = require('graphql');

const { SearchUserType } = require('../types/SearchUserType');
const { User, Sequelize } = require('../../../db');

const { Op } = Sequelize;

const searchUserQuery = {
  type: new GraphQLList(SearchUserType),
  args: {
    id: { type: GraphQLString },
  },
  resolve: (user, args) => {
    return User.findAll({
      where: {
        [Op.or]: [
          { username: { [Op.like]: `%${args.id}%` } },
          { name: { [Op.like]: `%${args.id}%` } },
        ],
      },
    });
  },
};

module.exports = { searchUserQuery };