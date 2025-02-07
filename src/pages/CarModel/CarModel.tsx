import { useLocation, useNavigate } from 'react-router-dom'

const CarModel = () => {
	const navigate = useNavigate()
	const { pathname } = useLocation()

	const handleModelSelect = (model: string) => {
		navigate(`${pathname}/${model}`)
	}

	return (
		<div>
			<h2>CAR MODEL</h2>
			<button onClick={() => handleModelSelect('A3')}>A3</button>
		</div>
	)
}

export default CarModel
