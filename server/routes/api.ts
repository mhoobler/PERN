import { 
  Express,
  Request as Req,
  Response as Res
} from "express";

import db from "../db";

db.connect();

const apiRoutes = (app: Express) => {
  app.get("/_", (req: Req, res: Res) => {
    res.send({ message: "test" });
  });

  app.get("/_todos", async (req: Req, res: Res) => {
    try {
      const todos = await db.query("SELECT * FROM todo");

      res.send(todos);
    } catch (err) {
      console.log(err);
    }
  });

  app.post("/_todos", async (req: Req, res: Res) => {
    try {
      const {name, description, tags} = req.body;

      const newTodo = await db.query(
        'INSERT INTO todo (name, description, tags) VALUES($1, $2, $3) RETURNING *',
        [name, description, tags]
      );

      res.send(newTodo.rows[0]);
    } catch (err) {
      console.log(err);
    }
  });
};

export default apiRoutes;
