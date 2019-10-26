/**
 * 插入排序
 * 插入排序算法是原地排序算法，是稳定的排序算法，时间复杂度最好情况是 O(n)，最坏情况是 O(n^2)
 * @param {*} arr 
 */
function insertionSort (arr) {
  if (arr.length === 0) return arr
  // 遍历未排序区间，向已排序区间何时位置插入值
  for (let unSorted = 1; unSorted < arr.length; unSorted++) {
    let temp = arr[unSorted]
    let sorted = unSorted - 1
    for (; sorted >= 0 && (arr[sorted] > temp); sorted--) {
      // 插入正确的值
      arr[sorted + 1] = arr[sorted]
    }

    arr[sorted + 1] = temp
  }
  return arr
}

let arr1 = [9, 5, 2, 7]
let arr2 = [1, 3, 1, 4, 7, 7, 5, 8, 9, 9, 1]

console.log(insertionSort(arr1)) // [2, 5, 7, 9]
console.log(insertionSort(arr2)) // [1, 1, 1, 3, 4, 5, 7, 7, 8, 9, 9]