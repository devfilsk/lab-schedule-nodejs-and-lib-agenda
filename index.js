const Agenda = require('agenda');

//banco de dados mongo
const agenda = new Agenda({db: {
    address: 'localhost:27017/schedule',
    collection: 'jobs'
}});

//define uma tarefa na agenda
agenda.define('Say Hello', (job, done) => {
    console.log('Helo World');
    done();
});

agenda.define("Segundo teste", (job, done) => {
   console.log("Segunda tarefa criada");
   done(); 
});

//assiste as fedinições da tarefa buscando pela estring e tempo de execução
agenda.on('ready', () => {
    //primeiro parametro tempo de execução da tarefa, segundo parametro o nome da tarefa a ser buscada
    //as tarefas agendadas são buscadas pelas strings de criação
    agenda.every('3 seconds', 'Say Hello');
    
    //testando a segunda tarefa adicionaca na agenda
    agenda.every('6 seconds', 'Segundo teste');
    //inicia ações das tarefas 
    agenda.start();
});