function sleep(ms: number): Promise<void> {
  return new Promise(resolve => setTimeout(resolve, ms));
}

const describe = async (title: string, fn: () => void) => {
  console.log(title);
  await fn();
}

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
(base) ┌──(klx㉿kali)-[~/learn-bun-test] (main)
└─$ bun run src/06.ts
first describe
start first describe
second describe
start second describe
done second describe
done first describe

(base) ┌──(klx㉿kali)-[~/learn-bun-test] (main)
└─$ 
 */

/**
 * Conclusion: The order of the above output does not match the output of describe function in bun test.
 * Need to: Rewrite describe function
 */