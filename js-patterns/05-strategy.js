const strategyTypes = {
  S: Symbol('S'),
  A: Symbol('A'),
  B: Symbol('B')
}

const strategies = {
  [strategyTypes.S]: salary => salary * 4,
  [strategyTypes.A]: salary => salary * 3,
  [strategyTypes.B]: salary => salary * 2
}

const calcBonus = (level, salary) => strategies[level](salary)

console.log(calcBonus(strategyTypes.S, 20000)) // -> 80000
console.log(calcBonus(strategyTypes.A, 10000)) // -> 30000
console.log(calcBonus(strategyTypes.B, 8000)) // -> 16000