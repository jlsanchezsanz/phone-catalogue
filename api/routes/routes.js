const phonesRoutes = require('./phones');

const appRouter = (app, fs) => {
  app.get('/', (req, res) => {
    res.send('Welcome to the development api-server');
  });

  phonesRoutes(app, fs);
};

module.exports = appRouter;
