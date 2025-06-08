import {
  afterAll,
  afterEach,
  beforeAll,
  beforeEach,
  describe,
  it,
} from 'bun:test';

describe('Database1', () => {
  console.log('Database1');
  beforeAll(() => {
    console.log('Database1 * beforeAll');
  });
  afterAll(() => {
    console.log('Database1 * afterAll');
  });
  beforeEach(() => {
    console.log('Database1 * beforeEach');
  });
  afterEach(() => {
    console.log('Database1 * afterEach');
  });

  describe('lang', () => {
    console.log('Database1 * lang');
    beforeAll(() => {
      console.log('Database1 * lang * beforeAll');
    });
    afterAll(() => {
      console.log('Database1 * lang * afterAll');
    });
    beforeEach(() => {
      console.log('Database1 * lang * beforeEach');
    });
    afterEach(() => {
      console.log('Database1 * lang * afterEach');
    });
    it('createLang', () => {
      console.log('Database1 * lang * createLang');
    });
    it('readLangs', () => {
      console.log('Database1 * lang * readLangs');
    });
  });
  describe('group', () => {
    console.log('Database1 * group');
    beforeAll(() => {
      console.log('Database1 * group * beforeAll');
    });
    afterAll(() => {
      console.log('Database1 * group * afterAll');
    });
    beforeEach(() => {
      console.log('Database1 * group * beforeEach');
    });
    afterEach(() => {
      console.log('Database1 * group * afterEach');
    });
    it('createGroup', () => {
      console.log('Database1 * group * createGroup');
    });
    it('readGroups', () => {
      console.log('Database1 * group * readGroups');
    });
  });
  describe('card', () => {
    console.log('Database1 * card');
    beforeAll(() => {
      console.log('Database1 * card * beforeAll');
    });
    afterAll(() => {
      console.log('Database1 * card * afterAll');
    });
    beforeEach(() => {
      console.log('Database1 * card * beforeEach');
    });
    afterEach(() => {
      console.log('Database1 * card * afterEach');
    });
    it('createCard', () => {
      console.log('Database1 * card * createCard');
    });
    it('readCards', () => {
      console.log('Database1 * card * readCards');
    });
  });
});

describe('Database2', () => {
  console.log('Database2');
  beforeAll(() => {
    console.log('Database2 * beforeAll');
  });
  afterAll(() => {
    console.log('Database2 * afterAll');
  });
  beforeEach(() => {
    console.log('Database2 * beforeEach');
  });
  afterEach(() => {
    console.log('Database2 * afterEach');
  });

  describe('lang', () => {
    console.log('Database2 * lang');
    beforeAll(() => {
      console.log('Database2 * lang * beforeAll');
    });
    afterAll(() => {
      console.log('Database2 * lang * afterAll');
    });
    beforeEach(() => {
      console.log('Database2 * lang * beforeEach');
    });
    afterEach(() => {
      console.log('Database2 * lang * afterEach');
    });
    it('createLang', () => {
      console.log('Database2 * lang * createLang');
    });
    it('readLangs', () => {
      console.log('Database2 * lang * readLangs');
    });
  });
  describe('group', () => {
    console.log('Database2 * group');
    beforeAll(() => {
      console.log('Database2 * group * beforeAll');
    });
    afterAll(() => {
      console.log('Database2 * group * afterAll');
    });
    beforeEach(() => {
      console.log('Database2 * group * beforeEach');
    });
    afterEach(() => {
      console.log('Database2 * group * afterEach');
    });
    it('createGroup', () => {
      console.log('Database2 * group * createGroup');
    });
    it('readGroups', () => {
      console.log('Database2 * group * readGroups');
    });
  });
  describe('card', () => {
    console.log('Database2 * card');
    beforeAll(() => {
      console.log('Database2 * card * beforeAll');
    });
    afterAll(() => {
      console.log('Database2 * card * afterAll');
    });
    beforeEach(() => {
      console.log('Database2 * card * beforeEach');
    });
    afterEach(() => {
      console.log('Database2 * card * afterEach');
    });
    it('createCard', () => {
      console.log('Database2 * card * createCard');
    });
    it('readCards', () => {
      console.log('Database2 * card * readCards');
    });
  });
});