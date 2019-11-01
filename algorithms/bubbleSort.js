/**
 * 冒泡排序
 * 冒泡排序算法是原地排序算法，是稳定的排序算法，时间复杂度最好情况是 O(n)，最坏情况是 O(n^2)
 * @param {Array}} arr
 */
function bubbleSort (arr) {
  let flag

  for(let i = 0; i < arr.length; i++) {
    flag = false
    for(let j = 0; j < arr.length; j++) {
      if (arr[j] < arr[j - 1]) {
        // 元素交换
        [arr[j - 1], arr[j]] = [arr[j], arr[j - 1]]
        flag = true
      }
    }
    if (!flag) break
  }
  
  return arr
}

let arr1 = [9, 5, 2, 7]
let arr2 = [1, 3, 1, 4, 7, 7, 5, 8, 9, 9, 1]

console.log(bubbleSort(arr1)) // [2, 5, 7, 9]
console.log(bubbleSort(arr2)) // [1, 1, 1, 3, 4, 5, 7, 7, 8, 9, 9]
