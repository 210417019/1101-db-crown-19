const serviceCrown2Controller_19 = require('./serviceCrown2Controller_19');

exports.getCategories = async (req, res) => {
    try{
       const data = await serviceCrown2Controller_19.getCategories();
       return res.json(data);
       
    } catch (err){
        console.log('crown2Controller getCategories',err);
    }
}