function countPrimeNumbers() {
    const isPrime = num => {
        for (let divisor = 2; divisor < num; divisor++) {
            if (num % divisor === 0) return false;
        }
        return num > 1;
    };

    let primeCount = 0;
    for (let number = 2; number < 100; number++) {
        if (isPrime(number)) primeCount++;
    }
    return primeCount;
}

const start = performance.now();
countPrimeNumbers();
const end = performance.now();

console.log(`Execution time of printing countPrimeNumbers was ${end - start} milliseconds.`);
