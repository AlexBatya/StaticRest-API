import express from 'express';
import cors from 'cors';
import bodyParser from 'body-parser';
import apiRoutes from './routes';
import config from './config/localhost.json';
import color from 'colors';

const app = express();
const PORT = config.server.PORT;

app.use(cors());
app.use(bodyParser.json());
app.use('/api', apiRoutes);

app.get('/', (req, res) => {
    res.send('Всё тип топ');
});

app.listen(PORT, () => console.log(color.green(`Сервер запущен на порту ${PORT}, батеньки...`)));

