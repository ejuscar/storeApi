import SupplierService from "../services/supplier.service.js";

async function createSupplier(req, res, next) {
	try {
		let supplier = req.body;

		// prettier-ignore
		if(!supplier.name || !supplier.cnpj || !supplier.phone || !supplier.email || !supplier.address) {
            throw new Error("Name, CNPJ, Phone, Email and Address are required")
        }

		res.send({
			success: true,
			message: "Supplier created successfully",
			data: await SupplierService.createSupplier(supplier),
		});
		logger.info(`POST /supplier - ${JSON.stringify(supplier)}`);
	} catch (error) {
		next(error);
	}
}

async function getSuppliers(req, res, next) {
	try {
		res.send({
			success: true,
			message: "Suppliers retrieve successfully",
			data: await SupplierService.getSuppliers(),
		});

		logger.info(`GET /supplier`);
	} catch (error) {
		next(error);
	}
}

async function getSupplier(req, res, next) {
	try {
		const id = req.params.id;

		if (!id) {
			throw new Error("Id is required");
		}

		res.send({
			success: true,
			message: "Suppliers retrieve successfully",
			data: await SupplierService.getSupplier(id),
		});

		logger.info(`GET /supplier/:id`);
	} catch (error) {
		next(error);
	}
}

async function deleteSupplier(req, res, next) {
	try {
		const id = req.params.id;

		if (!id) {
			throw new Error("Id is required");
		}

		res.send({
			success: true,
			message: "Supplier deleted successfully",
			data: await SupplierService.deleteSupplier(id),
		});

		logger.info(`GET /delete/:id`);
	} catch (error) {
		next(error);
	}
}

async function updateSupplier(req, res, next) {
	try {
		let supplier = req.body;

		// prettier-ignore
		if(!supplier.id || !supplier.name || !supplier.cnpj || !supplier.phone || !supplier.email || !supplier.address) {
            throw new Error("Id, Name, CNPJ, Phone, Email and Address are required")
        }

		res.send({
			success: true,
			message: "Supplier updated successfully",
			data: await SupplierService.updateSupplier(supplier),
		});
		logger.info(`PUT /supplier - ${JSON.stringify(supplier)}`);
	} catch (error) {
		next(error);
	}
}

export default {
	createSupplier,
	getSuppliers,
	getSupplier,
	deleteSupplier,
	updateSupplier,
};
