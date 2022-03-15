import * as path from 'path';
import Bree from 'bree';

const bree = new Bree({
  root: path.join(__dirname, 'jobs'),
  jobs: [
    {
      name: 'hello-world',
      path: '',
      timeout: false,
      interval: '2s'
    }
  ],
});

bree.start();
