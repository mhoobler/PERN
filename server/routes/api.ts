import {Express} from 'express';

import db from '../db';

db.connect();

const apiRoutes = (app: Express) => {
  app.get('/_', (req: any, res: any) => {
    res.send({message: 'test'});
  });

  app.get('/_todos', async (req: any, res: any) => {
    try {
      const todos = await db.query('SELECT * FROM todo');

      res.send(todos)
    } catch (err) { console.log(err) } 
  });
}

export default apiRoutes;
