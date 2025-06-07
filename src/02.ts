const describe = async (title: string, fn: () => void) => {
  console.log(title);
  await fn();
}

describe('first describe', () => {
  console.log('This is normal function (not be defined with async)');
});

describe('second describe', async () => {
  console.log('This is async function');
});

/**
 * conclusion:
 *  + fn: () => void (not Promise<void>)
 *  + You can await fn();
 *  + And then pass fn as normal or async function
 */