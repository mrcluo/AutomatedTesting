// 函数需要export 方便utils.test.ts使用
export function add(a:number, b:number) {
    return a + b;
}

export function fib(n:number){
    let a = 1;
    let b = 1;
    while (--n) {
        const t = a
        a += b;
        b = t;
    }
    return b
}