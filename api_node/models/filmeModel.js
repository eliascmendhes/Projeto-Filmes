const connection = require("../config/database");

const Filme = {};

Filme.getAll = (callback) => {
  connection.query("SELECT * FROM filmes", callback);
};

Filme.getById = (id, callback) => {
  connection.query("SELECT * FROM filmes WHERE id = ?", [id], callback);
};

Filme.create = (filme, callback) => {
  connection.query("INSERT INTO filmes SET ?", filme, callback);
};

Filme.update = (id, filme, callback) => {
  connection.query("UPDATE filmes SET ? WHERE id = ?", [filme, id], callback);
};

Filme.delete = (id, callback) => {
  connection.query("DELETE FROM filmes WHERE id = ?", [id], callback);
};

module.exports = Filme;
