const Category_19 = require('../models/Category_19');

exports.getCategories = async (req, res) => {
    try{
       return await Category_19.fetchAll();
    } catch (err){
        console.log('getCategories',err);
    }
}