const jsonServer = require('json-server');
const server = jsonServer.create();
const router = jsonServer.router('data.json');
server.use(jsonServer.bodyParser());
server.use(router);
server.listen(3001, () => {
  console.log('JSON Server is running on port 3001');
});
