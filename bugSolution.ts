function combine(arr1: number[], arr2: number[]): number[] {
  //Check if the input is an array of numbers
  if (!Array.isArray(arr1) || !Array.isArray(arr2) || !arr1.every(Number.isFinite) || !arr2.every(Number.isFinite)) {
    throw new Error("Invalid input: Both parameters must be arrays of numbers.");
  }
  return [...arr1, ...arr2];
}

const result = combine([1, 2, 3], [4, 5, 6]);
console.log(result); // Output: [1, 2, 3, 4, 5, 6]

//Example of error handling
try {
  const result2 = combine([1, 2, 'a' as any], [4, 5, 6]);
  console.log(result2);
} catch (error) {
  console.error(error.message); //Output: Invalid input: Both parameters must be arrays of numbers
}