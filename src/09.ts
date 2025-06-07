const queue: { title: string; fn: () => void }[] = [];

function describe(title: string, fn: () => void): void {
  queue.push({ title, fn });
}

function it(title: string, fn: () => void): void {
  queue.push({ title, fn });
}

// Auto-run tests after registration
queueMicrotask(async () => {
  for (const { title, fn } of queue) {
    await fn();
  }
});

// ------------------------------------

describe('1st describe', async () => {
  console.log('1st describe: start');
  it('1st it', async () => {
    console.log('1st it');
  });
  it('2nd it', async () => {
    console.log('2nd it');
  });
  console.log('1st describe: finish');
});

describe('2nd describe', async () => {
  console.log('2nd describe: start');
  it('3th it', async () => {
    console.log('3th it');
  });
  it('4th it', async () => {
    console.log('4th it');
  });
  console.log('2nd describe: finish');
});

/**
(base) ┌──(klx㉿kali)-[~/learn-bun-test] (main)
└─$ bun run src/09.ts
1st describe: start
1st describe: finish
2nd describe: start
2nd describe: finish
1st it
2nd it
3th it
4th it

(base) ┌──(klx㉿kali)-[~/learn-bun-test] (main)
└─$ 
 */