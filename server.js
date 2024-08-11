const jsonServer = require('json-server');
const server = jsonServer.create();
const router = jsonServer.router('db.json');
const middlewares = jsonServer.defaults({ static: false });

const port = process.env.PORT || 3001;

server.use(middlewares);

// Add this before server.use(router)
server.use(jsonServer.rewriter({
  '/api/*': '/$1',
}));

server.use(router);

server.listen(port, () => {
  console.log(`JSON Server is running on port ${port}`);
});