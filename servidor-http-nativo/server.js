const http = require('node:http');

const PORTA = 3000;

const server = http.createServer((req,res) => {
console.log(`Requisicao recebida! ${req.method} ${req.url}`);

res.statusCode = 200;
res.st.Header('Content-Type', 'text/plain; chaset=utf-8')

res.end("Servidor nativo funcionando");
});

server.listen(PORTA, ()=>{
    console.log(`Servidor Funcionando na porta ${PORTA}`)
})
