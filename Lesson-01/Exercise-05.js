// Câu 5: Kiểm tra xem một đối tượng có rỗng không?

// Input:
// const cat = { name: "meow", age: 2 };
// Ouput: false

// Input: const dog = {};
// Output: true

// solution 1
const isEmpty_W1 = (obj) => {
    if (typeof obj !== 'object') return undefined;

    return !Object.keys(obj).length;
}

console.log(isEmpty_W1({}));
console.log(isEmpty_W1({ name: "meow", age: 2 }));

// solution 2
const isEmpty_W2 = (obj) => {
    if (typeof obj !== 'object') return undefined;

    let count = 0;
    for (const key in obj) {
        count++;
    }
    return !count;
}

console.log(isEmpty_W2({}));
console.log(isEmpty_W2({ name: "meow", age: 2 }));

// solution 3
const isEmpty_W3 = (obj) => {
    if (typeof obj !== 'object') return undefined;

    return !(JSON.stringify(obj).length - 2);
}

console.log(isEmpty_W3({}));
console.log(isEmpty_W3({ name: "meow", age: 2 }));