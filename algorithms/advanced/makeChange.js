/**
 * 贪心算法 - 找零问题
 * 从面值最高的美分开始向下查找
 * @param {Number} originAmt 
 */
function makeChange(originAmt) {
  let coins = Array(4).fill(0)

  // 使用最高面值进行找零
  const restAmt = (amt, unit) => {
    return Number((amt % unit).toFixed(2))
  }

  for (let i = coins.length - 1; i >= 0; i--) {
    const unitList = [.01, .05, .1, .25]
    const unit = unitList[i]

    const remainAmt = restAmt(originAmt, unit)

    // 如果可以找零，记录使用的面值数量
    if (remainAmt < originAmt) {
      coins[i] = parseInt(originAmt / unit)
      originAmt = remainAmt
    }
  }

  return coins
}

function showChange(coins) {
  if (coins[3] > 0) {
    console.log(`25 美分的数量 - ${coins[3]} - ${coins[3] * .25}`)
  }
  if (coins[2] > 0) {
    console.log(`10 美分的数量 - ${coins[2]} - ${coins[2] * .10}`)
  }
  if (coins[1] > 0) {
    console.log(` 5 美分的数量 - ${coins[1]} - ${coins[1] * .05}`)
  }
  if (coins[0] > 0) {
    console.log(` 1 美分的数量 - ${coins[0]} - ${coins[0] * .01}`)
  }
}

const originAmt = .63

showChange(makeChange(originAmt))