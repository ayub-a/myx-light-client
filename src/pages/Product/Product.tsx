import { useParams } from 'react-router-dom'

const Product = () => {
	const { brand = '-', model = '-', body = '-', gen = '-' } = useParams()

	return (
		<div>
			Car: {brand} {model} {body} {gen}
		</div>
	)
}

export default Product
