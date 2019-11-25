import classes, {scopedClassMaker} from '../classes'

describe('classes', () => {
    it('接受一个参数', () => {
        const result = classes('a')
        expect(result).toEqual('a')
    })
    it('接受 2 个 className', ()=>{
        const result = classes('a', 'b')
        expect(result).toEqual('a b')
    })
    it('接受 undefined 结果不会出现 undefined', ()=>{
        const result = classes('a', undefined)
        expect(result).toEqual('a')
    })
    it('接受各种奇怪值', ()=>{
        const result = classes(
            'a', undefined, '中文', false, null
        )
        expect(result).toEqual('a 中文')
    })
    it('接受 0 个参数', ()=>{
        const result = classes()
        expect(result).toEqual('')
    })
})

describe('scopedClassMaker', () => {
    it('接受字符串或对象', () => {
      const sc = scopedClassMaker('cc-layout')
      expect(sc('')).toEqual('cc-layout')
      expect(sc('x')).toEqual('cc-layout-x')
      expect(sc({y: true, z: false})).toEqual('cc-layout-y')
      expect(sc({y: true, z: true})).toEqual('cc-layout-y cc-layout-z')
      expect(sc({y: true, z: true}, {extra: 'red'})).toEqual('cc-layout-y cc-layout-z red')
    })
})
