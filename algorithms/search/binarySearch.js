/**
 * 二分查找，对有序的数据集合进行分区间查找，每次查询区间缩小为之前的一半
 * Big O = O(logn)
 * @param {Array} arr 要查询的数组
 * @param {Number} searchValue 要查询的值
 */
function binarySearch(arr, searchValue) {
  const mid = Math.floor(arr.length / 2)
  if (arr[mid] === searchValue) {
    console.log(`matched: ${arr[mid]}`)
    return arr[mid]
  } else if (arr[mid] < searchValue && arr.length > 1) {
    binarySearch(arr.splice(mid, Number.MAX_VALUE), searchValue)
  } else if (arr[mid] > searchValue && arr.length > 1) {
    binarySearch(arr.splice(0, mid), searchValue)
  } else {
    console.log("not found", searchValue)
    return -1
  }
}

const arr = [1, 2, 3, 4, 5, 6, 7, 8, 9, 10]

binarySearch(arr, 3)
binarySearch(arr, 7)
binarySearch(arr, 12)
