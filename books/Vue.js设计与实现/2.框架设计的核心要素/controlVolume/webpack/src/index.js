import { foo } from './utils'

const obj1 = {
  foo: 'foo value'
}
foo(obj1)

console.log("Hello, webpack!")
console.log(SOMETHINE)
console.log(process.env.NODE_ENV)

if (process.env.NODE_ENV !== 'production') {
  console.warn('环境区分警告测试')
}
