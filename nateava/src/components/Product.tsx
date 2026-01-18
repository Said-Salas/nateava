import { products } from '../data/products'

export const Product = () => {
	const productsEl = products.map(product => 
		 <div key={product.id}>
				<img src={product.image} />
				<h1>{product.name}</h1>
				<p>{product.price}</p>
		</div>
	)

  return (
        <>{productsEl}</>
  )
}