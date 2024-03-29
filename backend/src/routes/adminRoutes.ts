import { Router } from "express";
import { addProduct, getProducts } from "../controllers/admin.js";
import { Multer } from "multer";

const router = Router();

const adminRoutes = (upload) => {
  router.get("/products", (req, res) => {
    getProducts(res);
  });
  router.post("/products/add", upload.single("image"), (req, res, next) => {
    addProduct(req, res, next);
  });

  return router;
};

export default adminRoutes;
