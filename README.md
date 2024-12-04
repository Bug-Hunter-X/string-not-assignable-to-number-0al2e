# Type 'string' is not assignable to type 'number'

This repository demonstrates a common TypeScript error: assigning a string value to a variable or parameter that's typed as a number.  The error message, "Type 'string' is not assignable to type 'number'," indicates a type mismatch.

## Scenario:

A function expects an array of numbers, but string values are passed to it. This usually happens due to incorrect data handling, or using variables without type checking.

## Reproduction:

The `bug.ts` file shows the erroneous code.  The `combine` function is designed to combine two number arrays, but if it receives unexpected string data, it throws the type error.

## Solution:

The `bugSolution.ts` file demonstrates several possible solutions.  These include:

1. **Strict Type Checking:** Ensuring that the input arrays are of type `number[]` using type guards.
2. **Data Validation:** Checking the array values before combining them, converting them to numbers, or handling invalid data appropriately.
3. **Defensive Programming:** Adding error handling, or using a try-catch block to gracefully handle potential runtime errors.

This example showcases the importance of careful type handling and defensive programming in TypeScript to prevent runtime errors and ensure code reliability.