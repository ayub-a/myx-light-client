import { useDispatch, useSelector } from 'react-redux'

import { counterActions } from '../model/slice/counterSlice'
import { getCounterValue } from '../model/selectors/getCounterValue/getCounterValue'

export const Counter = () => {
    const dispatch = useDispatch()
    const count = useSelector(getCounterValue)

    const decrement = () => {
        dispatch(counterActions.decrement())
    }

    const increment = () => {
        dispatch(counterActions.increment())
    }

    return (
        <div>
            <h2>Test Counter</h2>

            <button data-testid="decrement-btn" onClick={decrement}>
                -
            </button>
            <div data-testid="count-value">{count}</div>
            <button data-testid="increment-btn" onClick={increment}>
                +
            </button>
        </div>
    )
}
