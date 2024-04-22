function countPrimeNumbers() {
    let count = 0;

    function isPrime(num) {
        for (let i = 2; i < num; i++) {
            if (num % i === 0) return false;
        }
        return num > 1;
    }

    for (let number = 2; number < 100; number++) {
        if (isPrime(number)) count++;
    }

    return count;
}

const startTime = performance.now();

let iterations = 0;
do {
    countPrimeNumbers();
    iterations++;
} while (iterations < 100);

const terminateTime = performance.now();

console.log(
    `Execution time of calculating prime numbers 100 times was ${terminateTime - startTime} milliseconds.`
);
