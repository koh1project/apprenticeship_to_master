import { ApolloServer } from 'apollo-server';

import { typeDefs } from './query';
import { resolvers } from './resolvers';

export const server = new ApolloServer({ typeDefs, resolvers });
