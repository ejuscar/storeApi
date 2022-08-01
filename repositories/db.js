import { Sequelize } from "sequelize";

const sequelize = new Sequelize(
	"postgres://qqowctxh:7fL2Abn7CPEyVPexVGQYTlC_08FXTbC8@kesavan.db.elephantsql.com/qqowctxh",
	{
		dialect: "postgres",
		define: {
			timestamps: false, // Não cria as colunas "createdAt" e "updatedAt"
		},
	}
);

export default sequelize;
