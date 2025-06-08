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
  describe('card', () => {
    beforeAll(() => {
      console.log('beforeAll in card');
    });
    afterAll(() => {
      console.log('afterAll in card');
    });
    beforeEach(() => {
      console.log('------beforeEach in card');
    });
    afterEach(() => {
      console.log('------afterEach in card');
    });
    it('createCard', () => {
    });
    it('readCards', () => {
    });
  });
});

/**
(base) ┌──(klx㉿kali)-[~/learn-bun-test] (main)
└─$ bun test src/13.test.ts
bun test v1.2.4 (fd9a5ea6)

src/13.test.ts:

beforeAll in lang
beforeAll in group
beforeAll in card

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

------beforeEach in card
✓ Database > card > createCard
------afterEach in card
------beforeEach in card
✓ Database > card > readCards
------afterEach in card
afterAll in card

 6 pass
 0 fail
Ran 6 tests across 1 files. [14.00ms]

(base) ┌──(klx㉿kali)-[~/learn-bun-test] (main)
└─$ 
 */

/**
 * Conclusion:
 *    - loop in list of describe:
 *      + run beforeAll
 *    - loop in list of describe
 *      - loop in list of it:
 *         + run beforeEach
 *         + run it
 *         + run afterEach
 *      - run afterAll
 */