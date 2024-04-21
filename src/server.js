const Hepi = require('@hapi/hapi');
const routes = require('./routes');

const init = async () => {
  const server = Hepi.server({
    port: 9000,
    host: 'localhost',
  });

  server.route(routes);

  await server.start();
  console.log(`Server berjalan pada port ${server.info.uri}`);
};

init();
