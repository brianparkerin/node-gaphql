export const typeDefs = `
  type Query {
    ping: String!
    horses: [Horse!]!
    sellers: [Seller!]!
    reviews: [Review!]!
  }

  type Horse {
    id: ID!
    reproductor: String!
    seller: Seller!
    reviews: [Review!]!
  }

  type Seller {
    id: ID!
    name: String!
    horses: [Horse!]!
  }

  type Review {
    id: ID!
    text: String!
    horse: Horse!
  }

`;
