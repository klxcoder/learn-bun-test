function sleep(ms: number): Promise<void> {
  return new Promise(resolve => setTimeout(resolve, ms));
}

const queue: { title: string; fn: () => void }[] = [];

function describe(title: string, fn: () => void): void {
  queue.push({ title, fn });
}

// Auto-run tests after registration
queueMicrotask(async () => {
  for (const { title, fn } of queue) {
    console.log(title);
    await fn();
  }
});

// Test cases (no need to call runTests)
describe('first describe', async () => {
  console.log('start first describe');
  await sleep(2000);
  console.log('done first describe');
});

describe('second describe', async () => {
  console.log('start second describe');
  await sleep(1000);
  console.log('done second describe');
});

/**
 * Conclusion:
 *    + Use queueMicrotask to avoid calling runTests manually.
 *    + Use queueMicrotask to run tests after the module's top-level code finishes
 */