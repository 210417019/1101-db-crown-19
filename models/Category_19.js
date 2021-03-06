const db = require('../utils/database')

const Category_19 = class Category_19 {
    constructor(id, name, size, remote_url, local_url, link_url) {
        this.id = id;
        this.name = name;
        this.size = size;
        this.remote_url = remote_url;
        this.local_url = local_url;
        this.link_url = link_url;
    }


// get all categories
static async fetchAll() {
    try {
        let results = await db.query('SELECT * from category_19');
        
        return results.rows;
    }   catch (e) {
        console.log('error', e)
    }
  }
};

//const text = async () => {
//    let results = await Category_19.fetchAll();
//    console.log('results', JSON.stringify(results.rows));
//}

//text();
module.exports = Category_19;