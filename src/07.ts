function sleep(ms: number): Promise<void> {
  return new Promise(resolve => setTimeout(resolve, ms))
}

const queue: { title: string; fn: () => void }[] = []

// Collect tests
function describe(title: string, fn: () => void): void {
  queue.push({ title, fn })
}

// Run tests sequentially
async function runTests() {
  for (const { title, fn } of queue) {
    console.log(title)
    await fn();
  }
}

// Add tests to queue
describe('first describe', async () => {
  console.log('start first describe')
  await sleep(2000)
  console.log('done first describe')
})

describe('second describe', async () => {
  console.log('start second describe')
  await sleep(1000)
  console.log('done second describe')
})

// Execute tests
runTests()