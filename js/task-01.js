const categoriesList = document.querySelector("#categories");
console.log("Number of categories:", categoriesList.children.length);


const categoriesHeadList = document.querySelectorAll(".item");

categoriesHeadList.forEach(item => {
    console.log("Category:", item.firstElementChild.textContent)
   
    const elemList = item.lastElementChild
    console.log("Elements:", elemList.children.length)
    
})