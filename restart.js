// restart.js
import {spawn} from 'child_process';
// const { spawn } = require('child_process');

function startServer() {
  const serverProcess = spawn('node', ['./dist/src/server'], {
    stdio: 'inherit', // This ensures that the child process shares the same console as the parent
  });

  serverProcess.on('exit', (code, signal) => {
    if (code === 2) {
      console.log('Server exited gracefully.');
    } else {
      console.error(`Server process exited with code ${code} and signal ${signal}. Restarting...`);
      startServer(); // Restart the server
    }
  });
}

startServer();
