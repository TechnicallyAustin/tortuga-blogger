console.log('category.js')

const BACKEND_URL = 'http://localhost:3000';
let allCategories;
let fetchCategories = fetch(`${BACKEND_URL}/categories`)
    .then(function(response) {
        return response 
    })
    .then(function(response){
        data = response.json()
        return data 
    })
    .then(moreData => {
        const dataName = moreData.map(singleData => singleData.title).join('\n');
        //console.log(dataName)
        return dataName
    })
    .then(function(createdFromData){
        const allCategories = createdFromData
        console.log(allCategories)
    }).catch((error) => {
        console.error(error)
     })








    


class Category {
    constructor(data) {
    this.id = data.id
    this.title = data.title
    }
    // test that we can get data from the backend

    getId = function() {
        for(const object of categoriesJson) {
            console.log(object.id)
            }
    }

}
