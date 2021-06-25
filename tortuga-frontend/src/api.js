const BACKEND_URL = 'http://localhost:3000';
const COMMENTS_URL = `${BACKEND_URL}/comments`;
const BLOG_URL = `${BACKEND_URL}/blogs`;
const CATEGORIES_URL = `${BACKEND_URL}/categories`;
const formattedData = response => response.json();


function fetchCategories() {
    return fetch(CATEGORIES_URL)
    .then(formattedData)
    .then(results => {
        results.map(function(single){
        let newCategory = addCategories(single)
        console.log(newCategory)
        })
    })
    // creates Category classes from each object 
}

function fetchComments() {
    return fetch(COMMENTS_URL)
    .then(formattedData)
    // returns an array of objects 
}

function addCategories(data){
    fromData = new Category(data.id, data.title)
    console.log(fromData)
    displayCategories(fromData)
}

function displayCategories(data) {
    let ul = document.body.appendChild(document.createElement('ul')) // creats ul and assigns it to body 
    let li = ul.appendChild(document.createElement('li')) // creates an li that is assigned to a ul
    li.innerText = data.title
}

function categoryEventListeners() {
     for(const singleLi of allLi){
        singleLi.addEventListener('click', function(){
        console.log("I was clicked")
        })
        } 

}