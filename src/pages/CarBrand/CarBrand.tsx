import { useNavigate } from 'react-router-dom'

const CarBrand = () => {
	const navigate = useNavigate()

	const handleBrandSelect = (brand: string) => {
		navigate(`/searchbycar/${brand}`)
	}

	return (
		<div>
			<h2>CAR BRAND</h2>
			<button onClick={() => handleBrandSelect('Audi')}>Audi</button>
		</div>
	)
}

export default CarBrand
