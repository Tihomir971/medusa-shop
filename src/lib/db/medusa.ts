export class MedusaClient {
	private url: string;

	constructor(url: string) {
		this.url = url;
	}
	async getProducts() {
		// returns an array of product objects
		try {
			const result = await fetch(`${import.meta.env.VITE_MEDUSA_BACKEND_URL}/store/products/`);
			const data = await result.json();
			const products = data?.products;
			console.log('products', products);

			return {
				products
			};
		} catch (error) {
			console.log('Error: ' + error);
		}
	}
	async getProduct(handle: string) {
		try {
			const result = await fetch(
				`${import.meta.env.VITE_MEDUSA_BACKEND_URL}/store/products?handle=${handle}`
			);
			const data = await result.json();
			const products = data.products;

			return {
				products
			};
		} catch (error) {
			console.log('Error: ' + error);
		}
	}
}
