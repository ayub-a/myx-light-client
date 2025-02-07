import { useLocation, useNavigate } from 'react-router-dom'

const CarBody = () => {
	const navigate = useNavigate()
	const { pathname } = useLocation()

	const handleBodySelect = (body: string, gen: number) => {
		navigate(`${pathname}/${body}/${gen}`)
	}

	return (
		<div>
			<h2>CAR BODY</h2>
			<button onClick={() => handleBodySelect('sedan', 2)}>Sedan Gen 2</button>
		</div>
	)
}

export default CarBody
