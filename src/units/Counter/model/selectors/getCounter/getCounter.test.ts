import { DeepPartial, StateSchema } from 'shared/lib/storeProvider'
import { getCounter } from './getCounter'

describe('getCounter', () => {
    test('return counter state', () => {
        const state: DeepPartial<StateSchema> = {
            counter: { value: 10 },
        }

        expect(getCounter(state as StateSchema)).toEqual({ value: 10 })
    })
})
