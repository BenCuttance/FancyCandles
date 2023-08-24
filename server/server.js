const express = require('express');
const { ApolloServer } = require('apollo-server-express');
const path = require('path');
const { authMiddleware } = require('./utils/auth');

const { typeDefs, resolvers } = require('./schemas');
const db = require('./config/connection');

const PORT = process.env.PORT || 3001;
const app = express();
const server = new ApolloServer({
  typeDefs,
  resolvers,
  context: authMiddleware,
});

app.use(express.urlencoded({ extended: false }));
app.use(express.json());

// Serve up static assets
app.use('/images', express.static(path.join(__dirname, '../client/images')));

if (process.env.NODE_ENV === 'production') {
  app.use(express.static(path.join(__dirname, '../client/build')));
}

app.get('/', (req, res) => {
  res.sendFile(path.join(__dirname, '../client/build/index.html'));
});


// Create a new instance of an Apollo server with the GraphQL schema
const startApolloServer = async () => {
  await server.start();
  server.applyMiddleware({ app });
  
  db.once('open', () => {
    app.listen(PORT, () => {
      console.log(`API server running on port ${PORT}!`);
      console.log(`Use GraphQL at http://localhost:${PORT}${server.graphqlPath}`);
    })
  })
  };


  // const path = require('path');
  // const express = require('express');
  // const helmet = require('helmet');
  // const app = express();
  	
//   app.use(
//   // [
//   helmet.contentSecurityPolicy({
// directives: {
//  defaultSrc: ["'self'"],
//  connectSrc: ["'self'", 'https://api.stripe.com'],
//   frameSrc: ["'self'", 'https://js.stripe.com'],
//  // childSrc: ["'self'", 'https://js.stripe.com'],
//   scriptSrc: ["'self'", 'https://js.stripe.com', "'unsafe-inline'"],
//   styleSrc: ['https://js.stripe.com'],
//   fontSrc: ['https://js.stripe.com'],
//    imgSrc: ["'self'", 'https://js.stripe.com'],
//      }
//     })
//   20	  // helmet.noCache()
//   21	// ]
//   22	);
//   23	
//   24	app.use((req, res, next) => {
//   25	  console.log('CSP', res.get('Content-Security-Policy'));
//   26	  next();
//   27	});
//   28	
//   29	
//   30	// app.use(express.static('public', {
//   31	//   etag: false, 
//   32	//   maxage: '0'
//   33	// }));
//   34	
//   35	app.use('/', (req, res) => {
//   36	  res.sendFile(path.join(__dirname, 'public/index.html'));
//   37	});
//   38	
//   39	app.listen(5000, () => {
//   40	  console.log('listening');
//   41	});






  
// Call the async function to start the server
  startApolloServer();
