const BACKEND_URL = 'http://localhost:3000';
const COMMENTS_URL = `${BACKEND_URL}/comments`;
const BLOG_URL = `${BACKEND_URL}/blogs`;
const CATEGORIES_URL = `${BACKEND_URL}/categories`;
const formattedData = response => response.json()

function fetchCategories() {
    return fetch(CATEGORIES_URL)
    .then(formattedData)
}

function fetchComments() {
    return fetch(COMMENTS_URL)
    .then(formattedData)
}
