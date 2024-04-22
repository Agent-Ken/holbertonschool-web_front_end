function countPrimeNumbers() {
    function isPrime(num) {
        for (let i = 2; i < num; i++) {
            if (num % i === 0) return false;
        }
        return num > 1;
    }

    let count = 0;
    for (let i = 2; i < 100; i++) {
        if (isPrime(i)) count++;
    }
    return count;
}

const startTime = performance.now();

setTimeout(() => {
    for (let i = 0; i < 100; i++) {
        countPrimeNumbers();
    }
    const terminateTime = performance.now();
    console.log(
        `Execution time of calculating prime numbers 100 times was ${terminateTime - startTime} milliseconds.`
    );
}, 0);
