function divisors(integer) {
  // Create an array to store the divisors
  const divisors = [];

  // Iterate through the range 2 to integer - 1
  for (let i = 2; i < integer; i++) {
    // Check if integer is divisible by i
    if (integer % i === 0) {
      // If it is, add i to the divisors array
      divisors.push(i);
    }
  }

  // Check if the divisors array is empty
  if (divisors.length === 0) {
    // If it is, return the string "(integer) is prime"
    return `${integer} is prime`;
  } else {
    // Otherwise, return the divisors array
    return divisors;
  }
}
