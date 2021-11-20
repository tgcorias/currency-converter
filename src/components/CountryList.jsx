const ProductList = () => {

	const products = useGetProducts(API);
	return (
		<section className="main-container">
			<div className="ProductList">
				{products.map(product => (
					<ProductItem key={product.id} product={product} />
				))}
			</div>
		</section>
	);
}