/* eslint-disable import/no-extraneous-dependencies */
const { expect } = require('chai');
const session = require('supertest-session');
const app = require('../../src/app.js');
const { Videogame, conn } = require('../../src/db.js');

const agent = session(app);
const videogame = {
  name: 'Feli',
  description: "lorem",
  platforms: ["PS Vita", "PS3"],
};

describe('Rutas Videogames', () => {
  before(() => conn.authenticate()
  .catch((err) => {
    console.error('No se puede conectar a la base de datos: ', err);
  }));
  beforeEach(() => Videogame.sync({ force: true })
    .then(() => Videogame.create(videogame)));
  describe('GET /videogames', () => {
    it('Debería obtener un status 200', () =>
      agent.get('/videogames').expect(200)
    );
  });
});
