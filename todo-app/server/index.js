const express = require("express");
const server = express();
const port = 3000;

const knex = require("knex")({
  client: "mysql",
  connection: {
    host: "localhost",
    user: "developer",
    password: "CODEit!(94",
    database: "todos",
  },
});

server.use(express.json());

server.get("/todos", async (req, res) => {
  const todos = await knex("todos").select("*");
  res.json(todos);
});

server.post("/todos", async (req, res) => {
  const name = req.body.name;
  await knex("todos").insert({
    name: name,
    isCompleted: 0,
  });

  res.json();
});

server.put("/todos/:id", async (req, res) => {
  const id = req.params.id;
  const isCompleted = req.body.isCompleted;

  await knex("todos").where("id", "=", id).update({ isCompleted: isCompleted });
  res.json();
});

server.delete("/todos/:id", async (req, res) => {
  const id = req.params.id;
  await knex("todos").where("id", "=", id).del();
  res.json();
});

server.listen(port, () => {
  console.log(`Example app listening at http://localhost:${port}`);
});
