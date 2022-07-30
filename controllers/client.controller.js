import ClientService from "../services/client.service.js";

async function createClient(req, res, next) {
	try {
		let client = req.body;

		// prettier-ignore
		if(!client.name || !client.cpf || !client.phone || !client.email || !client.address) {
            throw new Error("Name, CPF, Phone, Email and Address are required")
        }

		res.send({
			success: true,
			message: "Client created successfully",
			data: await ClientService.createClient(client),
		});
		logger.info(`POST /client - ${JSON.stringify(client)}`);
	} catch (error) {
		next(error);
	}
}

async function getClients(req, res, next) {
	try {
		res.send({
			success: true,
			message: "Clients retrieve successfully",
			data: await ClientService.getClients(),
		});

		logger.info(`GET /client`);
	} catch (error) {
		next(error);
	}
}

async function getClient(req, res, next) {
	try {
		const id = req.params.id;

		if (!id) {
			throw new Error("Id is required");
		}

		res.send({
			success: true,
			message: "Clients retrieve successfully",
			data: await ClientService.getClient(id),
		});

		logger.info(`GET /client/:id`);
	} catch (error) {
		next(error);
	}
}

async function deleteClient(req, res, next) {
	try {
		const id = req.params.id;

		if (!id) {
			throw new Error("Id is required");
		}

		res.send({
			success: true,
			message: "Client deleted successfully",
			data: await ClientService.deleteClient(id),
		});

		logger.info(`GET /delete/:id`);
	} catch (error) {
		next(error);
	}
}

async function updateClient(req, res, next) {
	try {
		let client = req.body;

		// prettier-ignore
		if(!client.id || !client.name || !client.cpf || !client.phone || !client.email || !client.address) {
            throw new Error("Id, Name, CPF, Phone, Email and Address are required")
        }

		res.send({
			success: true,
			message: "Client updated successfully",
			data: await ClientService.updateClient(client),
		});
		logger.info(`PUT /client - ${JSON.stringify(client)}`);
	} catch (error) {
		next(error);
	}
}

export default {
	createClient,
	getClients,
	getClient,
	deleteClient,
	updateClient,
};
