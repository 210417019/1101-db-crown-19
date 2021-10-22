const serviceCrown2Controller_19 = require('./serviceCrown2Controller_19');

exports.getCategories = async (req, res) => {
    try{
       let results = await serviceCrown2Controller_19.getCategories();
       console.log('results', JSON.stringify(results));
       res.render('crown2_19', {
           data: results, 
           title: 'Crown2_19', 
           name:'zongyi Wu', 
           id:'210417019' 
        });
    } catch (err){
        console.log('crown2Controller getCategories',err);
    }
}