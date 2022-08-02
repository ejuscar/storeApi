import ProductRepository from "../repositories/product.repository.js";
import SupplierRepository from "../repositories/supplier.repository.js";
import ProductInfoRepository from "../repositories/productInfo.repository.js";

async function createProduct(product) {
	if (await SupplierRepository.getSupplier(product.supplierId))
		return await ProductRepository.insertProduct(product);

	throw new Error("Supplier does not exist");
}

async function getProducts() {
	return await ProductRepository.getProducts();
}

async function getProduct(id) {
	let product = await ProductRepository.getProduct(id);
	product.info = await ProductInfoRepository.getProductInfo(parseInt(id));

	return product;
}

async function deleteProduct(id) {
	await ProductRepository.deleteProduct(id);
}

async function updateProduct(product) {
	if (await SupplierRepository.getSupplier(product.supplierId))
		return await ProductRepository.updateProduct(product);

	throw new Error("Supplier does not exist");
}

async function createProductInfo(productInfo) {
	await ProductInfoRepository.createProductInfo(productInfo);
}

async function updateProductInfo(productInfo) {
	await ProductInfoRepository.updateProductInfo(productInfo);
}

async function createReview(review, productId) {
	await ProductInfoRepository.createReview(review, productId);
}

async function deleteReview(productId, index) {
	await ProductInfoRepository.deleteReview(
		parseInt(productId),
		parseInt(index)
	);
}

async function getProductsInfo() {
	return await ProductInfoRepository.getProductsInfo();
}

async function deleteProductInfo(productId) {
	return await ProductInfoRepository.deleteProductInfo(parseInt(productId));
}

export default {
	createProduct,
	getProducts,
	getProduct,
	deleteProduct,
	updateProduct,
	createProductInfo,
	updateProductInfo,
	createReview,
	deleteReview,
	getProductsInfo,
	deleteProductInfo,
};
