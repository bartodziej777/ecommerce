import express from "express";
import dotenv from "dotenv";
import bodyParser from "body-parser";
import { sequelize } from "./utils/database.js";

dotenv.config();

const app = express();

app.use(bodyParser.json());

app.get("/", (req, res) => {
  res.send("Hello world");
});

try {
  await sequelize.authenticate();
  app.listen(process.env.PORT, () => {
    console.log(`Server listen at ${process.env.PORT}`);
  });
} catch (error) {
  console.error("Unable to connect to the database:", error);
}
