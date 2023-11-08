import express, { Request, Response, Application } from 'express';

import cors from 'cors';
import fs from 'fs'
export const app: Application = express();
const port = process.env.SERVER_PORT || 8080;
app.use(cors());
// default route
app.get('/', (req: Request, res: Response) => {
  console.log(req.method);
  res.send('Hello world!');
});

app.get('/pictures', (req: Request, res: Response) => {
  console.log(req.method);
  res.send('');
})

app.get('/likes', (req: Request, res: Response) => {
  try {
    const csvFile = fs.createReadStream(`${process.cwd()}/likes.csv`);
    res
      .status(200)
      .setHeader("Content-Type", "text/csv")
      .setHeader("Content-Disposition", `attachment; filename=likes.csv`)
      .send(csvFile);
  } catch (error) {
    res.status(400).json({ error });
  }
});


// start the express server
app.listen(port, () => {
  console.log(`server started at http://localhost:${port}`);
});
