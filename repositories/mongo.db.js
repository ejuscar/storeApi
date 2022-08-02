import mongodb from "mongodb";

function getClient() {
	const uri =
		"mongodb+srv://root:umasenha123@cluster0.4nczmxr.mongodb.net/?retryWrites=true&w=majority";

	return new mongodb.MongoClient(uri);
}

export { getClient };
