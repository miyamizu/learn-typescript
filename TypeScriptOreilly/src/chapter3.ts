// any
{
    const a: any = 666
    const b: any = ['denger']
    const c = a + b 
}


// unknown
{
    let a: unknown = 30
    let b = a === 123
    let c = a + 10 // error
    if (typeof a === 'number') {
    let d = a + 10
    }
}

// boolean
{
    let a = true
    var b = false
    const c = true　// 値が特定のbooleanであることを推論させることができる
    let d: boolean = true
    let e: true = true // 型がbooleanであることを明示的に伝えることができる。リテラル型を使って変数を明示的にアノテートしている。
    let f: true = false // 同上。
}

// number
{
    let a = 1234
    var b = Infinity * 0.10
    const c = 5678
    let d = a < b
    let e: number = 100
    let f: 26.218 = 26.218
    let g: 26.218 = 10
}
// bigint

// string
{
    let a = 'hello'
    var b = 'billy'
    const c = '!'
    let d = a + ' ' + b + c
    let e: string = 'zoom'
    let f: 'john' = 'john'
    let g: 'john' = 'zoe'
}

// symbol

// オブジェクト
{
    let c: {
    firstName: string;
    lastName: string;
    }

    class Person {
    constructor(
        public firstName: string,
        public lastName: string
    ) {}
    }

    c = new Person('miya', 'mizu')
}

// 型エイリアス

{
    type Age = number
    type Person = {
        name: string
        age: Age
    }

    type Cat = {name: string, purrs: boolean}
    type Dog = {name: string, barks: boolean, wags: boolean}
    type CatOrDogOrBoth = Cat | Dog
    type CatAndDog = Cat & Dog

    let a: CatOrDogOrBoth = {
        name: 'Bonkers',
        purrs: true
    }

    a = {
    name: 'Domino',
    barks: true,
    wags: true
    }

    a = {
        name: 'Donkers',
        barks: true,
        purrs: true,
        wags: true
    }
}

// 配列
{
  let a = [1,2,3]
  var b = ['a', 'b'] // グローバルになってる
  let c: string[] = ['a']
  let d = [1, 'a']
  const e = [2, 'b']

  let f = ['red']
  f.push('blue')

  let g = []
  g.push(1)
  g.push('red')

  let h: number[] = []
  h.push(1)
  h.push('aaa')
}

// タプル
{
  let as: readonly number[] = [1,2,3]
  let bs: readonly number[] = as.concat(4)
  let three = bs[2]
  as[4] = 5

  as.push(6)
}

// null, undefined, void, never
{
  // null: 値の欠如
  // undefined: 値がまだ割り当てられていない変数
  // return文を持たない関数の戻り値
  // 決して戻ることのない関数の戻り値
}

// enum
{
  enum Language {
    English = 0,
    Spanish = 1
  }
}

// 練習問題3
// a: number
// b: string
// c: string ×
// d: array<string>  ×
// e: e  ×
// f:  ×
// g: Array<Integer>  ×
// h  ×
//
// a: リテラルだから
// b:  ×
// c:  ×
// d:  ×
//  https://github.com/oreilly-japan/programming-typescript-ja/blob/master/answers/ch03.ts






