import { describe } from 'bun:test'

describe('first describe', () => {
  console.log('This is normal function (not be defined with async)');
});

describe('second describe', async () => {
  console.log('This is async function');
});

/**
(base) ┌──(klx㉿kali)-[~/learn-bun-test] (main)
└─$ bun test src/02.test.ts      
bun test v1.2.4 (fd9a5ea6)

src/02.test.ts:
This is normal function (not be defined with async)
This is async function

 0 pass
 0 fail
Ran 0 tests across 1 files. [31.00ms]

(base) ┌──(klx㉿kali)-[~/learn-bun-test] (main)
└─$ 
 */

/**
 * Conclusion: describe from bun test can accept both normal and async function
 */