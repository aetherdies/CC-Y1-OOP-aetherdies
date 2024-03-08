let submitBtn = document.getElementById("submit_btn");

let commentForm = document.getElementById("comment_form");

//get inputs

let nameInput = document.getElementById("name");
let categoryInput = document.getElementById("category");
let experienceInput = document.getElementsByName("experience");

//get error spans

let nameError = document.getElementById("name_error");
let categoryError = document.getElementById("category_error");
let experienceError = document.getElementById("experience_error");
let errorExists = false;


submitBtn.addEventListener("click", onSubmitForm);

function onSubmitForm(event) {
    event.preventDefault();
    // console.log(event.target)

    nameError.innerHTML= "";
    categoryError.innerHTML = "";
    errorExists = false;


    if(nameInput.value === ""){
        nameError.innerHTML = "Name is required";
        errorExists = true;
    }

    if(categoryInput.value === ""){
        categoryError.innerHTML = "Category is required";
        errorExists = true;
    }

    for(let i = 0; i != experienceInput.length; i++){
        if(experienceInput[i].checked){
            experienceError.innerHTML = "Experience is required"
        }
    }


    if(!errorsExists){
        commentForm.submit();
    }
}