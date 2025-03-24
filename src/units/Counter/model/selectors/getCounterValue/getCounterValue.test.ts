import { DeepPartial, StateSchema } from 'shared/lib/storeProvider'
import { getCounterValue } from './getCounterValue'

describe('getCounterValue', () => {
    test('return counter state', () => {
        const state: DeepPartial<StateSchema> = {
            counter: { value: 10 },
        }

        expect(getCounterValue(state as StateSchema)).toEqual(10)
    })
})
