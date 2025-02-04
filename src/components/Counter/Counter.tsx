import { useState } from 'react'

import cl from './Counter.module.scss'

export const Counter = () => {
	const [count, setCount] = useState(0)

	return (
		<div className={cl.counter}>
			<button onClick={() => setCount(count - 1)}>-</button>
			<h2>{count}</h2>
			<button onClick={() => setCount(count + 1)}>+</button>
		</div>
	)
}
