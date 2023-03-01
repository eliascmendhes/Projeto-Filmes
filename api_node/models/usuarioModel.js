const connection = require("../config/database");

const Usuario = {};

Usuario.getAll = (callback) => {
  connection.query("SELECT * FROM usuarios", callback);
};

Usuario.getById = (id, callback) => {
  connection.query("SELECT * FROM usuarios WHERE id = ?", [id], callback);
};

Usuario.getByEmail = (email, callback) => {
  connection.query("SELECT * FROM usuarios WHERE email = ?", [email], callback);
};

Usuario.create = (usuario, callback) => {
  connection.query("INSERT INTO usuarios SET ?", usuario, callback);
};

Usuario.update = (id, usuario, callback) => {
  connection.query(
    "UPDATE usuarios SET ? WHERE id = ?",
    [usuario, id],
    callback
  );
};

Usuario.delete = (id, callback) => {
  connection.query("DELETE FROM usuarios WHERE id = ?", [id], callback);
};

module.exports = Usuario;
