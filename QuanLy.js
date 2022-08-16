var addButton = document.getElementById("btn");
var addForm = document.getElementById("add-product");
var addProduct = document.getElementById("sub-btn")
addButton.addEventListener("click", function(){
    addForm.classList.add("active");
})

addProduct.addEventListener("click", function(){
    addForm.classList.remove("active");
})