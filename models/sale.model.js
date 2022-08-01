import { DataTypes } from "sequelize";
import db from "../repositories/db.js";
import Client from "./client.model.js";
import Product from "./product.model.js";

const Sale = db.define(
	"sales",
	{
		saleId: {
			type: DataTypes.INTEGER,
			autoIncrement: true,
			allowNull: false,
			primaryKey: true,
		},
		value: {
			type: DataTypes.DOUBLE,
			allowNull: false,
		},
		date: {
			type: DataTypes.DATE,
			allowNull: false,
		},
	},
	{ underscored: true }
);

Sale.belongsTo(Product, { foreignKey: "productId" });
Sale.belongsTo(Client, { foreignKey: "clientId" });

export default Sale;
