const { Pool, Client } = require("pg");
var randomstring = require("randomstring");


const pool = new Pool({
  user: "postgresadmin",
  host: "10.152.183.242",
  database: "microk8s",
  password: "admin123",
  port: "5432"
});

pool.query(
    `INSERT INTO users(name, level, blocked)VALUES('${randomstring.generate({length: 15})}', ${Math.floor(Math.random()*10,2)}, false);`,
    (err, res) => {
      console.log(err, res);
      pool.end();
    }
);