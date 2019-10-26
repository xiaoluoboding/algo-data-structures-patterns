function insertionSort (arr) {
  if (arr.length === 0) return arr
  // 已排序区间第一个元素
  for (let i = 1; i < arr.length; i++) {
    let maxValue = arr[i]
    let j = i - 1
    for (; j >=0 && (arr[j] > maxValue); j--) {
      // shift the number
      arr[j + 1] = arr[j]
    }

    arr[j + 1] = maxValue
  }
  return arr
}

let arr1 = [9, 5, 2, 7]
let arr2 = [1, 3, 1, 4, 7, 7, 5, 8, 9, 9, 1]

console.log(insertionSort(arr1)) // [2, 5, 7, 9]
console.log(insertionSort(arr2)) // [ 1, 1, 1, 3, 4, 5, 7, 7, 8, 9, 9 ]