/**
 * 希尔排序 - 动态计算间隔序列
 * @param {Array} arr
 */
function shellSort (arr) {
  let interval = 1

  while (interval < arr.length / 3) {
    interval = interval * 3 + 1
  }

  while (interval > 0) {
    for (let outer = interval; outer < arr.length; outer++) {
      const value = arr[outer]
      let inner = outer
      while (inner > interval - 1 && arr[inner - interval] >= value) {
        arr[inner] = arr[inner - interval]
        inner = inner - interval
      }
      arr[inner] = value
    }
    interval = (interval - 1) / 3
  }
  return arr
}

let arr1 = [9, 5, 2, 7]
let arr2 = [1, 3, 1, 4, 7, 7, 5, 8, 9, 9, 1]

console.log(shellSort(arr1)) // [2, 5, 7, 9]
console.log(shellSort(arr2)) // [1, 1, 1, 3, 4, 5, 7, 7, 8, 9, 9]