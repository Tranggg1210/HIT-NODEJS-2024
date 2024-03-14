// Câu 1: Xoá phần tử trùng trong mảng và sắp xếp lại theo chiều giảm dần.
// Input: const numbers = [1, 3, 8, 3, 6, 2, 0, -9, 8];
// Output: [8, 6, 3, 2, 1, 0, -9];

//for i
const removeDuplicatesAndSortDesc_W1 = (arr) => {
    if (!Array.isArray(arr)) return undefined;

    let result = [];
    let isDuplicate = false;
    for (let i = 0; i < arr.length; i++) {
        for (let j = 0; j < result.length; j++) {
            if (arr[i] === result[j]) {
                isDuplicate = true;
                break;
            }
        }
        if (!isDuplicate) result.push(arr[i]);
        isDuplicate = false;
    }

    return result.sort((a, b) => b - a);
}

console.log(removeDuplicatesAndSortDesc_W1([1, 3, 8, 3, 6, 2, 0, -9, 8]));

// for i - but sort first then delete duplicate items
const removeDuplicatesAndSortDesc_W2 = (arr) => {
    if (!Array.isArray(arr)) return undefined;

    let result = arr.sort((a, b) => b - a);
    for (let i = 1; i < arr.length; i++) {
        if (result[i] === result[i - 1])
            result.splice(i, 1);
    }

    return result;
}

console.log(removeDuplicatesAndSortDesc_W2([1, 3, 8, 3, 6, 2, 0, -9, 8]));

// set
const removeDuplicatesAndSortDesc_W3 = (arr) => {
    if (!Array.isArray(arr)) return undefined;

    return Array.from(new Set(arr)).sort((a, b) => b - a);
}
console.log(removeDuplicatesAndSortDesc_W3([1, 3, 8, 3, 6, 2, 0, -9, 8]));

// filter
const removeDuplicatesAndSortDesc_W4 = (arr) => {
    if (!Array.isArray(arr)) return undefined;

    return arr.sort((a, b) => b - a).filter((x, i) => x !== arr[i + 1])
}
console.log(removeDuplicatesAndSortDesc_W4([1, 3, 8, 3, 6, 2, 0, -9, 8]));
