// ../Models/index.js
import { dbConfig } from "../config/dbconfig.js";
import { Sequelize, DataTypes } from "sequelize";
import { createProductModel } from './ProductModel.js';
import { createCategoryModel } from './CategoryModel.js';
import { createUserModel } from './UserModel.js';

const sequelize = new Sequelize(
    dbConfig.DB,
    dbConfig.USER,
    dbConfig.PASSWORD, {
        host: dbConfig.HOST,
        port: dbConfig.PORT,
        dialect: dbConfig.dialect,
        operatorAliases: false,

        pool: {
            max: dbConfig.pool.max,
            min: dbConfig.pool.min,
            acquire: dbConfig.pool.acquire,
            idle: dbConfig.pool.idle
        }
    }
);


sequelize.authenticate()
    .then(() => {
        console.log("connected to the database");
    })
    .catch(error => {
        console.error("error connecting: " + error);
    });

const db = {};

db.Sequelize = Sequelize;
db.sequelize = sequelize;

db.Users = createUserModel(sequelize, DataTypes);
db.Categories = createCategoryModel(sequelize, DataTypes);
db.Products = createProductModel(sequelize, DataTypes)

db.Products.hasMany(db.Users, {
    foreignKey: "product_id",
    as: "user"
});

db.Users.belongsTo(db.Products, {
    foreignKey: "product_id",
    as: "product"
});

db.Categories.hasMany(db.Products, {
    foreignKey: "category_id",
    as: "product"
});

db.Products.belongsTo(db.Categories, {
    foreignKey: "category_id",
    as: "category"
});






db.sequelize.sync({ force: false })
    .then(() => {
        console.log("Database synchronization done!");
    });

export { db,};
