const mysql = require("mysql2");

// conexão com o banco de dados
const connection = mysql.createConnection({
  host: "localhost",
  user: "root",
  password: "elias",
  database: "filmes",
});

// função para listar todos os filmes
exports.index = (req, res) => {
  connection.query("SELECT * FROM filmes", (err, results) => {
    if (err) {
      res.status(500).send("Erro ao buscar filmes");
    } else {
      res.status(200).json(results);
    }
  });
};

// função para buscar um filme pelo id
exports.show = (req, res) => {
  const id = req.params.id;
  connection.query(
    "SELECT * FROM filmes WHERE id = ?",
    [id],
    (err, results) => {
      if (err) {
        res.status(500).send("Erro ao buscar filme");
      } else if (results.length === 0) {
        res.status(404).send("Filme não encontrado");
      } else {
        res.status(200).json(results[0]);
      }
    }
  );
};

// função para criar um novo filme
exports.store = (req, res) => {
  const { titulo, diretor, genero } = req.body;
  connection.query(
    "INSERT INTO filmes (titulo, diretor, genero) VALUES (?, ?, ?)",
    [titulo, diretor, genero],
    (err, results) => {
      if (err) {
        res.status(500).send("Erro ao criar filme");
      } else {
        res.status(201).send("Filme criado com sucesso");
      }
    }
  );
};

// função para atualizar um filme
exports.update = (req, res) => {
  const id = req.params.id;
  const { titulo, diretor, genero } = req.body;
  connection.query(
    "UPDATE filmes SET titulo = ?, diretor = ?, genero = ? WHERE id = ?",
    [titulo, diretor, genero, id],
    (err, results) => {
      if (err) {
        res.status(500).send("Erro ao atualizar filme");
      } else if (results.affectedRows === 0) {
        res.status(404).send("Filme não encontrado");
      } else {
        res.status(200).send("Filme atualizado com sucesso");
      }
    }
  );
};

// função para deletar um filme
exports.destroy = (req, res) => {
  const id = req.params.id;
  connection.query("DELETE FROM filmes WHERE id = ?", [id], (err, results) => {
    if (err) {
      res.status(500).send("Erro ao deletar filme");
    } else if (results.affectedRows === 0) {
      res.status(404).send("Filme não encontrado");
    } else {
      res.status(200).send("Filme deletado com sucesso");
    }
  });
};
