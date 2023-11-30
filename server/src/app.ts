import cors from 'cors';
import express from 'express';
import routes from './routes';

const PORT = 4000;

const app = express();

app.use(cors());
app.use(express.json());
app.use(express.urlencoded({ extended: true }));

app.use('/static', routes.static);
app.use('/nft', routes.nft);
app.use('/user', routes.user);

app.listen(4000, () => console.log(`Server is listening on http://localhost:${PORT}/`));
