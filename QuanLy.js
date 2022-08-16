var addButton = document.getElementById("btn");
var addForm = document.getElementById("add-product");
var addProduct = document.getElementById("add-btn");

const updateButton = document.querySelectorAll(".update-btn");
const updateForm = document.getElementById("up-product");
const updateProduct = document.getElementById("update-btn");

addButton.addEventListener("click", function (e) {
    addForm.classList.add("active");

});

addProduct.addEventListener("click", function (e) {

    addForm.classList.remove("active");

});


for (let i = 0; i < updateButton.length; i++) {
    updateButton[i].addEventListener("click", function (e) {

        updateForm.classList.add("active");

    });

}
updateForm.addEventListener("click", function () {
    e.stopPropagation();
    updateForm.classList.remove("active");

});
//quanlyhoso
var dateToday = function () {
    var myDate = document.getElementById("getDate");
    var today = new Date();
    myDate.value = today.toISOString().substring(0, 10);
}
dateToday();