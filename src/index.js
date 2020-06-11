// a simple titpical Hello World en NodeJs
//console.log('Hello World!')
import {GraphQLServer} from 'graphql-yoga'
import {typeDefs} from './graphql/typeDefs'
import  {resolvers} from './graphql/resolvers'

console.log('Server is on')

const server = new GraphQLServer({
    typeDefs,
    resolvers
});

server.start({port: 3000}, ({port}) => {
    console.log('server is running', port)
});
