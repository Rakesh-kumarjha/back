import Sequelize from "sequelize";

const sequelize = new Sequelize(
  "telomnwy_official",
  "telomnwy_website",
  "Pass@Telomr@2022@sal@bio@1234@main",

  {
    dialect: "mysql",
    host: "162.241.122.206",
    logging: false,
  },
  {
    pool: {
      max: 100,
      min: 0,
      acquire: 30000,
      idle: 10000,
    },
  }
);

export default sequelize;
