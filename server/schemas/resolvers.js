const { User } = require('../models');
const { signToken } = require('../utils/auth');
const { AuthenticationError } = require('apollo-server-errors');

const resolvers = {
  Query: {
    me: async (parent, args, context) => {
        if (context.user) {
          return Profile.findOne({ _id: context.user._id });
        }
        throw new AuthenticationError('You need to be logged in!');
      },
  },
  Mutation: {

  }
};


module.exports = { resolvers };