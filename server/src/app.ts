import express from 'express';
import { Response } from 'express';

const app = express();
const PORT = 4000;

app.get('/', (_, res: Response) => {
  res.send('Application works!');
});

app.listen(4000, () => console.log(`Server is listening on port http://localhost:${PORT}`));
