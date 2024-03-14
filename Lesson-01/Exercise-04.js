// Câu 4: Kiểm tra xem một đối tượng có chứa tất cả các key đã cho không?

// Input:
// const club = {
//     name: "HIT HaUI",
//     age: 14,
//     country: "VI"
// };
// const keysToCheck = ["name", "age", "country"];

// Output: true


// solution 1
const containsAllKeys_W1 = (obj, arr) => {
    if (typeof obj !== 'object' || !(Array.isArray(arr))) return null;

    if (Object.keys(obj).length !== arr.length) return false;
    for (const key in obj) {
        if (!(arr.includes(key)))
            return false;
    }


    return true;
}

// solution 2
const containsAllKeys_W2 = (obj, arr) => {
    if (typeof obj !== 'object' || !(Array.isArray(arr))) return null;

    return JSON.stringify(Object.keys(obj).sort()) === JSON.stringify(arr.sort());
}

// solution 3
const containsAllKeys_W3 = (obj, arr) => {
    if (typeof obj !== 'object' || !(Array.isArray(arr))) return null;

    if (Object.keys(obj).length !== arr.length) return false;

    for (let i = 0; i < arr.length; i++) {
        if (!(arr[i] in obj)) return false;
    }

    return true;
}

const club = {
    name: "HIT HaUI",
    age: 14,
    country: "VI"
};
const keysToCheck = ["name", "age", "country"];

console.log(containsAllKeys_W1(club, keysToCheck));
console.log(containsAllKeys_W2(club, keysToCheck));
console.log(containsAllKeys_W3(club, keysToCheck));