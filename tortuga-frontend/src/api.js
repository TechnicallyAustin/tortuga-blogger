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
    let div = document.body.appendChild(document.createElement('div')) // creats div and assigns it to body
    let ul = div.appendChild(document.createElement('ul'))
    let li = ul.appendChild(document.createElement('li')) // creates an li that is assigned to a ul
    li.innerText = data.title   
}

function addCategoryEventListeners() {
let allLi = document.querySelectorAll('li')
     for(const singleLi of allLi){
        singleLi.addEventListener('click', function(){
        console.log("The Category Title was clicked ")})
    } 
}

function newCategoryFormEventListeners() {
let formEl = document.getElementById("category-form")
formEl.addEventListener('click', function(){
    newCategoryForm()
    //console.log('Render New Category Form')
})
} 

function newCategoryForm() {
    let span = document.body.appendChild(document.createElement('span'))
    let form = span.appendChild(document.createElement('input'))
    form.type = "text";
    form.value = "Enter a Category Name Here";
    const submit = span.appendChild(document.createElement('button'))
    submit.innerText = "Create Category"
    submit.id = 'submit-button'
    getUserInput(submit)
}

function getUserInput() {
    let submit = document.getElementById('submit-button')
    submit.addEventListener('click',function(){
        console.log("event listener for submit button. Run function to post submit data to rails")
    })
}





// Post Request obj
const CategoryConfigObj = {
    method: "POST",
    headers: {
        "Content-Type": "application/json",
        "Accepts": "application/json"
    },
    body: JSON.stringify({
        // object properties
    })
}

function postNewCategory() {
return fetch(CATEGORIES_URL, categoryConfigObj)
.then(function(response) {
    return response.json();
})
.then(function(object){
    console.log(object)
})
.catch(function(error){
    alert("There was an error with this request");
    console.log(error.message);
})
}




