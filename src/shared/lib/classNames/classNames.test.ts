import { clsnm } from './classNames'

describe('classNames / clsnm', () => {
    test('first param', () => {
        expect(clsnm('main')).toBe('main')
    })

    test('first and second params', () => {
        const expected = 'main cls1 cls2'
        expect(clsnm('main', ['cls1', 'cls2'])).toBe(expected)
    })

    test('all params', () => {
        const expected = 'main cls1 cls2 cls4'

        expect(clsnm('main', ['cls1', 'cls2'], { cls3: false, cls4: true })).toBe(expected)
    })

    test('empty params', () => {
        expect(clsnm('', [], {})).toBe('')
    })
})
