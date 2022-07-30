import pg from "pg";

async function connect() {
	if (global.connection) {
		return global.connection.connect();
	}

	const pool = new pg.Pool({
		connectionString:
			"postgres://qqowctxh:7fL2Abn7CPEyVPexVGQYTlC_08FXTbC8@kesavan.db.elephantsql.com/qqowctxh",
	});

	global.connection = pool;

	return pool.connect();
}

export { connect };
