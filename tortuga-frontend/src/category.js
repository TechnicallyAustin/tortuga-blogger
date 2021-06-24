const BACKEND_URL = 'http://localhost:3000';
document.addEventListener('DomContentLoaded', function() {
    console.log('Dom was loaded')
    allCats()
})
let data;
let newData;
let allCats = function() {
    fetch(`${BACKEND_URL}/categories`)
    .then(function(result) {
        return result 
    })
    .then(function(response){
        data = response.json()
        return data 
    })
    .then(function(json){
        newData = json
    return newData;
    });
}
    
    
    


class Category {
    constructor(title) {
    this.title = title 
    }
    // test that we can get data from the backend

}
