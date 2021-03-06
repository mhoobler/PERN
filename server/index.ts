import express from 'express';
import path from 'path';
const PORT = 3001;
const app = express();

if(process.env.NODE_ENV === 'production'){
  app.use(express.static(path.resolve(__dirname, "../../client/build")));
}

import apiRoutes from './routes/api';
apiRoutes(app);

if(process.env.NODE_ENV === 'production'){
  app.get('/', (req: any, res: any) => {
    res.sendFile(path.resolve(__dirname, '../../client/build/index.html'));
  })
} else { 
  app.get('*', (req: any, res: any) => {
    res.send({message: 'test'});
  });
}

app.listen(PORT, () => {
  console.log('server listening');
});
