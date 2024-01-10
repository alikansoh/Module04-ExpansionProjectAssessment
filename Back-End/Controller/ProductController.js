// CategoryController.js
import { db } from "../Model/index.js";

const Category = db.Products;
// 1. Create new category
const addProduct = async (req, res) => {
  let info = {
    name: req.body.name,
    title: req.body.title,
    description: req.body.description,
    user_id: req.body.user_id,
    category_id: req.body.category_id,
  };

  try {
    const cateogry = await Category.create(info);
    res.status(200).send(cateogry);
  } catch (error) {
    console.error("Error creating Category:", error);
    res.status(500).send("Internal Server Error");
  }
};

// 2. get all category
const getAllProducts = async (req, res) => {
  console.log("alla ma3o");
  let category = await Category.findAll({
    include: [{ model: db.Users, as: "user" }],
    include: [{ model: db.Categories, as: "category" }],
  });
  res.status(200).send(category);
};

// 3. get single category
const getOneProduct = async (req, res) => {
  let id = req.params.id;
  let category = await Category.findOne({
    where: { id: id },
    include: [{ model: db.Users, as: "user" }],
    include: [{ model: db.Categories, as: "category" }],
  });
  res.status(200).send(category);
};

// 4. update category
const updateProduct = async (req, res) => {
  let id = req.params.id;
  const category = await Category.update(req.body, { where: { id: id } });
  res.status(200).send(category);
};

// 5. delete category
const deleteProduct = async (req, res) => {
  let id = req.params.id;
  await Category.destroy({ where: { id: id } });
  res.status(200).send("Category deleted");
};

export {
  addProduct,
  getAllProducts,
  getOneProduct,
  updateProduct,
  deleteProduct,
};
