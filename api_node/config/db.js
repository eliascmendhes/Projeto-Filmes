const mysql = require("mysql2");

const connection = mysql.createConnection({
  host: "localhost",
  user: "root",
  password: "elias",
  database: "filmes",
});

connection.connect((err) => {
  if (err) {
    console.log("Erro ao conectar ao banco de dados:", err);
    return;
  }

  console.log("Conexão com o banco de dados estabelecida!");
});

module.exports = connection;
