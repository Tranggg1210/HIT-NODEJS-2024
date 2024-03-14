// Câu 2: Tìm phần tử lớn thứ 2 của mảng.
// Input:const numbers = [2, -7, 9, 5, 2, 0, 5]
//Output: [5]


// solution 1
const findSecondMax_W1 = (arr) => {
    if (!Array.isArray(arr)) return undefined;

    const descArr = Array.from(new Set(arr)).sort((a, b) => b - a);

    return descArr[1];
}

// solution 2
const findSecondMax_W2 = (arr) => {
    if (!Array.isArray(arr)) return undefined;

    let max = arr.reduce((max, cur) => max > cur ? max : cur);
    let arrRemovedFirstMax = arr.filter(x => x !== max);
    let secondMax = arrRemovedFirstMax.reduce((max, cur) => max > cur ? max : cur);

    return secondMax;
}

// solution 3
const findSecondMax_W3 = (arr) => {
    if (!Array.isArray(arr)) return undefined;

    let max = arr[0], secondIndex = 0, firstIndex = 0;

    for (let i = 1; i < arr.length; i++) {
        if (arr[i] > max) {
            secondIndex = firstIndex;
            firstIndex = i;
        }
    }

    return arr[secondIndex];
}

const numbers = [2, -7, 9, 5, 2, 0, 5];
console.log(findSecondMax_W1(numbers));
console.log(findSecondMax_W2(numbers));
console.log(findSecondMax_W3(numbers));

