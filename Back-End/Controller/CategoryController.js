// CategoryController.js
import { db } from "../Model/index.js";

const Category = db.Categories;



// 1. Create new category
const addCategory = async (req, res) => {
    let info = {
        name: req.body.name
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
const getAllCategories = async (req, res) => {
    console.log("alla ma3o")
    let category = await Category.findAll({});
    res.status(200).send(category);
}

// 3. get single category
const getOneCategory = async (req, res) => {
    let id = req.params.id;
    let category = await Category.findOne({ where: { id: id } });
    res.status(200).send(category);
}

// 4. update category
const updateCategory = async (req, res) => {
    let id = req.params.id;
    const category = await Category.update(req.body, { where: { id: id } });
    res.status(200).send(category);
}

// 5. delete category
const deleteCateogry = async (req, res) => {
    let id = req.params.id;
    await Category.destroy({ where: { id: id } });
    res.status(200).send('Category deleted');
}

export {
    addCategory,
    getAllCategories,
    getOneCategory,
    updateCategory,
    deleteCateogry
};
