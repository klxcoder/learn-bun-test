import { describe, it } from 'bun:test';

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
└─$ bun test src/10.test.ts 
bun test v1.2.4 (fd9a5ea6)

src/10.test.ts:
1st describe: start
1st describe: finish
2nd describe: start
2nd describe: finish
1st it
✓ 1st describe > 1st it [0.04ms]
2nd it
✓ 1st describe > 2nd it [0.03ms]
3th it
✓ 2nd describe > 3th it [0.03ms]
4th it
✓ 2nd describe > 4th it [0.03ms]

 4 pass
 0 fail
Ran 4 tests across 1 files. [25.00ms]

(base) ┌──(klx㉿kali)-[~/learn-bun-test] (main)
└─$ 
 */

/**
 * Conclusion: The order of executions of describe and it are the same as 09.ts
 */