import * as express from 'express';

const port = 3000;
const app = express();

app.get('/', (req, res) => {
    res.send('Hello World pra limpar da maldição');
});

app.listen(port, () => {
    console.log(`Servidor iniciado na porta ${port}`);
});

