import { BOOLEAN, DOUBLE, INTEGER, STRING } from "sequelize";
import { sequelize } from "../utils/database.js";

export const Product = sequelize.define("Products", {
  id: {
    type: INTEGER,
    primaryKey: true,
    allowNull: false,
    autoIncrement: true,
  },
  name: STRING,
  type: STRING,
  price: DOUBLE,
  isDiscount: {
    type: BOOLEAN,
    defaultValue: false,
  },
  discountAmount: {
    type: DOUBLE,
    defaultValue: 0,
  },
  description: STRING,
  imagePath: STRING,
});
