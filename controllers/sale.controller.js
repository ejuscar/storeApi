import SaleService from "../services/sale.service.js";

async function createSale(req, res, next) {
	try {
		let sale = req.body;

		// prettier-ignore
		if(!sale.value || !sale.date || !sale.productId || !sale.clientId) {
            throw new Error("Value, Date, Product ID and Client ID are required")
        }

		res.send({
			success: true,
			message: "Sale created successfully",
			data: await SaleService.createSale(sale),
		});
		logger.info(`POST /sale - ${JSON.stringify(sale)}`);
	} catch (error) {
		next(error);
	}
}

async function getSales(req, res, next) {
	try {
		const productId = req.query.productId;
		const supplierId = req.query.supplierId;
		res.send({
			success: true,
			message: "Sales retrieve successfully",
			data: await SaleService.getSales(productId, supplierId),
		});

		logger.info(`GET /sale`);
	} catch (error) {
		next(error);
	}
}

async function getSale(req, res, next) {
	try {
		const id = req.params.id;

		if (!id) {
			throw new Error("Id is required");
		}

		res.send({
			success: true,
			message: "Sales retrieve successfully",
			data: await SaleService.getSale(id),
		});

		logger.info(`GET /sale/:id`);
	} catch (error) {
		next(error);
	}
}

async function deleteSale(req, res, next) {
	try {
		const id = req.params.id;

		if (!id) {
			throw new Error("Id is required");
		}

		res.send({
			success: true,
			message: "Sale deleted successfully",
			data: await SaleService.deleteSale(id),
		});

		logger.info(`GET /delete/:id`);
	} catch (error) {
		next(error);
	}
}

async function updateSale(req, res, next) {
	try {
		let sale = req.body;

		// prettier-ignore
		if(!sale.id || !sale.value || !sale.date || !sale.productId || !sale.clientId) {
            throw new Error("ID, Value, Date, Product ID and Client ID are required")
        }

		res.send({
			success: true,
			message: "Sale updated successfully",
			data: await SaleService.updateSale(sale),
		});
		logger.info(`PUT /sale - ${JSON.stringify(sale)}`);
	} catch (error) {
		next(error);
	}
}

export default {
	createSale,
	getSales,
	getSale,
	deleteSale,
	updateSale,
};
