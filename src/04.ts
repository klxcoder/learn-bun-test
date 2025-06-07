function sleep(ms: number): Promise<void> {
  return new Promise(resolve => setTimeout(resolve, ms));
}

// Example usage of the sleep function
async function example() {
  console.log("Sleeping for 2 seconds...");
  await sleep(2000); // Sleep for 2000 milliseconds (2 seconds)
  console.log("Awake now!");
}

example();