// server.js
import express from 'express';
import cluster from 'cluster';
import os from 'os';
import app from './app.js';
import cors from 'cors';
const numCpus = os.cpus().length;

app.use(cors());


app.get('/', (req, res) => {
    res.send('Hello World');
});

if (cluster.isPrimary) {
    console.log(`Primary process is running on PID: ${process.pid}`);

    for (let i = 0; i < numCpus; i++) {
        cluster.fork();
    }

    cluster.on('exit', (worker, code, signal) => {
        console.log(`Worker ${worker.process.pid} died`);
        cluster.fork();
    });
} else {
    if (cluster.worker.id === 1) {
        app.listen(3000, () => {
            console.log(`Worker ${process.pid} is running on port 3000...`);
        });
    }

    console.log(`Worker process is running on PID: ${process.pid}`);
}

// import express from 'express';

// const app = express();

// const createServer = () => {
//     app.get('/', (req, res) => {
//         res.send('Hello World');
//     });
//     app.listen(3000, () => {
//         console.log('server is running');
//     });
// };
// createServer();