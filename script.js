const output = document.getElementById("output");

async function getNumbers() {
    return new Promise(resolve => {
        setTimeout(() => {
            resolve([1, 2, 3, 4]);
        }, 500); 
    });
}

async function filterEvenNumbers(numbers) {
    return new Promise(resolve => {
        setTimeout(() => {
            const evenNumbers = numbers.filter(num => num % 2 === 0);
            output.innerText = evenNumbers.join(", "); // Update before resolving
            resolve(evenNumbers);
        }, 1000);
    });
}

async function multiplyByTwo(numbers) {
    return new Promise(resolve => {
        setTimeout(() => {
            const multipliedNumbers = numbers.map(num => num * 2);
            output.innerText = multipliedNumbers.join(", "); // Update before resolving
            resolve(multipliedNumbers);
        }, 2000);
    });
}

async function processNumbers() {
    const numbers = await getNumbers();
    const evens = await filterEvenNumbers(numbers);
    await multiplyByTwo(evens);
}

document.addEventListener("DOMContentLoaded", processNumbers);
