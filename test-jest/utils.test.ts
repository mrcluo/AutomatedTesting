const EventEmitter = require('eventemitter3')
import { add, fib } from './utils'
test('测试加法 5+2', ()=>{
    expect(add(5,2)).toBe(7)
})

test('fib 初始情况测试', ()=>{
    expect(fib(1)).toBe(1)
})

test('fib 前五项测试', ()=>{
    expect(fib(2)).toBe(1)
    expect(fib(3)).toBe(2)
    expect(fib(4)).toBe(3)
    expect(fib(5)).toBe(5)
})

test('fib 从第六项开始大于5测试', ()=>{
    for (let i = 6; i < 10; i++) {
        expect(fib(i)).toBeGreaterThan(5)
    }
})

test("eventEmitter 测试", ()=>{
    // 这样有问题，emit了两次，只监听值等于1的情况
    // const event = new EventEmitter()
    // event.on("data", (data)=>{
    //     expect(data).toBe(1)
    // })
    // event.emit("data", 1)
    // event.emit("data", 2)
    
    // emit多次的用mockFn来模拟多次触发
    const mockFn = jest.fn()
    // mockFn.mockReturnValue(1) // mockFn函数有返回值时，可以通过mockReturnValue来测试
    const event = new EventEmitter()
    event.on("data", mockFn)
    event.emit("data", 1)
    event.emit("data", 2)
    expect(mockFn).toHaveBeenCalledTimes(2) // 2次
    expect(mockFn).toHaveBeenCalledWith(1) // 第一次传参1
    expect(mockFn).toHaveBeenCalledWith(2) // 第二次传参2
})

test('null 测试', ()=>{
    const a = null;
    expect(a).toBeNull()
})

test('字符串正则表达式匹配 测试', ()=>{
    const str = 'utils.ts';
    expect(str).toMatch(/^.+\.ts$/)
})

// 可以用describe来分组
describe('测试加负数', ()=>{
    test('测试-1 + -2', ()=>{
        expect(add(-1, -2)).toBe(-3)
    })
    test('测试-2 + -3', ()=>{
        expect(add(-2, -3)).toBe(-5)
    })
})

// 场景：测试给数据库加一条数据，数据库的数据发生改变，可能影响后续测试，所以需要重置数据库
// 解决：测试前加一条数据，测试后删除这条数据
describe('测试加负数', ()=>{
    beforeAll(()=>{
        console.log('测试前加一条数据')
    })
    test('测试-1 + -2', ()=>{
        expect(add(-1, -2)).toBe(-3)
    })
    test('测试-2 + -3', ()=>{
        expect(add(-2, -3)).toBe(-5)
    })
    afterAll(()=>{
        console.log('测试后删除这条数据')
    })
})
