import SaleRepository from "../repositories/sale.repository.js";
import ProductRepository from "../repositories/product.repository.js";
import ClientRepository from "../repositories/client.repository.js";

async function createSale(sale) {
	const product = await ProductRepository.getProduct(sale.productId);
	if (product && (await ClientRepository.getClient(sale.clientId))) {
		if (product.stock > 0) {
			sale = await SaleRepository.insertSale(sale);
			product.stock--;
			await ProductRepository.updateProduct(product);
			return sale;
		} else {
			throw new Error("Product does not have sotck");
		}
	}

	throw new Error("Product or Client does not exist");
}

async function getSales(productId, supplierId) {
	if (productId) return await SaleRepository.getSalesByProductId(productId);
	if (supplierId)
		return await SaleRepository.getSalesBySupplierId(supplierId);
	return await SaleRepository.getSales();
}

async function getSale(id) {
	return await SaleRepository.getSale(id);
}

async function deleteSale(id) {
	await SaleRepository.deleteSale(id);
}

async function updateSale(sale) {
	if (
		(await ProductRepository.getProduct(sale.productId)) &&
		(await ClientRepository.getClient(sale.clientId))
	)
		return await SaleRepository.updateSale(sale);

	throw new Error("Product or Client does not exist");
}

export default {
	createSale,
	getSales,
	getSale,
	deleteSale,
	updateSale,
};
