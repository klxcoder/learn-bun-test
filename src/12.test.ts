import {
  afterAll,
  afterEach,
  beforeAll,
  beforeEach,
  describe,
  it,
} from 'bun:test';

describe('Database', () => {
  describe('lang', () => {
    beforeAll(() => {
      console.log('beforeAll in lang');
    });
    afterAll(() => {
      console.log('afterAll in lang');
    });
    beforeEach(() => {
      console.log('------beforeEach in lang');
    });
    afterEach(() => {
      console.log('------afterEach in lang');
    });
    it('createLang', () => {
    });
    it('readLangs', () => {
    });
  });
  describe('group', () => {
    beforeAll(() => {
      console.log('beforeAll in group');
    });
    afterAll(() => {
      console.log('afterAll in group');
    });
    beforeEach(() => {
      console.log('------beforeEach in group');
    });
    afterEach(() => {
      console.log('------afterEach in group');
    });
    it('createGroup', () => {
    });
    it('readGroups', () => {
    });
  });
});

/**
(base) ┌──(klx㉿kali)-[~/learn-bun-test] (main)
└─$ bun test src/12.test.ts 
bun test v1.2.4 (fd9a5ea6)

src/12.test.ts:
beforeAll in lang
beforeAll in group
------beforeEach in lang
✓ Database > lang > createLang
------afterEach in lang
------beforeEach in lang
✓ Database > lang > readLangs
------afterEach in lang
afterAll in lang
------beforeEach in group
✓ Database > group > createGroup
------afterEach in group
------beforeEach in group
✓ Database > group > readGroups
------afterEach in group
afterAll in group

 4 pass
 0 fail
Ran 4 tests across 1 files. [12.00ms]

(base) ┌──(klx㉿kali)-[~/learn-bun-test] (main)
└─$
 */

/**
 * Conclusion: The orders of beforeAll and afterAll can be weird, strange
 */