import {Express} from 'express';

const apiRoutes = (app: Express) => {
  app.get('/_', (req: any, res: any) => {
    res.send({message: 'test'});
  });
}

export default apiRoutes;
