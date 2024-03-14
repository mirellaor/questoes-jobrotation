function fibonacci(num) {
    let a = 0;
    let b = 1;


    while (b < num) {
        let c = b;
        b = a + b;
        a = c;
    }

    return b === num;
}

const numVerif = 5;

if (fibonacci(numVerif)) {
    console.log(`O número ${numVerif} pertence a sequencia de fibonacci.`);
} else {
    console.log(`O número ${numVerif} não pertence a sequencia de fibonacci.`);
}

//O número 5 pertence a sequencia de fibonacci.