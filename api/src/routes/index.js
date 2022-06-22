const express = require('express');
// Importar todos los routers;
// Ejemplo: const authRouter = require('./auth.js');
const videogameRoutes = require('./middlewares/videogame');
const genresRoutes = require('./middlewares/genres');


const routes = express();
// Configurar los routers
// Ejemplo: router.use('/auth', authRouter);
routes.use(express.json())
routes.use('/videogames', videogameRoutes);
routes.use('/genres', genresRoutes);

module.exports = routes;
