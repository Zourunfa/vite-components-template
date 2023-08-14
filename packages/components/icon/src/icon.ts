import type { ExtractPropTypes, PropType } from 'vue'
// 通过 as const 则可以快速将一个对象变成只读类型，常量断言可以把一个值标记为一个不可篡改的常量
export const iconProps = {
  color: String,
  size: [Number, String] as PropType<number | string>,
} as const

/**
 * 在 TypeScript 中类有 2 种类型, 静态类型和实例类型, 如果是构造函数类型,
 *  那么返回的则是实例类型。我们在原生 Vue3 中定义 props 类型，其实是一个构造函数，
 * 比如上述我们定义  color 的类型是 String，但 String 只是一个构造函数，
 * 并不是 TypeScript 中的 string 类型，String 构造函数在
 *  TypeScript 的类型是它的构造函数类型： StringConstructor ，
 * 但这并不是我们需要的，我们希望 String 构造函数返回的是字符串类型 string。


 * 
 */

/**
 * 在 Vue3 中提供了自带的 Props 类型声明：ExtractPropTypes ，
 * 它的作用是接收一个类型，然后把对应的所接收的 props 类型返回出来，
 * 同时如果是构造函数类型则转换成对应的类型，
 * 比如 StringConstructor 转换成 string。
javascript复制代码

 */

export type Props = ExtractPropTypes<typeof iconProps>
