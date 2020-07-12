/**
 * 选择排序
 * 选择排序算法是原地排序算法，是稳定的排序算法，时间复杂度最好情况是 O(n^2)，最坏情况是 O(n^2)
 * @param {Array} arr
 */
function selectionSort(arr) {
  for (let i = 0; i < arr.length - 1; i++) {
    let min = i
    for (let j = i + 1; j < arr.length; j++) {
      if (arr[j] < arr[min]) {
        min = j
      }
    }

    if (min != i) {
      [arr[min], arr[i]] = [arr[i], arr[min]]
    }
  }

  return arr
}

let arr1 = [9, 5, 2, 7]
let arr2 = [1, 3, 1, 4, 7, 7, 5, 8, 9, 9, 1]

console.log(selectionSort(arr1)) // [2, 5, 7, 9]
console.log(selectionSort(arr2)) // [1, 1, 1, 3, 4, 5, 7, 7, 8, 9, 9]