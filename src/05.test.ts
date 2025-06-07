import { describe } from 'bun:test'

function sleep(ms: number): Promise<void> {
  return new Promise(resolve => setTimeout(resolve, ms));
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
└─$ bun test src/05.test.ts
bun test v1.2.4 (fd9a5ea6)

src/05.test.ts:
start first describe
done first describe
start second describe
done second describe

 0 pass
 0 fail
Ran 0 tests across 1 files. [3.01s]

(base) ┌──(klx㉿kali)-[~/learn-bun-test] (main)
└─$ 
 */

/**
 * Conclusion: Test runners (bun, jest, mocha, ...) process each describe block sequentially, waiting for the async setup in each to complete before moving on to the next. Therefore, even with async functions, the order of execution is maintained, leading to the first describe finishing entirely before the second one starts.
 */

/**
 * Link: https://huggingface.co/chat/conversation/68447df48de3a9199145559f
 */