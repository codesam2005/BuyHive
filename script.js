var sidenav = document.querySelector(".side-navbar");
var productContainer = document.getElementById("products");
var productList = productContainer.querySelectorAll(".products-box"); 

document.getElementById("search").addEventListener("keyup", function (event) {
    var enterValue = event.target.value.toUpperCase();

    for (let count = 0; count < productList.length; count++) {
        var productName = productList[count].querySelector("p").textContent; 
        
        if (productName.toUpperCase().indexOf(enterValue) < 0) {
            productList[count].style.display = "none"; 
        } else {
            productList[count].style.display = "block";
        }
    }
});

function showNavbar() {
    sidenav.style.left = "0";
}

function closeNavbar() {
    sidenav.style.left = "-60%";
}
