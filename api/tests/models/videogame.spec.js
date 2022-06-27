const { Videogame, conn } = require('../../src/db.js');
const { expect } = require('chai');

describe('Modelo Videogame', () => {
  before(() => conn.authenticate()
    .catch((err) => {
      console.error('No se puede conectar a la base de datos: ', err);
    }));
  describe('Validaciones', () => {
    beforeEach(() => Videogame.sync({ force: true }));
    describe('name', () => {
      it('Debe arrojar un error si el name es null', (done) => {
        Videogame.create({})
          .then(() => done(new Error('Requiere un nombre válido')))
          .catch(() => done());
      });
      it('Debería funcionar cuando recibe un nombre válido', () => {
        Videogame.create({ name: 'Feli' });
      });
    });
  });
});
