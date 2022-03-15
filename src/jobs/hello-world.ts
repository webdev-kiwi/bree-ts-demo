import { parentPort } from 'worker_threads';
import process from 'process';

console.log('Hello World!');

parentPort ? parentPort.postMessage('done') : process.exit(0);

