import { NextApiHandler } from 'next';
import { ApolloServer } from 'apollo-server-micro';

import { schema } from '@/server/graphql/schema';
import { generateContext } from '@/server/graphql/context';

const server = new ApolloServer({
  schema,
  context: generateContext
})

const startServer = server.start()

const handler: NextApiHandler = async (req, res) => {
  await startServer
  return server.createHandler({
    path: '/api/graphql',
  })(req, res)
}

export default handler

export const config = {
  api: {
    bodyParser: false,
  },
}