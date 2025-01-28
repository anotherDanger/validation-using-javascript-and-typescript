import cluster from "cluster";
import os from 'os';
import express from 'express';
import exp from "constants";

const app = express();
const numCpus = os.cpus().length;

const createServer = () => {
    app.get('/', (req, res) => {
        res.send('Hello World');
    });

    app.listen(3000, () => {
        console.log('Server is runnning.....');
    });
};

if(cluster.isPrimary)
{
    console.log(`Primary process is running on PID: ${process.pid}`);

    for(let i = 0; i < numCpus; i++)
    {
        cluster.fork();
    };

    cluster.on('exit', (worker, code, signal) => {
        console.log(`Worker ${worker.process.pid} died`);
        cluster.fork();
    });
}else{
    createServer();
    console.log(`Worker process is running on PID: ${process.pid}`)
}