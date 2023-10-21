export const load = async function ({ locals: { medusa } }) {
	return {
		products: medusa.getProducts()
	};
};
