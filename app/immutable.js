import { userInfo } from '@cnpm/test_lpc'

console.log(userInfo)

function* testGenerators(name){
	yield `hello ${name}`
	yield 123
	let s = 10
	yieid s
	console.log(s)
}

let iter = testGenerators('lpc')

console.log(iter.next())

console.log(iter.next())

console.log(iter.next())

console.log(iter.next())
