import Sequelize from "sequelize";
import sequelize from "../utilities/database.js";
import randomstring from "randomstring";

const User = sequelize.define("user", {
  user_id: {
    type: Sequelize.STRING,
    allowNull: false,
    unique: true,
  },
  first_name: {
    type: Sequelize.STRING,
    allowNull: true,
  },
  last_name: {
    type: Sequelize.STRING,
    allowNull: true,
  },
  date_of_birth: {
    type: Sequelize.STRING,
    allowNull: true,
  },
  phone: {
    type: Sequelize.STRING,
    allowNull: true,
  },
  city: {
    type: Sequelize.STRING,
    allowNull: true,
  },
  region: {
    type: Sequelize.STRING,
    enum: ["Account_Holder"],
    allowNull: true,
  },
  postal_code: {
    type: Sequelize.STRING,
    allowNull: true,
  },
  occupation: {
    type: Sequelize.STRING,
    allowNull: true,
  },
  salary: {
    type: Sequelize.STRING,
    allowNull: true,
  },
  p_address: {
    type: Sequelize.STRING,
    allowNull: true,
  },
  date_of_diagnosis: {
    type: Sequelize.STRING,
    allowNull: true,
  },
  hospital_name: {
    type: Sequelize.STRING,
    allowNull: true,
  },
  cancer: {
    type: Sequelize.STRING,
    allowNull: true,
  },
  stage_of_cancer: {
    type: Sequelize.STRING,
    allowNull: true,
  },
  amount: {
    type: Sequelize.STRING,
    allowNull: true,
  },
  myplan: {
    type: Sequelize.STRING,
    allowNull: true,
  },
  insurance: {
    type: Sequelize.STRING,
    allowNull: true,
  },
  consulting_physicion: {
    type: Sequelize.STRING,
    allowNull: true,
  },
  reffered: {
    type: Sequelize.STRING,
    allowNull: true,
  },
  email_address: {
    type: Sequelize.STRING,
    allowNull: true,
  },
  password: {
    type: Sequelize.STRING,
    allowNull: true,
  },
  isActive: {
    type: Sequelize.BOOLEAN,
    defaultValue: false,
  },
  refreshToken: {
    type: Sequelize.STRING,
    allowNull: true,
  },
  phoneotp: {
    type: Sequelize.STRING,
    allowNull: true,
  },
  mailotp: {
    type: Sequelize.STRING,
    allowNull: true,
  },
});

User.beforeCreate((user) => {
  // Generate user ID
  const year = new Date().getFullYear().toString().substr(-2);
  const random_number = randomstring.generate({
    length: 3,
    charset: "numeric",
  });
  user.user_id = `TL${year}${random_number}`;
});

export default User;
