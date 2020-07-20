/**
 * @param {number[]} arr
 * @param {number} k
 * @return {number[]}
 */
var getLeastNumbers = function(arr, k) {

  function quickSort (arr) {
    if (arr.length === 0) return arr
    
    const pivot = arr[0]
    const left = []
    const right = []

    for (let i = 1; i < arr.length; i++) {
      if (arr[i] < pivot) {
        left.push(arr[i])
      } else {
        right.push(arr[i])
      }
    }

    return quickSort(left).concat(pivot, quickSort(right))
  }

  const sortedArr = quickSort(arr)

  return sortedArr.slice(0, k)
}
