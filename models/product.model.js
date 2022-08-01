import { DataTypes } from "sequelize";
import db from "../repositories/db.js";
import Supplier from "./supplier.model.js";

const Product = db.define(
	"products",
	{
		productId: {
			type: DataTypes.INTEGER,
			autoIncrement: true,
			allowNull: false,
			primaryKey: true,
		},
		name: {
			type: DataTypes.STRING,
			allowNull: false,
		},
		description: {
			type: DataTypes.STRING,
			allowNull: false,
		},
		value: {
			type: DataTypes.DOUBLE,
			allowNull: false,
		},
		stock: {
			type: DataTypes.INTEGER,
			allowNull: false,
		},
	},
	{ underscored: true }
);

Product.belongsTo(Supplier, { foreignKey: "supplierId" });

export default Product;
