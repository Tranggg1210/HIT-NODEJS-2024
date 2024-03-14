// Câu 3: Chuyển mảng thành đối tượng.

// Input:
// const hit14 = ["H", "I", "T", 1, 4]

// Output:
// const result = {
// 	key1: "H",
// 	key2: "I",
// 	key3: "T",
// 	key4: 1,
// 	key5: 4
// }

// # đối tượng nhiều thuộc tính hơn thì tăng số sau key

// solution 1
const arrayToObject_W1 = arr => {
    if (!Array.isArray(arr)) return undefined;

    const result = {};
    arr.forEach((value, index) => {
        result[`key${index + 1}`] = value;
    })

    return result;
}

// solution 2
const arrayToObject_W2 = arr => {
    if (!Array.isArray(arr)) return undefined;

    const mapArr = arr.map((x, index) => `key${index + 1}-${x}`).join('-').split("-");
    const result = {};

    for (let i = 0; i < mapArr.length; i += 2) {
        result[mapArr[i]] = mapArr[i + 1];
    }

    return result;
}


const hit14 = ["H", "I", "T", 1, 4]
console.log(arrayToObject_W1(hit14));
console.log(arrayToObject_W2(hit14));