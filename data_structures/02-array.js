let nums = []

for (let i = 0; i < 100; ++i) {
  nums[i] = i + 1
}

const sameNums = nums

nums[0] = 400

// 浅拷贝
console.log(sameNums[0])  // 400

function copy (arr1, arr2) {
  for (let i = 0; i < arr1.length; ++i) {
    arr2[i] = arr1[i]
  }
}

const cloneNums = []

copy(nums, cloneNums)

nums[0] = 500

// 深拷贝
console.log(nums[0])  // 500
console.log(cloneNums[0]) // 400

console.log('--- --- ---')

// 查找元素
// indexOf 函数总是返回第一个与参数相同的元素的索引
// lastIndexOf 函数总是返回相同元素中最后一个元素的索引
let names = ['David', 'Mike', 'Cynthia', 'Raymond', 'Clayton', 'Mike', 'Jennifer']

console.log(names.indexOf('Mike'))  // 1
console.log(names.lastIndexOf('Mike')) // 5

console.log('--- --- ---')

// 数组转化为字符串
console.log(names.join())
console.log(names.toString())

console.log('--- --- ---')

// 由已有数组创建新数组
// concat() / splice() 方法允许通过已有数组创建新数组
const cisDept = ['Mike', 'Clayton', 'Terrill', 'Danny', 'Jennifer']
const dmpDept = ['Raymond', 'Cynthia', 'Bryan']

console.log(cisDept.concat(dmpDept))
console.log([...cisDept, ...dmpDept])

let itDept = [...cisDept, ...dmpDept]
console.log(itDept.splice(3, 3))
console.log(itDept)

console.log('--- --- ---')

// 添加元素
// push() / unshift()
let numbers = [1, 2, 3, 4, 5]
numbers.push(6)
console.log(numbers)
numbers.unshift(0)
console.log(numbers)

console.log('--- --- ---')

// 删除元素
// pop() / shift()
numbers.pop()
console.log(numbers)
numbers.shift()
console.log(numbers)

console.log('--- --- ---')

// 数组排序
console.log(numbers.reverse())
console.log(numbers)

console.log(numbers.sort())
console.log(names.sort())

console.log('--- --- ---')

// 迭代器
// 不生成新数组的迭代器
numbers.forEach((item) => {
  console.log(item * item)
})

const isAllEven = numbers.every(item => {
  return item % 2 === 0
})

console.log(isAllEven)

const isSomeEven = numbers.some(item => {
  return item % 2 === 0
})

console.log(isSomeEven)

const sum = numbers.reduce((a, b) => {
  return a + b
}, 0)

console.log(sum)
// 生成新数组的迭代器
const mapNums = numbers.map(item => {
  return item * item
})

console.log(mapNums)

const filterdNums = numbers.filter(item => {
  return item % 2 === 0
})

console.log(filterdNums)

console.log('--- --- ---')

// 二维数组
// matrix array
