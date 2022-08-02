import ProductService from "../services/product.service.js";

async function createProduct(req, res, next) {
	try {
		let product = req.body;

		// prettier-ignore
		if(!product.name || !product.description || !product.value || !product.stock || !product.supplierId) {
            throw new Error("Name, Description, Value, Stock and Supplier_Id are required")
        }

		res.send({
			success: true,
			message: "Product created successfully",
			data: await ProductService.createProduct(product),
		});
		logger.info(`POST /product - ${JSON.stringify(product)}`);
	} catch (error) {
		next(error);
	}
}

async function getProducts(req, res, next) {
	try {
		res.send({
			success: true,
			message: "Products retrieve successfully",
			data: await ProductService.getProducts(),
		});

		logger.info(`GET /product`);
	} catch (error) {
		next(error);
	}
}

async function getProduct(req, res, next) {
	try {
		const id = req.params.id;

		if (!id) {
			throw new Error("Id is required");
		}

		res.send({
			success: true,
			message: "Products retrieve successfully",
			data: await ProductService.getProduct(id),
		});

		logger.info(`GET /product/:id`);
	} catch (error) {
		next(error);
	}
}

async function deleteProduct(req, res, next) {
	try {
		const id = req.params.id;

		if (!id) {
			throw new Error("Id is required");
		}

		res.send({
			success: true,
			message: "Product deleted successfully",
			data: await ProductService.deleteProduct(id),
		});

		logger.info(`GET /delete/:id`);
	} catch (error) {
		next(error);
	}
}

async function updateProduct(req, res, next) {
	try {
		let product = req.body;

		// prettier-ignore
		if(!product.id || !product.name || !product.description || !product.value || !product.stock || !product.supplierId) {
            throw new Error("Name, Description, Value, Stock and Supplier_Id are required")
        }

		res.send({
			success: true,
			message: "Product updated successfully",
			data: await ProductService.updateProduct(product),
		});
		logger.info(`PUT /product - ${JSON.stringify(product)}`);
	} catch (error) {
		next(error);
	}
}

async function createProductInfo(req, res, next) {
	try {
		let productInfo = req.body;

		if (!productInfo.productId) throw new Error("Product Id is required!");

		res.send({
			success: true,
			message: "Product Info created successfully",
			data: await ProductService.createProductInfo(productInfo),
		});
		logger.info(`POST /product/info - ${JSON.stringify(productInfo)}`);
	} catch (error) {
		next(error);
	}
}

async function updateProductInfo(req, res, next) {
	try {
		let productInfo = req.body;

		if (!productInfo.productId) throw new Error("Product Id is required!");

		res.send({
			success: true,
			message: "Product Info updated successfully",
			data: await ProductService.updateProductInfo(productInfo),
		});
		logger.info(`PUT /product/info - ${JSON.stringify(productInfo)}`);
	} catch (error) {
		next(error);
	}
}

async function createReview(req, res, next) {
	try {
		let params = req.body;

		if (!params.productId || !params.review)
			throw new Error("Product Id and review are required!");

		res.send({
			success: true,
			message: "Product Review added successfully",
			data: await ProductService.createReview(
				params.review,
				params.productId
			),
		});
		logger.info(`POST /product/review - ${JSON.stringify(params)}`);
	} catch (error) {
		next(error);
	}
}

async function deleteReview(req, res, next) {
	try {
		res.send({
			success: true,
			message: "Product Review deleted successfully",
			data: await ProductService.deleteReview(
				req.params.id,
				req.params.index
			),
		});
		logger.info(`DELETE /product/review - ${JSON.stringify(params)}`);
	} catch (error) {
		next(error);
	}
}

async function getProductsInfo(req, res, next) {
	try {
		res.send({
			success: true,
			message: "Products Info retrieved successfully",
			data: await ProductService.getProductsInfo(),
		});
		logger.info(`GET /product/info`);
	} catch (error) {
		next(error);
	}
}

async function deleteProductInfo(req, res, next) {
	try {
		let productId = req.params.id;

		if (!productId) throw new Error("Product Id is required!");

		res.send({
			success: true,
			message: "Product Info deleted successfully",
			data: await ProductService.deleteProductInfo(productId),
		});
		logger.info(`DELETE /product/info - ${JSON.stringify(productId)}`);
	} catch (error) {
		next(error);
	}
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
