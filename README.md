# bree-ts-demo

Working example of [Bree](https://github.com/breejs/bree) compiling from TypeScript.

> The best job scheduler for Node.js and JavaScript with cron, dates, ms, later, and human-friendly support. Works in Node v12.11.0+, uses worker threads to spawn sandboxed processes, and supports async/await, retries, throttling, concurrency, and cancelable promises (graceful shutdown). Simple, fast, and lightweight.

At time of creating this demo, the TypeScipt examples within the Bree repo were not compiling, and seemed intended to be run with ts-node. This demo does not require ts-node, `dist/index.js` is available to run directly with node.

## Usage

- Requires NodeJS version 12.11.0 or higher
- Install dependencies using `npm ci`
- To build JavaScript output in `/dist` use `npm run build`
- To run example `npm run start`
