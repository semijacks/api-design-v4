import express, { Express, Request, Response } from 'express';

const app: Express = express();

app.get('/', (req: Request, res: Response) => {
  console.log('Hello from express');
  res.status(200).send({ message: 'Hello from express' });
});

export default app;
