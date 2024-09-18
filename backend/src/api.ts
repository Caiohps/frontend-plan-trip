import express from 'express';
import { router } from './routes';
import{ config } from 'dotenv';
import cors from 'cors';

config();

const app = express();
app.use(cors());
app.use(express.json());

app.use('/api', router);

const PORT = process.env.APPLICATION_PORT_PROVIDER || 3001;

app.listen(PORT, async () => {
    console.info({ apiServer: `started at port: ${PORT}`})
});