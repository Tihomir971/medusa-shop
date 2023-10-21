export const load = async function ({ locals: { medusa } }) {
	const products = await medusa.getProducts();
	return {
		products
	};
};
