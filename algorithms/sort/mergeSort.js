/**
 * 归并排序，排序合并两个数组
 * 归并排序算法不是原地排序算法，是稳定的排序算法，时间复杂度最 O(nlogn)，空间复杂度是 O(n)
 * @param {Array} arr1 
 * @param {Array} arr2
 * @return {Array} 合并后的数组
 */
function merge (arr1, arr2) {
  const results = []
  while(arr1.length && arr2.length) {
    if (arr1[0] <= arr2[0]) {
      results.push(arr1.shift())
    } else {
      results.push(arr2.shift())
    }
  }
  return results.concat(arr1, arr2)
}

/**
 * 将给定数组拆分为两个数组
 * @param {Array} arr 
 * @return {Array} 排好序的数组
 */
function mergeSort (arr) {
  if (arr.length < 2) return arr
  
  const arrHalf = Math.floor(arr.length / 2)
  const arr1 = arr.slice(0, arrHalf)
  const arr2 = arr.slice(arrHalf, arr.length)

  return merge(mergeSort(arr1), mergeSort(arr2))
}

let arr1 = [9, 5, 2, 7]
let arr2 = [1, 3, 1, 4, 7, 7, 5, 8, 9, 9, 1]

console.log(mergeSort(arr1)) // [2, 5, 7, 9]
console.log(mergeSort(arr2)) // [1, 1, 1, 3, 4, 5, 7, 7, 8, 9, 9]