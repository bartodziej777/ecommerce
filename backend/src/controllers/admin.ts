import { Product } from "../models/Product.js";
import { Response } from "express";

const getProducts = async (res: Response) => {
  try {
    const products = await Product.findAll();
    res.status(200).json(products);
  } catch (err) {
    res.status(500).json({ message: err.message });
  }
};

const addProduct = async (req, res: Response, next) => {
  try {
    if (!req.file) {
      throw new Error("saving file problem");
    }
    await Product.create({
      name: req.body.name,
      type: req.body.type,
      price: req.body.price,
      imagePath: `images/${req.file.filename}`,
    });
    res.status(201).json({ message: "Product added successfully" });
  } catch (err) {
    res.status(500).json({ message: err.message });
  }
};

export { getProducts, addProduct };
