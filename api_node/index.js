const express = require("express");
const mysql = require("mysql2");
const bodyParser = require("body-parser");
const cors = require("cors");

const app = express();
const port = 3000;

app.use(bodyParser.json());
app.use(bodyParser.urlencoded({ extended: true }));
app.use(cors());

// Conexão com o banco de dados
const connection = mysql.createConnection({
  host: "localhost",
  user: "root",
  password: "elias",
  database: "filmes",
});

// Testando a conexão
connection.connect((err) => {
  if (err) {
    console.error("Erro ao conectar ao banco de dados:", err);
  } else {
    console.log("Conexão com o banco de dados realizada com sucesso!");
  }
});

// Rotas
const filmeRoutes = require("./routers/filmeRoutes");
const usuarioRoutes = require("./routers/usuarioRoutes");
app.use(filmeRoutes);
app.use(usuarioRoutes);

// Iniciando o servidor
app.listen(port, () => {
  console.log(`Servidor rodando na porta ${port}`);
});
