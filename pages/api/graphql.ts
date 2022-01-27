import { NextApiHandler } from 'next';
import { ApolloServer } from 'apollo-server-micro';

import { schema } from '../../server/graphql/schema';
import { generateContext } from '../../server/graphql/context';

const server = new ApolloServer({
  schema,
  context: generateContext
})

export const config = {
  api: {
    bodyParser: false,
  },
}

const handler: NextApiHandler = async (req, res) => {
  await server.start();
  return server.createHandler({
    path: '/api/graphql',
  })(req, res)
}

export default handler