import express, { Request, Response, Application } from 'express';

export const app: Application = express();
const port = process.env.SERVER_PORT || 8080;

// default route
app.get('/', (req: Request, res: Response) => {
  console.log(req.method);
  res.send('Hello world!');
});

// start the express server
app.listen(port, () => {
  console.log(`server started at http://localhost:${port}`);
});
