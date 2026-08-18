const http = require('http');

let tarefas = [
    { titulo: 'Estudar Node.js' },
    { titulo: 'Fazer exercícios' },
    { titulo: 'Entregar trabalho' }
];

const server = http.createServer((req, res) => {

    const url = new URL(req.url, `http://${req.headers.host}`);


    if (req.method === 'GET' && url.pathname === '/tarefas/busca') {

        const titulo = url.searchParams.get('titulo');

        const resultado = tarefas.filter(tarefa =>
            tarefa.titulo.toLowerCase().includes(titulo.toLowerCase())
        );

        res.statusCode = 200;
        res.setHeader('Content-Type', 'application/json; charset=utf-8');
        res.end(JSON.stringify(resultado));

    }

   
    else if (req.method === 'DELETE' && url.pathname === '/tarefas') {

        const index = Number(url.searchParams.get('index'));

        if (index >= 0 && index < tarefas.length) {

            tarefas.splice(index, 1);

            res.statusCode = 200;
            res.setHeader('Content-Type', 'application/json; charset=utf-8');
            res.end(JSON.stringify({
                mensagem: 'Tarefa removida'
            }));

        } else {

            res.statusCode = 404;
            res.setHeader('Content-Type', 'text/plain; charset=utf-8');
            res.end('Tarefa não encontrada');
        }
    }

    
    else {
        res.statusCode = 404;
        res.setHeader('Content-Type', 'text/plain; charset=utf-8');
        res.end('Rota não encontrada');
    }
});

server.listen(3000);