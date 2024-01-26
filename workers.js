// Worker 1: Multiply operation
function multiplyWorker() {
  self.onmessage = function(event) {
    const { operation, operands } = event.data;

    if (operation === 'multiply') {
      const result = operands.reduce((acc, val) => acc * val, 1);
      self.postMessage(result);
    }
  };
}

// Worker 2: Add operation
function addWorker() {
  self.onmessage = function(event) {
    const { operation, operands } = event.data;

    if (operation === 'add') {
      const result = operands.reduce((acc, val) => acc + val, 0);
      self.postMessage(result);
    }
  };
}

// Start the workers
multiplyWorker();
addWorker();
