console.log("Testing Comments Js")

// test that we can get data from the backend
fetch(`${BACKEND_URL}/comments`)
  .then(response => response.json())
  .then(jsonResponse => console.log(jsonResponse));

class Comments {
    constructor(description){
        this.description = description
    }


}