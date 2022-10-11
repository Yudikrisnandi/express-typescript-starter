import express, { Express, Request, Response } from 'express';
import dotenv from 'dotenv';

const app: Express = express();
const port  =  process.env.PORT || 5000;

app.get('/', (req: Request, res: Response) => {
  res.send('typescript server run...')
}) 

app.listen(port, () => console.log(`app listen on ${port}`))

