/**
 * 快速排序
 * 快速排序算法是原地排序算法，不是稳定的排序算法，时间复杂度最 O(nlogn)，空间复杂度是 O(n)
 * @param {Array} arr
 */
function quickSort (arr) {
  const length = arr.length

  if (length <= 1) return arr

  const pivot = arr[0]
  const lesser = []
  const greater = []

  for (let i = 1; i < length; i++) {
    if (arr[i] < pivot) {
      lesser.push(arr[i])
    } else {
      greater.push(arr[i])
    }
  }

  return quickSort(lesser).concat([pivot], quickSort(greater))
}

let arr1 = [9, 5, 2, 7]
let arr2 = [1, 3, 1, 4, 7, 7, 5, 8, 9, 9, 1]

console.log(quickSort(arr1)) // [2, 5, 7, 9]
console.log(quickSort(arr2)) // [1, 1, 1, 3, 4, 5, 7, 7, 8, 9, 9]