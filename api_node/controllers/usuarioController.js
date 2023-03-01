const connection = require("../config/db");

// Lista todos os usuários
const index = (req, res) => {
  const sql = "SELECT * FROM usuarios";
  connection.query(sql, (err, results) => {
    if (err) throw err;
    res.json(results);
  });
};

// Busca um usuário por ID
const show = (req, res) => {
  const { id } = req.params;
  const sql = `SELECT * FROM usuarios WHERE id = ${id}`;
  connection.query(sql, (err, results) => {
    if (err) throw err;
    if (results.length === 0) {
      res.status(404).json({ message: "Usuário não encontrado" });
    } else {
      res.json(results[0]);
    }
  });
};

// Cria um novo usuário
const store = (req, res) => {
  const { nome, email, senha } = req.body;
  const sql = `INSERT INTO usuarios (nome, email, senha) VALUES ('${nome}', '${email}', '${senha}')`;
  connection.query(sql, (err, result) => {
    if (err) throw err;
    res
      .status(201)
      .json({ message: "Usuário criado com sucesso", id: result.insertId });
  });
};

// Atualiza um usuário existente
const update = (req, res) => {
  const { id } = req.params;
  const { nome, email, senha } = req.body;
  const sql = `UPDATE usuarios SET nome = '${nome}', email = '${email}', senha = '${senha}' WHERE id = ${id}`;
  connection.query(sql, (err, result) => {
    if (err) throw err;
    if (result.affectedRows === 0) {
      res.status(404).json({ message: "Usuário não encontrado" });
    } else {
      res.json({ message: "Usuário atualizado com sucesso" });
    }
  });
};

// Exclui um usuário
const destroy = (req, res) => {
  const { id } = req.params;
  const sql = `DELETE FROM usuarios WHERE id = ${id}`;
  connection.query(sql, (err, result) => {
    if (err) throw err;
    if (result.affectedRows === 0) {
      res.status(404).json({ message: "Usuário não encontrado" });
    } else {
      res.json({ message: "Usuário excluído com sucesso" });
    }
  });
};

module.exports = {
  index,
  show,
  store,
  update,
  destroy,
};
