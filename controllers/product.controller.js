import ProductService from "../services/product.service.js";

async function createProduct(req, res, next) {
	try {
		let product = req.body;

		// prettier-ignore
		if(!product.name || !product.description || !product.value || !product.stock || !product.supplier_id) {
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
		if(!product.id || !product.name || !product.description || !product.value || !product.stock || !product.supplier_id) {
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

export default {
	createProduct,
	getProducts,
	getProduct,
	deleteProduct,
	updateProduct,
};
