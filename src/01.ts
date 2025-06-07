const normalFunction = () => {
  console.log('normalFunction');
  return 'normalFunction ok';
}

const value = await normalFunction();
console.log(value);

/**
 * Although normalFunction was not defined with async,
 * You still can await it.
 */